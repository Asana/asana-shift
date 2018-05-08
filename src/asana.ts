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
    options?: { fields?: string[]; limit?: number; offset?: string };
}

// ASANA API

class Asana {
    premium: boolean;
    private _pageLimit: number;

    constructor(private token: string) {
        this._pageLimit = 100;
    }

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
                await this._asana(batch);
            } catch (err) {
                console.error(chalk.red(`– Error: task group ${i} failed: ${err}`));
            }
        }
    };

    getProject = async (projectId: string) => {
        const info = this._asana({
            method: "GET",
            relative_path: `projects/${projectId}`,
            options: {
                fields: ["due_date", "workspace.premium_tier"]
            }
        });

        const tasks = this._paginatedAsana({
            method: "GET",
            relative_path: `projects/${projectId}/tasks`,
            options: {
                fields: ["start_on", "due_on", "name"]
            }
        });

        const project = await Promise.all([await info, await tasks]);

        return {
            ...project[0].data,
            tasks: project[1]
        };
    };

    public setPremium = (tier: string) => {
        this.premium = tier !== "tier-0-free";
    };

    private _paginatedAsana = async <T>(action: Action) => {
        let offset = undefined;
        let more = false;
        let results: any = [];

        do {
            const page: any = await this._asana({
                ...action,
                options: { ...action.options, limit: this._pageLimit, offset }
            });

            results = results.concat(page.data);

            more = page.hasOwnProperty("next_page") && page.next_page !== null;

            if (more) offset = page.next_page.offset;
        } while (more);

        return results;
    };

    private _createBatches = (actions: Action[], batchSize = 10) => {
        return actions.reduce((acc, v, i, self) => {
            if (!(i % batchSize)) {
                return [...acc, self.slice(i, i + batchSize)];
            }
            return acc;
        }, []);
    };

    private _asana = async (action: Action[] | Action): Promise<any> => {
        const baseConfig = {
            baseURL: "https://app.asana.com/api/1.0/",
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };
        try {
            // Use fetch to create a promise and call Asana

            if (Array.isArray(action)) {
                const response = await axios({
                    ...baseConfig,
                    method: "POST",
                    url: "/batch",
                    data: { data: { actions: action } }
                });
                return response.data.data.map((v: any) => v.body.data);
            } else {
                let url = action.relative_path;

                if (action.options && action.options.fields) {
                    url += `?opt_fields=${action.options.fields.toString()}`;
                }

                if (action.options && action.options.limit) {
                    url += `&limit=${action.options.limit}`;
                }

                if (action.options && action.options.offset) {
                    url += `&offset=${action.options.offset}`;
                }

                const response = await axios({
                    ...baseConfig,
                    url,
                    method: action.method,
                    data: { data: { ...action.data } }
                });

                return response.data;
            }
        } catch (err) {
            throw err;
        }
    };
}

export default Asana;
