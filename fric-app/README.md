# Findings and Reporting Information Console (FRIC)

## About FRIC
The Findings and Reporting Information Console (FRIC) is an application that assists cyber analysts in identifying critical cyber vulnerabilities. Lead Analysts can create systems, tasks, sub-tasks, track findings, and document vulnerabilities and mitigations. It also allows analysts to prioritize tasks and share finds with other analysts through syncing.

## Why Was FRIC Built
Before FRIC, there was no set process in place for documenting findings. Each analyst had there own way of documenting vulnerabilities, and often times were not on the same page about critical findings in a system. FRIC is a systematic way of documenting vulnerabilities and mitigations for analysts offline.

## Required Software

### Windows or Mac
1. [Download MongoDB](https://www.mongodb.com/developer-tools) and its binaries (You should have the `mongod` binary in your $PATH variable).
2. [Download NodeJS](https://nodejs.org/en/download/) and NPM (You should have the `node` and `npm` binaries in your $PATH variable).
3. Download the [latest version of Python](https://www.python.org/downloads/release/python-390/) (You should have the `python3` binary in your $PATH variable).
4. Install React (Note: You must have successfully installed Node!):
``` npm install -g create-react-app ```


### Linux
1. Open your terminal
2. First, update your system by typing the following in your terminal: ``` sudo apt-get update ``` then press the ``` Enter ``` key.
3. Install  MongoDB: ``` sudo apt-install mongodb ``` (for more instructions [click here](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04-source))
4. Install NodeJS: ``` sudo apt-install nodejs -y ```
Note: To check if Node has successfully installed run: ``` npm -v ``` and ```node -v```
5. Install Python: Python is already preinstalled on Linux. Don't worry about this step.
6. Install React (Note: You must have successfully installed Node!):
``` npm install -g create-react-app ```


## How to Run Fric
4. Clone the repository located at <https://github.com/Imanisima/Findings-and-Reporting-Information-Console>.
5. Access the `fric-app` directory in the cloned repository.
6. Configure the `dbPath` variable in the `mongod.conf` file located in the `config` directory. This path is where MongoDB will store its database files (BSON).
7. Run the `launch.py` executable using ```./launch.py```.
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