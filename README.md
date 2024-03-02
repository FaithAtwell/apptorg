APPTorg
APPTorg is a web application designed to help you manage your calendar events efficiently. This README provides an overview of the components and functionality of the application.
Components
Calendar Component
The CalendarComponent is a React component responsible for rendering a calendar interface using the react-big-calendar library. It fetches calendar data from an HTML file, parses it using cheerio, and displays events in the calendar. Users can select and view detailed information about individual events.
Home Component
The HomeComponent serves as the landing page for the application. It provides a brief introduction to the website and prompts users to either log in or sign up.
Login Component
The Login component facilitates user authentication. It includes a form for users to enter their username or email and password. Validation is performed using Formik and Yup libraries, and authentication requests are made to the server using axios. Upon successful login, users are redirected to the calendar page.
Navbar Component
The Navbar component dynamically adjusts its content based on the user's authentication status. It displays different navigation links for logged-in and logged-out users.
Usage
To use APPTorg locally, follow these steps:
Clone this repository to your local machine.
Navigate to the project directory and install dependencies using npm install.
Run the development server using npm run dev.
Access the application in your web browser at http://localhost:3000.
Dependencies
APPTorg relies on the following dependencies:
axios: For making HTTP requests.
bcrypt: For password hashing (not utilized in the provided code).
cheerio: For parsing HTML data.
formik: For building forms with React.
moment: For parsing, validating, manipulating, and formatting dates.
next: For server-side rendering and routing.
react: JavaScript library for building user interfaces.
react-big-calendar: For displaying a calendar interface.
yup: For schema validation.
Scripts
npm run dev: Starts the development server.
npm run build: Builds the production application.
npm start: Starts the production server.
npm run lint: Lints the project files.

Usage
To use APPTorg locally, follow these steps:
Clone this repository to your local machine using the following command:
bash

git clone <repository_url> 
Replace <repository_url> with the URL of the Git repository.
Navigate to the project directory:
bash

cd apptorg 
Install dependencies using npm:
bash

npm install 
Run the development server:
bash

npm run dev 
Access the application in your web browser at http://localhost:3000.