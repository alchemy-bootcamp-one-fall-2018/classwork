# Project Plan and Design and Execution


## Vertical Slices

* Feature-oriented outcome
* Cuts across layers:
    * CSS
    * HTML
    * Component
    * Data Api
    * Data

## Process

* Draft page of structural HTML/CSS
* Make tree of static components
* Pick workflow through components
    * Make dynamic, handle events, logic
    * Add Data APIs as needed
    * Repeat until done


## Known Good State

1. Keep in clean!
1. Incrementalism
1. Not a goal to obtain, but a place to never leave

## Project Plan

Your project plan document may be presented either on paper or electronically. It can be presented on a whiteboard, however must be highly organized and clear.

The project plan document should contain the following information:

- Your team's name (if you want one)
- Your team's members
- Your project's name and concept
- Summary of how team plans to address details in the problem domain
- High-level wire frame of each of the pages of your app
- Component diagrams for each page
    - Sketches/wire frames of your project's pages
    - Boxes for components
    - Component Tree Diagrams
        - Tree of Components
        - Data (State) each component needs to do job
            - List of things that change
            - Events
            - Derived data
        - Data Flow
            - Data down
            - Events up (callbacks)

- TIP: Use pencil and paper to diagram and sketch, or the whiteboard. Online tools look snazzy but take some time to learn.

# Project Approval

**NOTE:** You should not be writing any code prior to the approval of the project plan including component diagrams

# GitHub Setup

Next up: time to get set up in GitHub.

- Create a new Git Organization for the team
- Add team members as admins
- Initialize a new Repository
- **Add TravisCI**
- Add your:
    - Group Agreement
    - Project Plan

## Scaffolding Phase

Here are some suggestions on how to organize your team during the launch phase:

- Elect a Launch Driver who will be responsible for the following.
- Driving the coding of the initial scaffolding phase.
- The rest of the team will be Launch Navigators and responsible for the following.
- Staying one-step ahead of the Launch Driver by researching unfamiliar technology.

Result of Scaffolding is not only baseline files, but ability for all team members to contribute code (PR)

## Task Planning

Now that your project is launched, here's how to organize the development efforts of your team. Your goal is to have the entire work plan for the project planned and organized, down to the finest details, before you begin any coding:

- Use GitHub Issues or a tool like waffle.io or Trello to manage and divide up the work between your team members. This planning is essential.
- Create new issues that'll take approximately 30 minutes to 2 hours (max!) to complete.
- Use labels and milestones as your team sees fit, but leave all newly created issues unassigned.

## Task Work Example

- Assign an issue to yourself when you commit to working on it.
- Each feature should be built on its own branch. Think of each of the issues above as a feature.
- Once assigned, create a branch using a following naming scheme such as the following:
- Imagine issue '#1' is titled "Add an about.html page".
- The branch name would be add_about_page.
- Push the commits on your branch to GitHub regularly.
- Create a Pull Request for your branch even if you're unsure if it'll be merged into master.
- Ask someone else on your team to review the code in your Pull Request.
- If changes are required, make them on your branch and push them to GitHub for another review.
- Once satisfied, let the reviewer merge your Pull Request. Don't merge your own Pull Request.