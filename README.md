# CV Generator (PDF Generator)

A dynamic and automated CV generator built with **React**, **TypeScript**, and **Node.js**. This tool automatically builds a polished, professional Curriculum Vitae in PDF format by fetching data directly from a structured JSON configuration file.

##  Features
* **Centralized Data:** Manage and update all your profile information from a single, independent data file (`data/profile.json`).
* **Native PDF Rendering:** Uses `@react-pdf/renderer` to build a clean layout rendered directly through React components.
* **Strict Typing:** Built entirely with TypeScript to ensure type safety, minimize runtime errors, and improve code scalability.

##  Technologies Used
* **React**
* **TypeScript**
* **Node.js** (executed in development via `ts-node`)
* **@react-pdf/renderer**

##  Prerequisites
Before running this project, ensure you have **Node.js** installed on your machine.

##  Installation and Usage

1. Install the required project dependencies:
   npm install

2. Configure your personal data by editing the structure inside:
   data/profile.json

3. Run the generation script to compile and build your final document:
   npm run generar

The resulting PDF will be automatically created in the configured path: `output/mi_cv.pdf`.

Developed by Felipe Luis Carlos (CIA/Carlos)
