# PhotoGallery

## Description
An application for displaying photos.

## Project Setup


## Deliverables

### Your client application should have these sets of screens/pages:
1. A landing section accessible to all app visitors with a brief explanation of what
the application does.


2. A page to authenticate users (Login page):
- For the authentication layer, you can use any auth provider you are
familiar with (Google, Facebook, Github) and maintain the auth sessions
in your application.
- You have the option to combine the authentication page and the landing
page.


3. Logged-in pages that require authentication for access:
   
- (Home) Have a page that lists all the users:
   - The page should tell you how many albums a user has
   - The page must run a GET request for the users
   - The page must run a GET request for the albums

- (User) Have a page that shows you the user’s information:
    - This is the page shown when a user is selected
    - The page should list a user’s albums
    - The page must run a GET request for the user-selected
    - The page must run a GET request for a user’s albums

- (Album) Have a page that shows you an album’s information and its
photos
    - This is the page shown when you select an album
    - The page should list an album’s photos
    - The page must run a GET request for the album selected
    - The page must run a GET request for an album’s photos

- (Photo) Have a page that displays a photo
   - Allow a user to edit the title of the photo
      -A PATCH/PUT request must be sent to the backend server
       after editing the page
   - The page must run a GET request for the photo

 
### For The Backend Service:
1. Candidates can build an application that consumes data from
https://jsonplaceholder.typicode.com/

2. Candidates can build a minimal backend application that is able to offer
the following Restful APIs.
NB: Code quality for the backend will not be strictly assessed.

● api/users
○ Each user should have the following fields:
■ Name
■ Username
■ Email

● api/albums
- Each album should have the following fields:
■ Album id
■ User id
■ Album title
  
● api/photos
○ Each album should have the following fields:
■ Album id
■ Photo title
■ Image URL


## Technologies Used

- ReactJs (Frontend)
- Ruby on Rails (Backend)
- SQLite Database
- Bootstrap
- JWT for Authentication
- ESLint


## License

This project uses MIT License
