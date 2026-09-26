# Student Management REST API

A simple RESTful API built using **Node.js** and **Express.js** to perform CRUD (Create, Read, Update, Delete) operations on student records. Student data is stored in-memory using a JavaScript array, making the project lightweight and suitable for learning REST API fundamentals.

---

## Author

| Field | Details |
|-------|---------|
| **Name** | Saurabh |
| **Roll No.** | 2501010045 |
| **Course** | Web Development III (Node.js & Express Backend) |
| **Assignment** | Lab Assignment 2 – Student Management REST API |

---

## Project Overview

This project demonstrates the implementation of a REST API using Express.js. It includes CRUD operations, modular routing, custom middleware, and proper HTTP status codes without using any database.

---

## Features

- RESTful API design
- Express.js server
- CRUD operations
- Modular routing
- Custom logger middleware
- JSON request handling
- Proper HTTP status codes
- In-memory data storage
- Postman compatible

---

## Tech Stack

- Node.js
- Express.js

---

## Project Structure

```text
project/
├── app.js
├── package.json
├── package-lock.json
├── test_api.js
├── routes/
│   └── studentRoutes.js
├── middleware/
│   ├── logger.js
│   └── errorHandler.js
├── data/
│   └── students.js
```

---

## Installation

Clone the repository and install dependencies.

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

---

## Running the Server

```bash
npm start
```

or

```bash
node app.js
```

The server will start on the configured port.

---

## API Endpoints

### Get All Students

```http
GET /students
```

---

### Get Student by ID

```http
GET /students/:id
```

---

### Add Student

```http
POST /students
```

Example Request Body

```json
{
  "name": "Rahul",
  "course": "BCA",
  "age": 20
}
```

---

### Update Student

```http
PUT /students/:id
```

---

### Delete Student

```http
DELETE /students/:id
```

---

## Middleware

The application uses two custom middleware components:

- **Logger Middleware (`logger.js`)**  
  Logs incoming HTTP requests, including details such as the request method, route, and timestamp, making it easier to monitor API activity during development.

- **Global Error Handler (`errorHandler.js`)**  
  Handles application errors centrally by returning consistent JSON responses with appropriate HTTP status codes. It also detects invalid JSON payloads and returns a **400 Bad Request** response instead of crashing the application.

---

## Testing

The project includes an automated API testing script (`test_api.js`) that verifies the core functionality of the REST API.

Before running the tests, start the server (if the script does not start it automatically for your setup), then execute:

```bash
node test_api.js
```

The test script validates:

- Root route availability
- Retrieve all students
- Retrieve a student by ID
- Handle invalid student IDs
- Create a student
- Validate invalid POST requests
- Update an existing student
- Handle updates for non-existent students
- Delete a student
- Handle deletion of non-existent students
- Return **404 Not Found** for unknown routes

The API can also be tested manually using tools such as **Postman**, **Thunder Client**, or **curl**.

---

## Learning Outcomes

- Express.js application setup
- REST API development
- CRUD operations
- Express Router
- Middleware implementation
- Error handling
- HTTP status codes

---
```
