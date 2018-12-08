# FriendFinder
## Node and Express Servers

### Overview

This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The app will use Express to handle routing, and also be deployed to Heroku.


### Basic Setup

* The app includes the following:

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Creating the app

  * The survey has 10 unique questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
  * A GET route with the url `/api/friends`will be used to display a JSON of all possible friends.
  * A POST route `/api/friends` will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  * The current user's most compatible friend will be displayed as a modal
   * The modal should display both the name and picture of the closest match.

### Who will use this app, what is it for?

 * The app is for classwork in Node and Express Servers, however anyone is welcome to use it or explore the code.