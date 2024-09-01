# Datamole's React / TypeScript Assignment

Please, read following instructions and let us know if anything is not clear.

## 📋 General Rules and Requirements

-   Utilize any npm package you deem suitable.
-   In case of uncertainty about our expectations, please ask.
-   If unable to resolve an issue promptly, provide a brief explanation (e.g., missing knowledge, time constraints) and proceed.
-   Adhere to all familiar code quality principles.
-   Limit time spent on our assignment to a maximum of 6 hours. If necessary, prioritize tasks.
-   Submit your work via a git repository link (e.g., GitHub).
    -   Include the time spent on the assignment in your submission.
-   Document key solutions and decisions. Briefly explain your approach and reasoning in complex areas.

### 🚫 Restrictions

-   Do not modify the API (props) of the provided components.
-   Do not use any component library (Material UI for example).
-   Do not use Tailwind CSS.

### ⏰ Time Estimation

-   Start by thoroughly reading the assignment and reviewing the provided code to ensure you fully grasp the requirements.
-   Estimate the time needed to complete the assignment.
-   Email us your estimated completion time along with a realistic deadline, considering your existing commitments (e.g., work obligations, family responsibilities, vacations, or public holidays).

## 📝 Assignment Tasks

Complete all the tasks below.

### Client Application

More information about the client are in the `client/README.md`. Make sure you read them.

Using the provided UI components, implement the following modifications, bugfixes or new features (you can decide in what order):

#### Bugs

-   [ ] **B1**: `List` content
    -   Fix the content alignment of the non-empty `List` component.
-   [x] **B2**: `Footer` alignment
    -   Fix the `Layout` component so the `Footer` is always attached to the bottom of the `Layout`.

_Fix all other bugs and visual imperfections you find._

#### Features

-   [x] **F1**: Default values in `Footer`
    -   Modify the counters in `Footer` to show 0 when no value(s) are passed.
-   [x] **F2**: Load todo items
    -   After opening the application, todo items should be loaded from the server
    -   The todo items should be displayed in the `List` component.
-   [x] **F3**: Add a todo item
    -   Implement logic, which toggles visibility between the "add" button in the `Header` and a `Form` component.
    -   Entering a value inside the `Form` component and submitting it should create a new todo item.
    -   Data should be persisted on the server via an API call.
-   [x] **F4**: Edit a todo item's label
    -   Implement logic, which toggles visibility between the "edit" button in the `ListItem` and a `Form` component.
    -   Entering a value inside the `Form` component and submitting it should edit the existing todo item.
    -   Changes to the data should be persisted on the server via an API call.
-   [ ] **F5**: Complete a todo item
    -   After clicking on the checkbox in the `ListItem`, the todo item should toggle between "done" and "todo" states.
    -   Changes to the data should be persisted on the server via an API call.
-   [x] **F6**: Delete a todo item
    -   After clicking the "delete" button in the `ListItem`, the todo item should be deleted.
    -   Changes to the data should be persisted on the server via an API call.
-   [x] **F7**: Sort the todo items
    -   Sort the list of the todo items:
        -   "todo" items (not "done") should be displayed first,
        -   after that, items should be sorted by their creation date, descending.
-   [x] **F8**: Count the todo items
    -   Show a number of the "todo"/"done" items in the `Footer`.
-   [x] **F9**: `Button` component
    -   Create a `Button` component and use it instead of HTML `button` elements.

#### Styling

-   [x] **UI1**: `Header` "add" button alignment
    -   The "add" button should be aligned to the right in the `Header` component.
-   [x] **UI2**: `ListItem` actions alignment
    -   Action buttons in the `ListItem` component should be aligned to the right.
-   [x] **UI3**: `ListItem` actions visibility
    -   Action buttons in the `ListItem` component should be visible only when hovering over the `ListItem`.

#### Stories (optional tasks)

-   [ ] **SB1**: Add a story/stories for the `Layout` component.
-   [x] **SB2**: Add stories showing available `Button` variants.
-   [ ] **SB3**: Add a story showcasing the `ListItem` actions visibility change on hover (implemented in _"UI3"_).

### Server

-   [ ] **S1**: Implement a custom endpoint for marking single todo item as "done". Calling this endpoint sets the `done` field to `true` and the `finishedAt` field to current time. Use this new endpoint in the client.

## Additional Comments

-   Feel free to do any visual modifications that - in your opinion - improve the design of the application.
-   Feel free to install and use any public package you may need.

### GitHub

-   Do your best to use atomic commits.
-   In each commit that solves (fully or partly) one of the tasks above, add the task's id into the commit message. For example: _"B1: fix typo in ..."_.

### Storybook

-   We use the Storybook's format CSF3, but you can use the older version of the CSF format if you are more familiar with it.

## 🧅 Cibulka's comments

### ⏰ Time

I was working on the assingment on Sunday 1/9 2024. I've forked the repo at 9:59 and sent the last feature/bugfix commit around 15:45. 

### 🪞 Retrospective

That was a fun day! I liked how the assingment touched on various areas of the front-end development. 

Props api of the existing codebase did not allow to use async callbacks, the parameters did not allow to pass `id` to them as well. On the other hand the reality of most projects is working with existing codebase, so I found it as an interesting challenge to work around this (and not change any component props defintion). AFAIK I've succeeded.

I consider most of the tasks done, with some exceptions. Here they are:

#### Lint

I was working on somebody else's machine, as my Macbook is still in the repair shop. 🤦 This means two things:

1) I was not able to setup the autofix eslint feature in VSCode quickly. As it seems to me that the prepared NPM script in `/client` folder does not autofix anything either, there might unfortunately be some formal inconsistencies in the code (mainly formatting).

2) I've changed the local `.git/config` only after my first commit. For this reason you will find the first commit in git history signed by `eugtxi` account (who is my non-programming partner). Sorry for the confusion!

#### ❗ S1 - Add endpoint toggling "todo item" state

I have tried to implement new `PUT` endpoint as described in [`json-server` docs](https://github.com/typicode/json-server/tree/v0), however I receieve 404 errors in the browser while calling it. If I implement GET endpoint the same way, everything works.

I assume there is some silly mistake here that will be obvious for me tomorrow. I see it as one of those:
- bad configuration of json-server
- bad usage of native fetch

**This is the highest priority to fix.**

#### B1 - Fix the content alignment of the non-empty

I am not 100% sure what this task expected of me. Maybe it will be better to discuss it in person? If I have not delivered what was expected, I assume it will be a quick fix here.

#### SB1, SB3 - Stories for Layout and ListItem

Not sure if I've demonstrated all behaviour of the components that was needed. Let's discuss this tomorrow!

### 🪞 Areas for improvements

The endpoints for toggling completion of items need to be fixed by highest priority.

Beside this I consider the project more or less done and ready for design, UX and accessibility improvements. 