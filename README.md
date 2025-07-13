# 🎬 Movie Booking App - Backend
This is the backend server for a Movie Booking Application, built using Node.js, Express, and MongoDB. It provides a RESTful API that interacts with the frontend, and supports full-featured movie browsing, show booking, and user authentication.

## 📖 Overview
This backend exposes a set of APIs for a movie booking platform where users can:

- View movies and their details
- Filter by genre, artist, or date range
- Sign up, log in, and log out
- Book tickets for a movie show
- Access genres, artists, and available coupons
- The backend is designed with authentication and authorization to ensure secure access to user-specific actions like booking.

## 🚀 Features

-RESTful APIs using Express.js
- Data modeling and interaction with MongoDB via Mongoose
- Secure  Authentication
- Movie filtering with advanced query parameters
- Booking system with reference tracking
- Modular folder structure for scalability

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints
| Method | Endpoint                                                                                                    | Description                        |
| ------ | ----------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| GET    | `/movies?status=PUBLISHED`                                                                                  | Get all published movies           |
| GET    | `/movies?status=RELEASED`                                                                                   | Get all released movies            |
| GET    | `/movie/{movieId}`                                                                                          | Get movie details by ID            |
| GET    | `/movies?status=RELEASED&title={title}&genres={genres}&artists={artists}&start_date={start}&end_date={end}` | Filter released movies             |
| GET    | `/movies/{movieId}/shows`                                                                                   | Get all shows for a specific movie |
| POST   | `/signup`                                                                                                   | Register a new user                |
| POST   | `/login`                                                                                                    | Authenticate a user and return an access token |
| POST   | `/logout`                                                                                                   | Invalidate the user’s session      |
| GET    | `coupons`                                                                                                   | Retrieve available discount coupons |
| POST   | `/bookings`                                                                                                 | Book a show and store the booking details |
| GET    | `/artists`                                                                                                  | Retrieve the list of all artists from the database. |
| GET    | `/genres`                                                                                                   | Retrieve the list of all genres from the database.  |
| GET    | `/coupons`                                                                                                  | Retrieve the coupons available for discount|         


## 🚀 How to Run

# Clone the repo
git clone https://github.com/kshitiz-swd/movie-booking-backend.git
cd movie-booking-backend

# Install dependencies
npm install

# Run the dev server
npm run start


