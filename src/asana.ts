import axios from "axios";
import chalk from "chalk";

// Asana client library type is out of date, so we'll extend it
export interface Resource {
    id: number;
}

export interface Workspace extends Resource {
    premium_tier: string;
}

export interface Task extends Resource {
    name: string;
    due_on: string;
    start_on: string;
}

export interface Project extends Resource {
    due_date: string;
    workspace: Workspace;
}

// Basic type for actions we send to the Asana batch API
export interface Action {
    method: string;
    relative_path: string;
    data?: Object;
    options?: Object;
}

// ASANA API

class Asana {
    premium: boolean;

    constructor(private token: string) {}

    putTaskDates = async (tasks: Task[]) => {
        const batchLimit = this.premium ? 150 : 15;

        const actions: Action[] = tasks.map((task: Task): Action => ({
            method: "PUT",
            relative_path: `/tasks/${task.id}`,
            data: {
                start_on: task.start_on,
                due_on: task.due_on
            }
        }));

        const batches = this._createBatches(actions);

        if (batches.length >= batchLimit) {
            throw new Error("This project has too many dates for us to shift");
        }

        let i = 0;

        for (const batch of batches) {
            i += 1;
            console.log(chalk.yellowBright(`– Processing task group ${i}`));
            try {
                await this._asanaBatch(batch);
            } catch (err) {
                console.error(chalk.red(`– Error: task group ${i} failed: ${err.message}`));
            }
        }
    };

    getProject = async (projectId: string) => {
        const actions = [
            {
                method: "GET",
                relative_path: `projects/${projectId}`,
                options: {
                    fields: ["due_date", "workspace.premium_tier"]
                }
            },
            {
                method: "GET",
                relative_path: `projects/${projectId}/tasks`,
                options: {
                    fields: ["start_on", "due_on", "name"]
                }
            }
        ];

        const response = await this._asanaBatch(actions);

        // set premiumness
        this._setPremium(response[0].workspace.premium_tier);

        return response;
    };

    _setPremium = (tier: string) => {
        this.premium = tier !== "tier-0-free";
    };

    _createBatches = (actions: Action[], batchSize = 10) => {
        return actions.reduce((acc, v, i, self) => {
            if (!(i % batchSize)) {
                return [...acc, self.slice(i, i + batchSize)];
            }
            return acc;
        }, []);
    };

    _asanaBatch = async (actions: Action[]): Promise<any> => {
        try {
            // Use fetch to create a promise and call Asana
            const response = await axios({
                url: "/batch",
                baseURL: "https://app.asana.com/api/1.0/",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.token}`
                },
                data: { data: { actions } }
            });
            return response.data.data.map((v: any) => v.body.data);
        } catch (err) {
            throw err.response.data;
        }
    };
}

export default Asana;
