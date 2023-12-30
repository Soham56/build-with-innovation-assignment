# User Admin Backend

## Overview

Created a User Admin Backend using Node.js that offers RESTful APIs for user and admin registration, login, and management. It utilizes Express.js, bcrypt, JWT, and MongoDB. The project allows users to register, log in, update their profiles, and admins to perform administrative tasks like managing users.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Clone the Repository](#clone-the-repository)
    -   [Install Dependencies](#install-dependencies)
    -   [Create .env File](#create-env-file)
    -   [Run the Project](#run-the-project)
-   [API Documentation](#api-documentation)
    -   [User Registration](#user-registration)
    -   [Admin Registration](#admin-registration)
    -   [User Login](#user-login)
    -   [Admin Login](#admin-login)
    -   [Update User Details (User Specific)](#update-user-user-specific)
    -   [Delete User Account (User Specific)](#delete-user-account-user-specific)
    -   [Get All Users (Admin Only)](#get-all-users-admin-only)
    -   [Update Users (Admin Only)](#update-users-admin-only)
    -   [Delete Users (Admin Only)](#delete-users-admin-only)
-   [Dependencies](#dependencies)

## Getting Started

Explain how users can set up and run your project locally.

### Clone the Repository

```bash
git clone https://github.com/Soham56/build-with-innovation-assignment.git
cd build-with-innovation-assignment
```

### Install Dependencies

```bash
npm install
```

### Create .env File

Create a `.env` file in the project root and provide the following values:

```plaintext
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRESIN=your_jwt_expiration_time
```

### Run the Project

```bash
npm start
```

## API Documentation

### User Registration

#### Endpoint: `/api/v1/auth/user/register`

-   **Method:** `POST`
-   **Body:**
    ```json
    {
        "name": "user_name",
        "email": "user_email@example.com",
        "password": "user_password",
        "profileImage": "upload a image file" // Optional
    }
    ```

### Admin Registration

#### Endpoint: `/api/v1/auth/admin/register`

-   **Method:** `POST`
-   **Body:**
    ```json
    {
        "name": "admin_name",
        "email": "admin_email@example.com",
        "password": "admin_password",
        "profileImage": "upload a image file" // Optional
    }
    ```

### User Login

#### Endpoint: `/api/v1/auth/user/login`

-   **Method:** `POST`
-   **Body:**
    ```json
    {
        "email": "user_email@example.com",
        "password": "user_password"
    }
    ```

### Admin Login

#### Endpoint: `/api/v1/auth/admin/login`

-   **Method:** `POST`
-   **Body:**
    ```json
    {
        "email": "admin_email@example.com",
        "password": "admin_password"
    }
    ```

### Update User (User Specific)

#### Endpoint: `/api/v1/user/:id`

-   **Method:** `PATCH`
-   **Body:**
    ```json
    {
        "name": "new_name",
        "profileImage": "upload a image file" // Optional
    }
    ```
    -   **id in params must be user corresponding id**

### Delete User Account (User Specific)

#### Endpoint: `/api/v1/user/:id`

-   **Method:** `DELETE`
    -   **id in params must be user corresponding id**

### Get All Users (Admin Only)

#### Endpoint: `/api/v1/admin/getAllUsers`

-   **Method:** `GET`
-   **Authorization Header:** `Bearer YOUR_ACCESS_TOKEN`

### Update Users (Admin Only)

#### Endpoint: `/api/v1/admin/updateUsers`

-   **Method:** `PATCH`
-   **Authorization Header:** `Bearer YOUR_ACCESS_TOKEN`
-   **Body:**
    ```json
    {
        "updateFields": [
            { "userId": "user_id1", "name": "new_name1" },
            { "userId": "user_id2", "email": "new_email2" }
            // ... more updates
        ]
    }
    ```
    -   **Give inputs in the provided format. `userId` must be provided, and admin can update `name`, `email`, `role` fields only**.

### Delete Users (Admin Only)

#### Endpoint: `/api/v1/admin/deleteUsers`

-   **Method:** `DELETE`
-   **Authorization Header:** `Bearer YOUR_ACCESS_TOKEN`
-   **Body:**
    ```json
    {
        "userIds": ["user_id1", "user_id2", "user_id3"]
    }
    ```
    -   **Give inputs in the provided format.**

## Dependencies

-   [bcryptjs](https://www.npmjs.com/package/bcryptjs)
-   [dotenv](https://www.npmjs.com/package/dotenv)

-   [express](https://www.npmjs.com/package/express)

-   [express-async-errors](https://www.npmjs.com/package/express-async-errors)

-   [express-fileupload](https://www.npmjs.com/package/express-fileupload)

-   [http-status-codes](https://www.npmjs.com/package/http-status-codes)

-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

-   [mongoose](https://www.npmjs.com/package/mongoose)

-   [nodemon](https://www.npmjs.com/package/nodemon)
