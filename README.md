
# Textile Raw Material Management

## Overview

The Textile  Raw Material  Management  is a web application developed using Express, Node.js, and MongoDB. It is designed to manage material purchased records efficiently, with features to add, view, search, update, and delete material records.

## Features

- **Material Management**: Add new materials, view all materials, search for materials by name and date of entry.
- **Detailed Material Records**: Store and display materrial information including name, supplier name, type, quantity purchased, minimum quantity required, stock status.
- **Update and Delete**: Edit and remove material records as needed.
- **Stock Status**: Automatically determine the stock status of materials based on purchased quantity and minimum quanitity.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Version Control**: Git & GitHub

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/arshia1234567/Textile-Raw -Material-Management.git
    cd Textile-management-system
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
Textile-management-system/
├── controllers/
│   └── materialController.js
├── models/
│   └── material.js
├── routes/
│   └── materialRoutes.js
├── views/
│   ├── index.ejs
│   ├── addmaterial.ejs
│   ├── editmaterial.ejs
│   └── viewmaterial.ejs
├── public/
│   ├── css/
│   └── js/
├── app.js
├── package.json
└── README.md
```

## API Endpoints

- **GET /materials**: Retrieve a list of all materials.
- **GET /materials/:name**: Retrieve a specific material by name.
- **POST /materials**: Add a new material.
- **PUT /materials/:name**: Update an existing material by name.
- **DELETE /materiaks/:name**: Delete a material by name.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
