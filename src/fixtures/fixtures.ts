import { Action, Task, Project } from "../asana";

export const getAction1: Action = {
    method: "GET",
    relative_path: "place/thing",
    options: {
        fields: ["due_date", "workspace"]
    },
    data: {
        start_on: "2010-02-12",
        due_on: "2010-02-22"
    }
};

export const getAction2: Action = {
    method: "GET",
    relative_path: "place/thing",
    options: {
        fields: ["due_date"]
    },
    data: {
        start_on: "2010-03-12",
        due_on: "2010-03-22"
    }
};

export const getActions: Action[] = [getAction1, getAction2];

export const putAction: Action = {
    method: "PUT",
    relative_path: "/tasks/632650530553661",
    data: { start_on: null, due_on: "2019-07-04" }
};

export const putActions: Action[] = [
    {
        method: "PUT",
        relative_path: "/tasks/632650530553661",
        data: { start_on: null, due_on: "2019-07-04" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/632650530553662",
        data: { start_on: "2019-03-12", due_on: "2019-03-16" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/632650530553663",
        data: { start_on: null, due_on: "2019-03-20" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390378",
        data: { start_on: null, due_on: "2019-05-29" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390379",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390381",
        data: { start_on: "2019-05-21", due_on: "2019-05-24" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390382",
        data: { start_on: null, due_on: "2019-05-29" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633551592390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/63323423490384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/636585685885",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    ,
    {
        method: "PUT",
        relative_path: "/tasks/63356575670383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633565754390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/6365756390385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/63546457390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/6343543390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/6346436634685",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/63355154334683",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/6335543634684",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/634363436646385",
        data: { start_on: null, due_on: "2019-06-03" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/633463462390383",
        data: { start_on: "2019-06-17", due_on: "2019-06-21" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/634643692390384",
        data: { start_on: "2019-05-27", due_on: "2019-05-31" }
    },
    {
        method: "PUT",
        relative_path: "/tasks/63355159235235",
        data: { start_on: null, due_on: "2019-06-03" }
    }
];

export const task: Task = {
    id: 632650530553661,
    due_on: "2018-12-09",
    name: "Test 1",
    start_on: "2018-12-05"
};

export const tasks: Task[] = [
    {
        id: 632650530553661,
        due_on: "2019-03-29",
        name: "Test 1 ",
        start_on: null
    },
    {
        id: 632650530553662,
        due_on: "2018-12-09",
        name: "Test 2",
        start_on: "2018-12-05"
    },
    {
        id: 632650530553663,
        due_on: "2018-12-13",
        name: "Test 3",
        start_on: null
    },
    {
        id: 633551592390378,
        due_on: "2019-02-21",
        name: "Test 4",
        start_on: null
    },
    {
        id: 633551592390379,
        due_on: "2019-02-26",
        name: "Test 5",
        start_on: null
    },
    {
        id: 633551592390380,
        due_on: null,
        name: "Test 6",
        start_on: null
    },
    {
        id: 633551592390381,
        due_on: "2019-02-16",
        name: "Test 7",
        start_on: "2019-02-13"
    },
    {
        id: 633551592390382,
        due_on: "2019-02-21",
        name: "Test 8",
        start_on: null
    },
    {
        id: 633551592390383,
        due_on: "2019-03-16",
        name: "Test 9",
        start_on: "2019-03-12"
    },
    {
        id: 633551592390384,
        due_on: "2019-02-23",
        name: "Test 10",
        start_on: "2019-02-19"
    },
    {
        id: 633551592390385,
        due_on: "2019-02-26",
        name: "Test 11",
        start_on: null
    },
    {
        id: 633551592390386,
        due_on: "2019-03-14",
        name: "Test 12",
        start_on: null
    },
    {
        id: 633551592390387,
        due_on: "2019-02-26",
        name: "Test 13",
        start_on: null
    },
    {
        id: 633551592390388,
        due_on: "2019-03-22",
        name: "Test 14",
        start_on: null
    },
    {
        id: 633551592390389,
        due_on: "2019-03-28",
        name: "Test 15",
        start_on: "2019-03-06"
    },
    {
        id: 633551592390390,
        due_on: "2019-03-15",
        name: "Test 16",
        start_on: "2019-03-06"
    },
    {
        id: 633551592390391,
        due_on: "2019-02-28",
        name: "Test 17",
        start_on: null
    },
    {
        id: 633551592390392,
        due_on: "2019-03-12",
        name: "Test 18",
        start_on: null
    },
    {
        id: 633551592390393,
        due_on: "2019-03-21",
        name: "Test 19",
        start_on: null
    },
    {
        id: 633551592390394,
        due_on: "2018-12-20",
        name: "Test 20",
        start_on: "2018-12-12"
    },
    {
        id: 633551592390395,
        due_on: "2019-02-20",
        name: "Test 21",
        start_on: null
    },
    {
        id: 633551592390396,
        due_on: "2019-02-07",
        name: "Test 22",
        start_on: null
    },
    {
        id: 633551592390397,
        due_on: "2019-02-09",
        name: "Test 23",
        start_on: null
    },
    {
        id: 633551592390398,
        due_on: "2019-02-06",
        name: "Test 24",
        start_on: null
    },
    {
        id: 633551592390399,
        due_on: "2019-02-26",
        name: "Test 25",
        start_on: null
    },
    {
        id: 633551592390400,
        due_on: "2019-02-20",
        name: "Test 26",
        start_on: "2019-02-06"
    },
    {
        id: 633551592390401,
        due_on: "2019-02-20",
        name: "Test 27",
        start_on: "2019-02-06"
    },
    {
        id: 633551592390402,
        due_on: "2019-03-02",
        name: "Test 28",
        start_on: "2019-02-23"
    },
    {
        id: 633551592390403,
        due_on: "2019-02-22",
        name: "Test 29",
        start_on: "2019-02-20"
    },
    {
        id: 633551592390404,
        due_on: "2019-03-07",
        name: "Test 30",
        start_on: "2019-02-27"
    },
    {
        id: 633551592390405,
        due_on: "2019-02-14",
        name: "Test 31",
        start_on: null
    },
    {
        id: 633551592390406,
        due_on: "2019-02-20",
        name: "Test 32",
        start_on: "2019-02-15"
    },
    {
        id: 633551592390408,
        due_on: "2019-03-16",
        name: "Test 33",
        start_on: "2019-03-12"
    },
    {
        id: 633551592390409,
        due_on: "2019-02-28",
        name: "Test 34",
        start_on: "2019-02-27"
    },
    {
        id: 633551592390411,
        due_on: "2019-02-20",
        name: "Test 35",
        start_on: "2019-02-15"
    },
    {
        id: 633551592390412,
        due_on: "2019-03-15",
        name: "Test 36",
        start_on: "2019-03-13"
    },
    {
        id: 633551592390413,
        due_on: "2019-02-21",
        name: "Test 37",
        start_on: null
    },
    {
        id: 633551592390414,
        due_on: "2019-03-20",
        name: "Test 38",
        start_on: null
    },
    {
        id: 633551592390415,
        due_on: "2019-03-15",
        name: "Test 39",
        start_on: "2019-03-12"
    },
    {
        id: 633551592390416,
        due_on: "2019-02-14",
        name: "Test 40",
        start_on: "2019-02-12"
    },
    {
        id: 633551592390417,
        due_on: "2019-02-19",
        name: "Test 41",
        start_on: null
    },
    {
        id: 633551592390418,
        due_on: "2019-02-23",
        name: "Test 42",
        start_on: "2019-02-19"
    },
    {
        id: 633551592390419,
        due_on: "2019-02-13",
        name: "Test 43",
        start_on: "2019-02-06"
    },
    {
        id: 633551592390420,
        due_on: "2019-02-13",
        name: "Test 44",
        start_on: null
    },
    {
        id: 633551592390421,
        due_on: "2019-02-09",
        name: "Test 45",
        start_on: null
    },
    {
        id: 633551592390422,
        due_on: "2019-02-13",
        name: "Test 46",
        start_on: null
    },
    {
        id: 633551592390423,
        due_on: "2019-02-21",
        name: "Test 47",
        start_on: null
    },
    {
        id: 633551592390424,
        due_on: null,
        name: "Test 48",
        start_on: null
    },
    {
        id: 633551592390425,
        due_on: "2019-02-21",
        name: "Test 49",
        start_on: "2019-02-13"
    },
    {
        id: 633551592390426,
        due_on: "2019-02-22",
        name: "Test 50",
        start_on: null
    },
    {
        id: 633551592390428,
        due_on: "2019-02-21",
        name: "Test 51",
        start_on: null
    }
];

export const project: Project = {
    id: 632650530553659,
    due_date: "2019-04-26",
    workspace: { id: 15793206719, premium_tier: "tier-2-enterprise" }
};
