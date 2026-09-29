# EchoGPT Redesign

A modern frontend redesign of the EchoGPT AI platform, created as part of the **AppifyDevs Software Engineering Internship — Frontend Practical Assignment**.

The project focuses on improving the visual design, usability, responsiveness, and overall user experience of the EchoGPT ecosystem through three main experiences:

* EchoGPT Web App redesign
* EchoGPT Landing Page
* EchoGPT Chrome Extension redesign concept

## Live Demo

**Live Website:** https://echogpt-redesign-seven.vercel.app

## GitHub Repository

**Repository:** https://github.com/Shuvro882/EchoGPT

---

## Project Overview

This project is a frontend-focused redesign of EchoGPT using **Next.js, Tailwind CSS, and Lucide React**.

The goal was to create a cleaner, more modern, responsive, and user-friendly interface while maintaining EchoGPT's core visual identity.

The project contains separate routes for the landing page, web application, authentication screens, and Chrome extension concept.

---

## Assignment Goals

The redesign addresses the three major requirements of the assignment:

### 1. EchoGPT Web App Redesign

The existing EchoGPT interface was redesigned with a more structured and responsive layout.

Key improvements include:

* Modern sidebar navigation
* Responsive mobile navigation
* Improved chat workspace
* Dark mode
* Loading experience
* Feature-based workspace navigation
* AI tool interfaces
* Better visual hierarchy
* Consistent spacing and component design
* Improved empty states and feedback states

### 2. EchoGPT Landing Page

A dedicated marketing landing page was created to introduce EchoGPT and its capabilities.

The page includes:

* Hero section
* Product introduction
* Features
* AI model showcase
* Product preview
* Why EchoGPT
* FAQ
* Call-to-action sections
* Footer

### 3. Chrome Extension Redesign Concept

A redesigned concept for the EchoGPT Chrome Extension was created as a dedicated page.

The concept includes:

* Extension side-panel interface
* Chat and History navigation
* AI model selection
* Current webpage context
* Prompt input
* Quick actions
* Recent conversations
* Page context support
* Multiple AI model support
* Settings access
* Responsive presentation

This is a **frontend concept**, not a fully functional Chrome extension.

---

## Features

### Web App

* Responsive sidebar
* Mobile navigation
* Dark / light mode
* Chat workspace
* AI feature navigation
* Loading state
* Suggestion cards
* Prompt composer
* History interface
* Connectors interface
* AI Tasks
* AI Job Analysis
* AI SOP Builder
* Image Studio
* Video Studio
* Compare AI models
* Store
* Support
* Newsletter
* Subscription plans
* Settings

### Authentication

* Login page
* Registration page
* Dedicated authentication layout
* Responsive authentication UI

### Chrome Extension Concept

* Quick AI actions
* Chat interface
* Conversation history
* Model selector
* Current page context
* Prompt composer
* Recent chats
* Extension feature showcase
* Responsive extension preview

---

## Tech Stack

* **Next.js 16**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **Lucide React**
* **Vercel**
* **Git & GitHub**

---

## Project Structure

```text
echogpt-redesign/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.jsx
│   │
│   ├── chat/
│   │   ├── page.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ChatHeader.jsx
│   │   ├── WelcomeSection.jsx
│   │   ├── SuggestionCards.jsx
│   │   └── Composer.jsx
│   │
│   ├── chat-features/
│   │   ├── ImageStudio.jsx
│   │   ├── VideoStudio.jsx
│   │   ├── Compare.jsx
│   │   ├── Connectors.jsx
│   │   ├── History.jsx
│   │   ├── Store.jsx
│   │   ├── AITasks.jsx
│   │   ├── AIJobAnalysis.jsx
│   │   ├── AISOPBuilder.jsx
│   │   ├── Support.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Subscriptions.jsx
│   │   └── Settings.jsx
│   │
│   ├── components/
│   │   └── Loading.jsx
│   │
│   ├── extension/
│   │   └── page.jsx
│   │
│   ├── globals.css
│   ├── layout.js
│   ├── loading.jsx
│   └── page.jsx
│
├── public/
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## Routes

| Route        | Description                       |
| ------------ | --------------------------------- |
| `/`          | EchoGPT Landing Page              |
| `/chat`      | EchoGPT Web App redesign          |
| `/extension` | Chrome Extension redesign concept |
| `/login`     | Login page                        |
| `/register`  | Registration page                 |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shuvro882/EchoGPT.git
```

### 2. Navigate to the project

```bash
cd echogpt-redesign
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Production Build

To verify the project before deployment:

```bash
npm run build
```

The project successfully generates a production build using Next.js.

---

## Design & UX Improvements

The redesign focuses on:

* Clear visual hierarchy
* Consistent spacing
* Responsive layouts
* Accessible navigation
* Reusable UI patterns
* Clear empty states
* Loading feedback
* Modern card-based interfaces
* Consistent purple visual identity
* Mobile-friendly navigation
* Dark mode support
* Improved interaction feedback

The interfaces were designed to feel like a unified EchoGPT product rather than three completely separate experiences.

---

## Responsive Design

The application is designed to adapt to different screen sizes.

Responsive improvements include:

* Collapsible sidebar
* Mobile navigation
* Flexible content layouts
* Responsive cards
* Adaptive typography
* Mobile-friendly forms
* Responsive extension preview
* Flexible spacing and containers

---

## Additional Features

Beyond the basic assignment requirements, the project includes:

* Dark mode
* Reusable loading component
* Responsive mobile navigation
* Interactive UI states
* AI model selection interfaces
* Search and filtering interfaces
* Empty and error states
* Subscription interface
* Settings interface
* Connector management interface
* Multiple AI tool interfaces

---

## Assumptions & Limitations

This project is primarily a **frontend redesign and UI/UX implementation**.

The following features are represented as frontend concepts or UI interactions and are not connected to production backend services:

* Real AI model generation
* User authentication backend
* Persistent conversations
* Real connector integrations
* Real payment/subscription processing
* Actual Chrome extension APIs
* Real browser page-context extraction
* Production database
* Real-time AI responses

The Chrome Extension page is a **design concept demonstrating the proposed extension experience**, rather than a packaged and installable Chrome extension.

---

## Performance & Code Quality

The project uses:

* Next.js App Router
* Reusable React components
* Client-side state only where interaction requires it
* Tailwind CSS utility classes
* Lucide React icons
* Static rendering where applicable
* Responsive component design
* Production build verification before deployment

The project was tested with:

```bash
npm run build
```

and successfully generated the production build.

---

## Deployment

The application is deployed on **Vercel**.

Live deployment:

https://echogpt-redesign-seven.vercel.app

The GitHub repository is connected to Vercel for deployment.

---

## Future Improvements

If this project were developed beyond the assignment, the following could be added:

* Real authentication
* Backend API integration
* Persistent chat history
* Real AI model APIs
* Streaming AI responses
* Real connector integrations
* Payment integration
* Functional Chrome extension
* Browser page-context extraction
* User profile management
* Database integration
* Automated testing

---

## Author

**Shuvro Saha**

Frontend / Web Developer

GitHub: https://github.com/Shuvro882

---

## Internship Assignment

Developed as part of the **AppifyDevs Software Engineering Internship — Frontend Practical Assignment**.

The project demonstrates frontend development, UI/UX implementation, responsive design, component architecture, and practical product redesign skills.
