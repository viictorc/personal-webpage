# Project 1: Personal Homepage

## Author

Ran Cao

## Class Link

Add the course Canvas or class website link here.

Review: Course link is missing here

## Project Objective

The objective of this project is to create a personal homepage using vanilla HTML5, CSS3, and ES6 JavaScript modules. The site introduces my background, skills, projects, and includes an AI generated page. The project does not use a backend, jQuery, React, Vue, or component libraries.

## Pages

- `index.html` - main homepage
- `about.html` - about page and user stories
- `ai.html` - AI generated page

## Screenshot

Add your screenshot here after running the site.

Review: Screenshot placeholder text not removed

Example:

```md
![Homepage screenshot](./images/screenshot.png)
```

## Instructions to Build and Run

1. Install dependencies:

```bash
npm install
```

2. Run ESLint:

```bash
npm run lint
```

3. Format with Prettier:

```bash
npm run format
```

4. Open the project with VS Code Live Server, or open `index.html` directly in a browser.

## Creative / Original Component

The site includes original JavaScript functionality:

- Dark mode toggle using `localStorage`
- Project category filtering
- Random study reminder generator on the AI page

## GenAI Usage

I used ChatGPT to help generate the initial project structure, page content, CSS layout, and JavaScript functionality. The model used was GPT-5.5 Thinking. I asked it to create a vanilla HTML, CSS, and ES6 module personal homepage that follows the project rubric. I reviewed and adjusted the generated content so it matched my project needs and class requirements.

Example prompt:

```text
Create a personal homepage project using only vanilla HTML5, CSS3, and ES6 modules. Include at least three pages, organized folders, a README, package.json, ESLint, Prettier, MIT license, dark mode, project filtering, and an AI generated page.
```

## Design Document Summary

### Project Description

This website is a personal homepage for Ran Cao. It presents my software engineering background, projects, skills, and contact information in a clean portfolio style.

### User Personas

1. Recruiter: wants to quickly understand my skills and projects.
2. Instructor: wants to check that the project follows the rubric.
3. Classmate: wants to learn more about my background and project style.

### User Stories

- As a recruiter, I want to view Ran's skills quickly so that I can understand his technical background.
- As an instructor, I want to see multiple pages and ES6 modules so that I can grade the assignment requirements.
- As a classmate, I want to read the about page so that I can learn about Ran's development journey.

### Design Mockups

The layout uses a simple portfolio structure:

- Header navigation at the top
- Large hero section
- Skill cards
- Project cards in a responsive grid
- Separate about and AI pages
- Footer at the bottom
