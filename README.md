# Movie Hub App

The Movie Hub App is a web application that allows users to explore and discover movies using The Movie Database (TMDb) API. It provides features such as browsing popular movies, searching for specific titles, viewing movie details, and more. The app is built using React and integrates with the TMDb API to fetch movie data.

## Features

- Browse popular movies
- Search for movies by title
- View movie details, including synopsis, rating, release date, and poster image
- Discover movies by genre
- Infinite scrolling for pagination
- Responsive design for a seamless experience on different devices

## Demo

You can access a live demo of the Movie Hub App at [https://your-demo-url.com](https://your-demo-url.com).

## Screenshots

![Home Page](screenshots/home.png)
*Home Page showcasing popular movies.*

![Movie Details](screenshots/movie-details.png)
*Movie Details page displaying information about a specific movie.*

## Prerequisites

Before running the Movie Hub App locally, make sure you have the following installed:

- Node.js (version 12 or higher)
- NPM (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-hub-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-hub-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory of the project and add your TMDb API key:

   ```bash
   REACT_APP_TMDB_API_KEY=your-api-key
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open the application in your browser:

   ```bash
   http://localhost:3000
   ```

3. Explore the Movie Hub App and enjoy browsing, searching, and discovering movies!

## API Integration

The Movie Hub App integrates with the following endpoints of The Movie Database (TMDb) API:

- `GET /movie/popular` - Retrieve popular movies
- `GET /search/movie` - Search for movies by title
- `GET /movie/{id}` - Get details of a specific movie
- `GET /genre/movie/list` - Get the list of movie genres

To access these endpoints, you need to sign up for a TMDb account and obtain an API key. Visit [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api) for more information.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Please note that this README file is just a template and should be modified according to the specific details and requirements of your Movie Hub App.