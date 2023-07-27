## React Testing with React Testing Library and Jest

*React Testing Library* 

is a widely used testing library for testing React components. It focuses on testing the behavior of components from the user's perspective rather than testing implementation details. It is often used in conjunction with Jest, a powerful JavaScript testing framework.


In this project we test the login component: 
- The username field 
- The password field 
- The login button
Apart from that, we're also testing how this component works, based on what the user can see this component do, 
Here are the tests covered:


## Tests covered
- Username input should be rendered
- Button should be rendered
- Username input should be empty
- Password input should be empty
- Button should be disabled
- Error message should not be visible
- Username input should change
- password input should change
- Button should not be disabled when inputs exit
- Loading should not be rendered
- Loading should be rendered when we click
- Loading should not be rendered afer fetching

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies of app

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

-  [jestjs](https://jestjs.io/).
-  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

- [React documentation](https://reactjs.org/).




