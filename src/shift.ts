/// <reference path="./declarations/prompt.d.ts"/>

// IMPORTS

import moment from "moment";
import commander from "commander";
import prompt from "prompt";
import chalk from "chalk";

import Asana, { Task, Project } from "./asana";

// BIZ LOGIC

export const getShiftAmount = (project: Project, tasks: Task[]) => {
    // get our ends
    const projectEnd = moment(project.due_date);
    const taskEnd = moment.max(tasks.map((task: Task) => moment(task.due_on)));

    // SHIFT DATES
    if (projectEnd && taskEnd) {
        return projectEnd.diff(taskEnd, "days");
    } else {
        throw new Error(
            chalk.red(
                "Error: Your project must have a due date and at least one task in your project must have a due date"
            )
        );
    }
};

// ShiftTaskDate

// Takes a task and outputs a task with start and due date shifted by a specific number of days (`shiftAmount`)
export const shiftTaskDate = (task: Task, shiftAmount: number): Task => {
    let start_on = task.start_on;
    let due_on = task.due_on;

    if (start_on) {
        start_on = moment(start_on)
            .add(shiftAmount, "days")
            .format("YYYY-MM-DD");
    }
    if (task.due_on) {
        due_on = moment(due_on)
            .add(shiftAmount, "days")
            .format("YYYY-MM-DD");
    }
    return {
        id: task.id,
        name: task.name,
        start_on,
        due_on
    };
};

export const shift = (tasks: Task[], shiftAmount: number, asana: Asana) => {
    // 1. Tell the user we're shifting
    console.log(`Shifting task dates by ${shiftAmount} days... (This might take a bit)`);

    return asana.putTaskDates(tasks.map((task: Task) => shiftTaskDate(task, shiftAmount)));
};

const processInputs = async (inputs: any) => {
    const asana = new Asana(inputs.token);

    try {
        // 1. GET PROJECT INFORMATION
        // tell our user
        console.log("Loading your project...");
        const project = await asana.getProject(inputs.project);

        asana.setPremium(project.workspace.premium_tier);

        const tasks: Task[] = project.tasks.filter((task: Task) => task.due_on);

        // validate tasks
        if (tasks.length === 0) {
            throw new Error(chalk.red("Error: There are no tasks in this project with dates"));
        }

        console.log(chalk.greenBright("Project loaded."));

        // 2. SHIFT TASK DATES
        let shiftAmount;

        if (inputs.shift) {
            shiftAmount = inputs.shift;
        } else {
            // get shift amount
            shiftAmount = getShiftAmount(project, tasks);
        }

        if (shiftAmount === 0) {
            throw "Latest task due date is aligned with project due date. Nothing to shift.";
        }

        // Execute shift
        await shift(tasks, shiftAmount, asana);

        // Tell our users about our success
        console.log(chalk.greenBright("Success!"));
    } catch (err) {
        console.error(err);
        return;
    }
};

const main = () => {
    // 1. Take options if we have them
    commander
        .version("1.0.0")
        .option("-t, --token <token>", "Personal Access or Service Account token")
        .option("-p, --project <id>", "Project ID")
        .option("-s, --shift [shift]", "Shift amount, if no project due date is provided", parseInt)
        .parse(process.argv);

    if (commander.rawArgs.length > 2) {
        // We've been given options, lets check those and then process those through
        if (!commander.token) {
            console.log("Please set the `--token` option with a personal access token");
            return;
        }
        if (!commander.project) {
            console.log("Please set the`--project` option with a valid project ID");
            return;
        }

        processInputs(commander);
    } else {
        // If we have no options, prompt the user for the inputs we need.
        const schema = {
            properties: {
                token: {
                    message: "please enter a valid service account or personal access token",
                    pattern: /^0\//,
                    required: true
                },
                project: {
                    message: "project id",
                    required: true
                }
            }
        };

        // 2. Prompt user for inputs
        prompt.colors = false;
        prompt.message = "";
        prompt.start();

        prompt.get(schema, (err: any, inputs: any) => {
            if (err) {
                throw err;
            }
            processInputs(inputs);
        });
    }
};

main();
