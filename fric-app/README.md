# Findings and Reporting Information Console (FRIC)

## Running FRIC out of the box

1. Download MongoDB and its binaries (You should have the `mongod` binary in your $PATH variable).
2. Download NodeJS and NPM (You should have the `node` and `npm` binaries in your $PATH variable).
3. Download the latest version of Python (You should have the `python3` binary in your $PATH variable).
4. Clone the repository located at <https://github.com/Imanisima/Findings-and-Reporting-Information-Console>.
5. Access the `fric-app` directory in the cloned repository.
6. Configure the `dbPath` variable in the `mongod.conf` file located in the `config` directory. This path is where MongoDB will store its database files (BSON).
7. Run the `launch.py` executable.
8. Navigate to `localhost:3000` (or `127.0.0.1:3000`) in your browser. (Preferablly Chrome; Safari is unsupported)

---

## Using the `launch.py` executable

- Arguments:
  - `-i`: Installs node_modules dependencies needed to run the FRIC app. Useful when running in development mode.
  - `-d`: Runs the app in development mode. Any changes to the source code will be reloaded upon saving the edited files.
  - `-k`: Kills all PIDs that are using the required ports without prompting for their termination.
  - `-0`: Runs the kill PID command without starting the app servers afterward. (Can be combined with `-k` to skip the termination prompt)
  - `-t`: Runs the react-scripts unit test watch program.

---

## Configuration

Here is a list of the configuration files and settings used in the FRIC app.

- `mongod.conf` - Configuration settings file used when running mongod (mongodb daemon).
  - `dbPath`: Path where MongoDB stores and uses BSON files required to run the database.
  - `port`: Port on localhost where MongoDB will run its database. Compass and MongooseJS use this port to access the database.
- `launch_config.py` - Configuration settings for running the `launch.py` executable.s
  - `REACT_PORT` - Port on localhost where the production frontend will be run.
- `server_config.js` - Configuration settings for the backend ExpressJS server.

Default Configuration:

- MongoDB (Production and Development Mode):
  - `dpPath` = `/data/db`
  - `port` = 27017
- Production Mode:
  - `node` runs the backend on port 5000.
  - `serve` runs the frontend on port 3000.
- Development Mode:
  - `nodemon` runs the backend on port 5000.
  - `npm start` runs the frontend on port 3000.

---

## Requirements & Dependencies

- MongoDB v4.4.0 and above
- NodeJS
- NPM
- Python3.8 and above
- All Node modules (with their required versions) listed in both the `package.json` and `package-lock.json` files.