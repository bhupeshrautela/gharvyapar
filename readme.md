# Real Estate Property App

A full-stack real estate property application built using React, Node.js, Express.js, and MongoDB.

Users can search and filter properties based on city, BHK, and maximum price.

## Features

- Property listing
- Search properties by city
- Filter properties by BHK
- Filter properties by maximum price
- Property details page
- Backend API for property filtering
- MongoDB database integration
- Responsive user interface
- Horizontal property cards with scroll snap
- React Router for navigation
- Reusable React components

## Tech Stack

### Frontend

- React
- JavaScript
- React Router
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```text
project/
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── context/
│   │   ├── Layouts/
│   │   ├── Pages/
│   │   ├── service/
│   │   ├── AllLinkRoute.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── Backend/
    ├── models/
    ├── Routes/
    ├── .env
    ├── app.js
    ├── config.js
    ├── package.json
    └── server.js