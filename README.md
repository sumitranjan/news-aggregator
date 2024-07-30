# Node.js News Aggregator API

## Overview

A Node.js API using Express.js for user management and news aggregation. Features include user registration, login, and preference management with JWT authentication and bcrypt hashing. Fetches news from external APIs based on user preferences.

## Features

- **User Registration**: Securely register users.
- **User Login**: Authenticate and issue JWT tokens.
- **Manage Preferences**: Retrieve and update user news preferences.
- **Fetch News**: Get news articles based on preferences.

## External API
This project uses the [NewsAPI](https://newsapi.org) to fetch news articles. 

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/news-aggregator.git
   cd news-aggregator

2. **Install Dependencies**

   ```bash
   npm install

3. **Create .env File**

   ```bash
   SECRET_JWT=your_jwt_secret
   NEWS_API_KEY=newsapi_key

4. **Start the Server**

   ```bash
   npm start

## Endpoints
- **POST /register**: Register a new user.
- **POST /login**: Log in and get a JWT token.
- **GET /preferences**: Get user preferences (requires token).
- **PUT /preferences**: Update user preferences (requires token).
- **GET /news**: Fetch news articles based on preferences (requires token).

## Testing
Test endpoints with Postman or Curl. Ensure to include JWT tokens in headers where required.


## License
This project is licensed under the MIT License.
