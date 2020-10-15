# Findings and Reporting Information Console (FRIC)

## App setup and dependencies

- All modules listed in both the `package.json` and `package-lock.json` files.
- The `mongod` binary.

### Steps to run FRIC

1. Download MongoDB and its binaries (You should have the `mongod` binary in your $PATH variable).
2. Download NodeJS and NPM.
3. Clone the repository located at <https://github.com/Imanisima/Findings-and-Reporting-Information-Console>.
4. Access the `fric-app` directory in the cloned repository.
5. Run `npm install`.
6. Run `npm start`.
7. Start another shell process and run `mongod` in the terminal.
8. Start another shell process, navigate to the `backend` directory in the cloned repository, and run `nodemon server`.
9. Navigate to `localhost:3000` (or `127.0.0.1:3000`) in your browser, preferablly Chrome.

---

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

