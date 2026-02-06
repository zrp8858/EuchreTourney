# Frontend Setup

This explains how to install and run this frontend React App

## Prerequisites

Before setting up the app, ensure that **Node.js** and **npm (Node Package Manager)** are installed on your machine.

### 1. Install Node.js and npm
You can download and install the latest version of Node.js (which includes npm) from the official website here: [https://nodejs.org/](https://nodejs.org/)

After installation, verify that both Node.js and npm are properly installed by running the following commands:

```bash
node -v
npm -v
```

### 2. Install React packages

#### 2.1. Navigate to frontend directory
Once in the app, navigate to the frontend directory by running the command from the cloned repository:

```bash
cd frontend
```

#### 2.2. Install Node Package Manager
Run the following command in the frontend directory to install **npm**:

```bash
npm install
```

#### 2.3
Run the following command in the frontend directory to install all dependencies listed in the **package.json** file
```bash
npm install react react-dom react-scripts @mui/material @mui/icons-material @emotion/react @emotion/styled
```

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

# Running the Application

## Frontend
Ensure all sections above in the *Frontend Setup* section are completed, and while in the **frontend** directory, run:

```bash
npm start
```
