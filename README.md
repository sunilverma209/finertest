# FinerVision App

## Project Layout
  
  Here is the project layout:
  
  ```
  finertest
   |__ app/ (Backend / API / Config)
      |__ congig/
      |__ controllers/
      |__ models/
      |__ routes/
   |__ finervisionapp/ (Frontend)
        |__ public/
        |__ src/
   |__ scripts/
   |__ server.js (Backend)
   |__ package.json
   |__ user.sqlite
  
  ```


   ## Project Structure
 
   
 

   ## Setting up the `finertest` project

    Start by cloning the project with the command:
    ```
    $ git clone https://github.com/sunilverma209/finertest.git
    ```

     - Go into the project directory to run following for Frontend and Backend:

    ```
    $ cd finertest/
    $ node server.js
    ```

     ```
    $ cd finertest/finervisionapp
    $ npm start
    ```


    ## Setting up the `finertest` project manually
  

    - Start by installing the dependencies for both Express and React:
    ```
    $ cd finertest/
    $ npm install
    $ cd finervisionapp/
    $ npm install
    ```

     Let's first check to see how our React frontend looks like.
    - To run the React server use the command in client directory:
    ```
    $ npm start
    ```

    - Now if you go to http://localhost:3000/, you should see something like below screenshot i.e User Form :
    - User http://localhost:3000/users, you should see Listing of Users:

    (https://github.com/sunilverma209/finertest/blob/main/screen_2.png)


    The API is not working because well, we are not running our backend yet!
    Let's do that now.

    - In another terminal session run the command `node server.js` at the root directory of the project as we did with the frontend.
    It should look something like this:

    (https://github.com/sunilverma209/finertest/blob/main/screen_1.png)

    You can see that we have the express server running on port `8080`.