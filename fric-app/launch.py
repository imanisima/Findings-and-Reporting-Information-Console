#! python3.8

import os, sys, subprocess, signal
import config.launch_config as config  # Import config.py constants

# Command arguments for starting required system servers
mongod_cmd = ['mongod', '--config', config.MONGO_CONF]
backend_cmd   = ['node', './backend/server.js']
frontend_cmd  = ['serve', '-s', 'build']

def kill_required_ports(force=False, terminate=False):
	"""Used to kill processes int he ports required by the system."""

	def getPortPids():
		pids = [subprocess.getoutput(f'lsof -nti :{port}').split() for port in (config.MONGO_PORT, config.NODE_PORT, config.REACT_PORT)]
		return [int(item) for sublist in pids for item in sublist] # Flatten PID list
		
	def killPids(pids):
		for pid in pids: os.kill(pid, signal.SIGKILL)

	if force: # Force kill PIDs without prompt
		killPids(getPortPids())
		if terminate: exit()
		else: return

	while pids := getPortPids(): # Only prompt if pids is not empty
		print(f"The following PIDs are using the system's required ports:\n")
		for pid in pids: print(pid)
		print('\nWould you like to terminate them? (Y/n) ', end='')
		res = input().lower() # Get user input

		if res == 'y':
			killPids(pids)
			if terminate: exit()
			else: break
		elif res == 'n': exit() # Terminate launcher

def start_servers():
	"""Starts servers required to run the FRIC app."""
	print('Starting FRIC App...')
	print(f'MongoDB running at port: {config.MONGO_PORT}')
	print(f'Node Backend running at port: {config.NODE_PORT}')
	print(f'React Frontend running at port: {config.REACT_PORT}')

	"""
		The next block of code is for creating system logs. By default, the log files are overwritten (truncated) when this script is launched.
		To change this behavior, alter the open file modifiers to 'a' instead of 'w'.
	"""
	if not os.path.isdir('./logs'): os.mkdir('./logs') # Make log directory
	with open('logs/mongod.log', 'w') as mlog, open('logs/node.log', 'w') as nlog, open('logs/react.log', 'w') as rlog: # Open log files for writing and truncate
		subprocess.Popen(mongod_cmd, stdout=mlog, stderr=mlog) # Start mongodb daemon
		subprocess.Popen(backend_cmd, stdout=nlog, stderr=nlog) # Start node backend server
		subprocess.Popen(frontend_cmd, stdout=rlog, stderr=rlog) # Start react frontend server

if __name__ == '__main__':
	shutoff = '-0' in sys.argv # Flag for terminating program after killing required port PIDs
	kill_required_ports(True if '-k' in sys.argv else False, shutoff)
	
	if '-i' in sys.argv or not os.path.isdir('./node_modules'): subprocess.Popen(['npm', 'install']).wait()  # Install node packages
	# if '-i' in sys.argv or not os.path.isdir('./build'): subprocess.Popen(['npm', 'run', 'build']).wait() # Compile production build files TODO: use line in production
	if '-d' in sys.argv: # Developer mode
		backend_cmd = ['nodemon', './backend/server.js'] # Set to development server
		frontend_cmd = ['npm', 'start']
	frontend_cmd = ['npm', 'start'] # TODO: remove this line in production
	
	start_servers()
