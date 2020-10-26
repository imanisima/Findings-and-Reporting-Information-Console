#! python3.8

import os, sys, subprocess, signal
import config.launch_config as config  # Import config.py constants


# Command arguments for starting required system servers
mongod_cmd = ['mongod', '--config', config.MONGO_CONF]
frontend_cmd = ['serve', '-l', str(config.REACT_PORT), '-s', 'build']
backend_cmd = ['node', './backend/server.js']


def kill_required_ports(force=False, terminate=False, dev=False):
	"""Used to kill processes int he ports required by the system.

	Args:
		force (bool, optional): Flag for skipping kill PIDs prompt and executes kill PIDs. Defaults to False.
		terminate (bool, optional): Flag for terminating launch program once PIDs are terminated. Defaults to False.
	"""

	def getPortPids(ports):
		pids = [subprocess.getoutput(f'lsof -nti :{port}').split() for port in ports]
		return [int(item) for sublist in pids for item in sublist] # Flatten PID list
		
	def killPids(pids):
		for pid in pids: os.kill(pid, signal.SIGKILL)

	ports = (config.MONGO_PORT, config.SERVER_PORT, config.REACT_PORT) # Required app ports

	if force: # Force kill PIDs without prompt
		killPids(getPortPids(ports))
		if terminate: exit()
		else: return

	while pids := getPortPids(ports): # Only prompt if pids is not empty
		print(f"The following PIDs are using the app's required ports:\n")
		for pid in pids: print(pid)
		print('\nWould you like to terminate them? (Y/n) ', end='')
		res = input().lower() # Get user input

		if res == 'y':
			killPids(pids)
			if terminate: exit()
			else: break
		elif res == 'n': exit() # Terminate launcher


def start_servers(dev_mode):
	"""Starts servers required to run the FRIC app in production mode."""

	if dev_mode:
		global backend_cmd, frontend_cmd
		# Command arguments for starting required development servers
		backend_cmd = ['nodemon', './backend/server.js']
		frontend_cmd = ['npm', 'start']
		print('Starting FRIC app in development mode...')
	else: print('Starting FRIC app...')
	print(f'MongoDB running at port: {config.MONGO_PORT}')
	print(f'Backend is running at port: {config.SERVER_PORT}')
	print(f'Frontend is running at port: {config.REACT_PORT}')

	# Direct system log output and run servers. By default, the log files are overwritten (truncated) when this script is launched.
	# To change this behavior, alter the open file modifiers to 'a' instead of 'w'.
	with open(f'{config.LOG_DIR}/mongod.log', 'w') as mlog, open(f'{config.LOG_DIR}/backend.log', 'w') as nlog, open(f'{config.LOG_DIR}/frontend.log', 'w') as rlog:
		subprocess.Popen(mongod_cmd, stdout=mlog, stderr=mlog) # Start mongodb daemon
		subprocess.Popen(backend_cmd, stdout=nlog, stderr=nlog)
		subprocess.Popen(frontend_cmd, stdout=rlog, stderr=rlog) # Start app server


if __name__ == '__main__':
	if '-t' in sys.argv: # Run unit test watch mode
		subprocess.Popen(['npm', 'test']).wait()
		exit()

	# Argument flags
	shutoff = '-0' in sys.argv # Terminates program after killing required port PIDs
	force_kill = '-k' in sys.argv # Skips PID kill prompt and force kill all PIDs running on the required ports
	dev_mode = '-d' in sys.argv # Runs app in development mode
	install = '-i' in sys.argv or not os.path.isdir('./node_modules')# Installs app dependencies (node_modules)

	# App structure flags
	init_build = not os.path.isdir('./build')
	init_log = not os.path.isdir(config.LOG_DIR)
	init_db = not os.path.isdir(config.DB_PATH)

	kill_required_ports(force_kill, shutoff, dev_mode) # Kill required port PIDs

	# Initialize app structure
	if install: subprocess.Popen(['npm', 'install']).wait()  # Install node packages
	if init_log: os.mkdir(config.LOG_DIR) # Make log directory
	if init_db: os.makedirs(config.DB_PATH) # Make required database directory
	if init_build and not dev_mode: subprocess.Popen(['npm', 'run', 'build']).wait() # Compile production build files
	
	start_servers(dev_mode)
