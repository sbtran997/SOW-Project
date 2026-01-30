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

**Compatability with Sharepoint**

- Users need to be able to upload a document to Sharepoint in order to save their work. This may either be done through downloading a document and saving it to sharepoint, or by linking the app to microsoft with an API.

**Creation of Form Templates**

- Certain users must be able to create new templates for SOWs. This must have some sense of access control.

**Document Creation Using Information Entered into Template SOWs**

- Information put into loaded templates must be able to be saved to a document, whether it be .pdf or .docx or .txt

## Goals

- Long-lasting project use
- Usability with non-computer wizards (both for template creation and information inputs)
- Robust and dynamic template framework

## Progress Plan

- Template framework/language by end of Sprint 1 (February 20th)
- Basic proof of work by end of Sprint 1
  - Web-app shell, with interactability
  - Library of existing templates
  - Load an existing template -> turn it into an interactable form
- Template creation by end of Sprint 2 (March 13th)
- Saveable documents by end of Sprint 3 (April 17th)
- Demonstration with client "around 35% completion"

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

- Alex Teague - Product Owner - responsible for creating KanBanSystem tickets, reaching out to the client on behalf of the dev team, assigning tasks to other developers <br />
- Joseph Rodriguez - Quality Assurance - Manage the GitHub Repository, create and ensure proper testing, monitor the quality of the product <br />
- **Sprint Masters** - Responsible for Risk Management, Challanges, Lesson Learned sections of KanBanSystem for all tickets associated with their sprint <br />
  - Collin Sumrell <br />
  - Matthew Tran <br />
  - Steven Tran <br />
