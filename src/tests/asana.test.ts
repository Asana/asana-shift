import Asana, { Task, Project, Action } from "../asana";
import * as fixtures from "../fixtures/fixtures";

describe("Test our logical API functions", () => {
    const asana = new Asana("0/abc123");
    test("given an array of tasks, putTaskDates rejects and throws if we are over the batchLimit", () => {
        const tasks = [...fixtures.tasks, ...fixtures.tasks, ...fixtures.tasks, ...fixtures.tasks];

        expect(asana.putTaskDates(tasks)).rejects.toEqual(
            new Error("This project has too many dates for us to shift")
        );
    });
});
