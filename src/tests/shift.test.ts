import * as shift from "../shift";
import Asana, { Task, Project } from "../asana";
import * as fixtures from "../fixtures/fixtures";

describe("Business logic", () => {
    test("Given a task and a shiftAmount, shiftTaskDate returns a task with shifted dates", () => {
        const shiftAmount = 124;
        const task: Task = {
            id: 632650530553661,
            name: "Test 1",
            start_on: "2019-04-08",
            due_on: "2019-04-12"
        };

        expect(shift.shiftTaskDate(fixtures.task, shiftAmount)).toEqual(task);
    });

    test("Given a project and some tasks, getShiftAmount returns the correct number", () => {
        const tasks = fixtures.tasks.filter((task: Task) => task.due_on);
        expect(shift.getShiftAmount(fixtures.project, tasks)).toEqual(28);
    });
});
