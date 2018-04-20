import Asana, { Task, Project, Action } from "../asana";
import * as fixtures from "../fixtures/fixtures";

describe("Test our logical API functions", () => {
    const asana = new Asana("0/abc123");

    test("Given a the proper arguments, createPackets breaks up an array into arrays of no more than 10 actions", () => {
        const packets: Action[][] = asana._createPackets(fixtures.putActions);

        expect(packets.length).toEqual(6);

        for (const packet of packets) {
            expect(packet.length).toBeLessThanOrEqual(10);
        }
    });

    test("given an array of tasks, putTaskDates rejects and throws if we are over the packetLimit", () => {
        const tasks = [...fixtures.tasks, ...fixtures.tasks, ...fixtures.tasks, ...fixtures.tasks];

        expect(asana.putTaskDates(tasks)).rejects.toEqual(
            new Error("This project has too many dates for us to shift")
        );
    });
});
