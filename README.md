# asana-shift 🍃💨🍂

A small node script which uses the Asana API to shift all task start and due dates relative to a project's due date.

The script works by finding the difference (in days) between a project's due date and the latest due date on a task in that project. It then applies that difference (negative or positive) to every task's dates in the project, effectively shifting all the dates so that latest task due date lands on the same day as the project due date.

## Use cases

*   You've just copied a project from a template. All the tasks will still take the same amount of time, but you need to shift to align with the end date of this new project.
*   Your project plan has slipped and you'd like to shift all task dates to adjust to an new target date.

## In-product workaround

In some cases, it might be reasonable to adjust task dates in the Asana product by multi-selecting tasks on Timeline view and dragging them. In practice, this is an unpleasant solution if you are working on a larger project with 20 or more tasks – in that situation, this script can be enormously useful.

## Using the script

### 1. Set up your computer to run the script

In order to run this script you'll need to set up one or two quick things. Each step is pretty straightforward, so even if you aren't especially technical you should be able to get up and running just fine. If you do have any questions, feel free to open a Github issue on this repository and ask for help.

*   Install [node](https://nodejs.org)
*   [Clone](https://help.github.com/articles/cloning-a-repository/) this repository
*   From the directory in which you've cloned the repository, open a terminal or console and enter

```
$ npm install
```

*   In the same terminal window, enter

```
$ npm run build
```

*   In Asana, generate a [Personal Access Token](https://asana.com/guide/help/api/api#gl-access-tokens) or create a [Service Account](https://asana.com/guide/help/premium/service-accounts) and save it somewhere secure

### 2. Run the script

Now you're all ready to run the script and you won't have to do any of the set up above ever again. On to the easy part:

*   Open the Asana Project you'd like to shift dates in.
    *   Make sure it has a [Project due date](https://asana.com/guide/help/projects/progress)
    *   Make sure that at least one task has a due date
*   From your browser's address bar, copy and save the Project's ID
    *   Your Project ID is in this part of the URL: https://app.asana.com/0/**[project-id]**/
*   In terminal or a bash shell, navigate to the directory in which you cloned the repository and run

```
$ node ./dist/shift.js
```

*   You'll be prompted for the Asana token you generated earlier
*   You'll also be prompted for the Project ID you copied earlier
*   At last, the script will run and all your due dates will be in tip top shape ✨

One other note, if you'd prefer to provide all the scripts options (the access token and Project ID) up front – maybe because you want to automate the script through another serivce – you can also do that by running:

```
$ node ./dist/shift.js --token <access-token> --project <project-id>
```

## Limitations of the script

The script contains some logic to make sure you don't get yourself into trouble.

For example, you cannot run this script on a project without a due date or a project in which there are no tasks with due dates.

There also are some fairly liberal limitations on how many dates can be shifted to keep in mind:

*   In a premium Asana Workspace or Organization you can shift up to **1500 dates**.
*   In a free Asana Worksapce or Organization you can shift up to **150 dates**.

## Development

If you're interested in doing some development on top of this script, getting started is easy.

The script is written in TypeScript and uses moment for working with dates and axios for fetching. We bundle and compile our TypeScript using webpack.

You can build the script for development using:

```
npm run build:dev
```

You can also have webpack watch for changes and build as you're developing using:

```
npm run watch
```

There are minimalist, but useful unit tests that can be ran using:

```
npm test
```
