Netflix Clone with Firebase Authentication and AI Movie Search
live link:https://netflixgpt-26460.web.app
This project is a clone of Netflix, featuring authentication using Firebase and an AI-powered movie search functionality.



Table of Contents
Overview
Features
Technologies Used
Setup Instructions
Usage
Credits
License
Overview
This project is a React-based web application that mimics the Netflix interface. It provides user authentication powered by Firebase Authentication services, allowing users to sign up, log in, and log out securely. Additionally, the application includes an AI movie search feature that helps users discover movies based on prompts.

Features

#Features
-login/sign in
    -sign in /sign up form 
    -redirect to browse page
    -sign up
    -form validation 
    -useref()
-browser(after configuring)
    -Header
    -Main Movie
        -trailer in background 
        -tittle and description
        -movie suggestions 
            -movielist *n
-netflixgpt
    -searchbar
    -movie suggestions

Setup Instructions
To run this project locally, follow these steps:

Clone the repository: git clone <repository_url>
Navigate into the project directory: cd <project_directory>
Install dependencies: npm install or yarn install
Set up Firebase:
Create a Firebase project at Firebase Console
Add a web app to your Firebase project
Copy Firebase config credentials and paste them in your project
Configure Firebase Authentication:
Enable Email/Password sign-in method in Firebase console
Start the development server: npm start or yarn start
Open the application in your browser: http://localhost:3000
Usage
Authentication:
Sign up for a new account using the provided form.
Log in with your registered email and password.
Log out from the account.
Netflix Clone:
Explore the home page which resembles Netflix layout.
Click on movie thumbnails to view details or play trailers.
AI Movie Search:
Use the search feature to find movies based on prompts.
Get AI-driven suggestions for movies to watch.
Credits
Author: ]sakshi bansal
APIs/Libraries:TMDB ,OPENAI
Firebase Authentication



-create React app
-configured tailwind
-Header 
-routing of app
-login form
-sign up form
-form validation 
-useRef hook
-firebase setup
-deploying our app to production
-creating signup user account
-implement sign in user api
-created redux store with user slice
-implemented sign out
-update profile 
-fetch from tmdb
-bugFix:sign up user displayName 
-bugFix:if user is not logged in redirect to login page &vice-versa.
-unsubscribed to onauthstatechange callback
-register TMDB API & create an app & get acess token 
-get Data from now playing movies list api
-get Data from TMDB now playing movie list api
-planning for main &secondary container
-create movieSlice
-update Store with movieslice
-fetch data for trailer video
-embedded youtube video
-added css to main container
-display image 
-build movie list 
-build movie cards 
-added TMDB CDN url
-to:remove any hardcoded strings
-making custom hooks
-GPT search page
-gpt search bar
-(FEATURE) multilingual feature 
-GPT API's(get open ai key)
-use TMDB's API for filtering data
-give search results
-to fix:video isnt playing,make it autoplay n mute 
-to fix: env file
-to fix:trending movies
-to fix:autoplay after 10 sec
-remove firebase
