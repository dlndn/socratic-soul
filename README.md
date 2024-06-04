# Project Title: SocraticSoul

## Overview  

This is a simple mental health app that provides a space to reflect, process emotions and relationships, and express emotions in a healthy way.

### Problem

Many people do not know how to properly deal with some of their emotions, some of them could be new emotions. Some do not know where they stand in certain relationships, some do not know what to do in the current state of relationships. As a result, we end up harming people because we sometimes react and/or try to cope in unhealthy ways. This app will be just one of the many places to help navigate these emotions and relationships, mainly through guided self-discovery in the form of questions. This app can also help in attempting to express these emotions in a healthy way through digital, therapeutic means. 

### User Profile

Basically, anyone who is open to self-improvement or anyone who wants to reflect on their mental state can use this application. They can communicate with a chatbot to check in with them on how they feel, they can write in a journal to write how they feel, and they can participate on other therapeutic activities related to guided expression and reflection.

With all this said, I will have a (similar) disclaimer in the app and in here: 
> "This application should not replace a mental health professional and their services. If you are currently receiving help from a professional, please ask for permission to use this application. As the creator of this app, I am not responsible for any undoing of therapeutic/medical treatment or any possible negative side effects from using this application. This is an app with the aim to promote healthier thinking and healthier living choices, but there is always a chance that this can have the opposite effect for some individuals. Please use with the utmost caution."

### Features

Main Feature:

- Mental state processing via Socratic Method

  - Emotional: Process emotion(s) through guided questions and discover an action to properly deal with emotion(s), if desired and/or if possible

  - Relational: Process a relationship through guided questions and discover the next action to take in the relationship, if possible

Side Features:

- Express emotions through various therapeutic activities:

  - **Journaling**: Write down thoughts and describe mental state in text. Users will have the option to export entries into a (text, pdf, or markdown) file or to save into their account.
  - **Sticky Note Sharing**: Write down brief message in a "sticky note" and post them into a community board of sticky notes that can be seen by all users. (Original concept was provided by TA Jeff Ma)
  - **Etch-A-Sketch**: Simple grid on a page that can simulate a drawing by hovering over it and making lines. (Original concept discovered from the Odin Project)

Note that these features are not set in stone; some might change into a different activity, some might be removed due to time constraints, or there might be additions to the current listed activities. It really depends on the time available to implement these activities.

## Implementation

### Tech Stack

- Vite

- React

- Python and TensorFlow

  - To be used for the chatbot

  - The technology used is highly dependent on time and feasibility

  - As an alternative, a chatbot based off of an AI could be used to save time...

- MySQL (Optional)

- A framework/library to aid in styling pages (Optional)

### APIs

None at the moment; one possibility is to use an AI API as a chatbot if creating a chatbot is time consuming.

### Sitemap

It will probably be a Single Page Application, with different components being displayed depending on what activity is selected. A main page is displayed with buttons to select each activity.

- Main Page

- Thought Processing Components (Main components)

  - Emotional Processing

  - Relational Processing

- Expressive Components

  - Journaling Activity

  - Sticky Notes Activity

  - Etch-A-Sketch Activity

### Mockups

For now, the page design will be very simple and minimal:

- Main Page will have the Logo, a disclaimer popup, and large buttons to select an activity

- Emotional and Relational Processing Activites will be displayed in a chat-app style

- Expressive Activities will be displayed with simple inputs and minimal styling

Main goal is to create a functional application first, then elaborate on styling if there is time.
Color palette choice will have to play a key factor in design if the minimal style cannot be worked on.

### Data

User

- userId (PK)
- username
- password

Journal

- journalId
- userId (FK to User)
- entries
- latestEntryDate

Journal Entry

- entryId (PK)
- journalId (FK to Journal)
- userId (FK to User)

For now, journal entries and user accounts will be the only data to show CRUD functionality, if implemented. We can always add Mental State Processing Conversations and Etch-A-Sketch Pieces to stored data on servers, but to make things simpler, users can export the conversations or artwork into their local machine's storage.

### Endpoints

- GET /journal
- GET /journal/entries
- POST /journal/entries
- POST /login
- POST /signup

### Auth

User profile functionality and Auth can be implemented later, provided there is time.

## Roadmap

I will break the sprint into smaller sprints, which are done by weeks:

- 1st Week - Brainstorming, Designing/Planning, and Tech Stack Testing/Research

- 2nd Week - Functionality Implementation

- 3rd Week - Styling, Additional Features, Demo Day Prep, and Demo Day

## Nice-to-haves

- Changing the Etch-A-Sketch into a more unique or more therapeutic art therapy activity

- Elaborate styling for the app, with some animations and more gimmicky design features

- Adding more activities related to expression

- If the MVP has a chatbot that is built-from-scratch, improvements should be added to respond to more complex inputs.

- A database should be implemented if possible, it might be implemented now or post-bootcamp.
