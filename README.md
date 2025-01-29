
# Hospital Management System

## Overview

The Hospital Management System is a web application developed using Express, Node.js, and MongoDB. It is designed to manage patient information efficiently, with features to add, view, search, update, and delete patient records.

## Features

- **Patient Management**: Add new patients, view all patients, search for patients by name.
- **Detailed Patient Records**: Store and display patient information including name, age, gender, visit count, amount (based on doctor), doctor’s name, registration date, active status, and contact information.
- **Update and Delete**: Edit and remove patient records as needed.
- **Active Status**: Automatically determine the active status of patients based on their registration date within 15 days from today.
- **Visit Count**: Track the total number of visits from registration.
- **Op Count**: Calculate the visit count with a maximum of 5 visits while the active status is true.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Version Control**: Git & GitHub

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/durgaraoande/hospital-management-system.git
    cd hospital-management-system
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure the database**
    - Ensure MongoDB is installed and running.
    - Update the database configuration in `app.js`.

4. **Run the application**
    ```bash
    npm start
    ```

5. **Access the application**
    - Open a web browser and navigate to `http://localhost:3000`.

## Project Structure

```
hospital-management-system/
├── controllers/
│   └── patientController.js
├── models/
│   └── Patient.js
├── routes/
│   └── patientRoutes.js
├── views/
│   ├── index.ejs
│   ├── addPatient.ejs
│   ├── editPatient.ejs
│   └── viewPatients.ejs
├── public/
│   ├── css/
│   └── js/
├── app.js
├── package.json
└── README.md
```

## API Endpoints

- **GET /patients**: Retrieve a list of all patients.
- **GET /patients/:id**: Retrieve a specific patient by ID.
- **POST /patients**: Add a new patient.
- **PUT /patients/:id**: Update an existing patient by ID.
- **DELETE /patients/:id**: Delete a patient by ID.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
