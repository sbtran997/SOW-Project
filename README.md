# GroupS_CS4273_Spring2026

# SOW-Project

Our project consists of creating a robust tool that lets users assemble SOWs(Statement of Work) by selecting standardized template sections and adding custom inputs, then generates a fully formatted and professional final document.

## Technologies and Tools

**Next.js**

- Next.js is a React/JavaScript framework that will serve as the user-facing portion of the project. It'll be the UI and logic they interact with for creating templates, editing SoWs, etc..

**shadcn/ui**

- shadcn/ui is a popular UI library for most JavaScript frameworks. It has easy-to-use, accessible, well-designed UI components that are ready out of the box to integrate into our Next.js frontend.

**[python-docx](https://python-docx.readthedocs.io/en/latest/)**

- This is a Python tool that allows you to programmatically create Microsoft Word documents, which is a major feature required by the client. It'll be part of a backend service that takes data fed in by the Next.js frontend to then create .docx files and provide them to the user.

## Features

**Feature 1**

- Explanation 1

**Feature 2**

- Explanation 2

**Feature 3**

- Explanation 3

## Goals

- Goal 1
- Goal 2
- Goal 3

## Progress Plan

- Plan 1
- Plan 2

## Running the Code

The Next.js frontend is located in the `sow-creator` directory of the repository. To start, navigate there:

```bash
cd sow-creator
```

Then, to run the app, install the dependencies using npm and run the development server.

```bash
npm install # install dependencies
npm run dev # start a development server.
```

To close a running development server, you can either kill the terminal the process is running in or use the `Ctrl+C` keyboard shortcut.

A production build of the frontend can be produced by running:

```bash
npm run build
```

The backend service is a future task, so instructions for running it are forthcoming.

## Authors ✍️

### Contributors names

- Alex Teague - Product Owner <br />
- Collin Sumrell <br />
- Joseph Rodriguez - Quality Assurance <br />
- Matthew Tran <br />
- Steven Tran <br />
