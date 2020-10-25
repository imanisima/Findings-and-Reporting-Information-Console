#! python3.8

import os, sys, subprocess, signal
import config  # Import config.py constants

# Command arguments for starting required system servers
mongod_cmd = ['mongod', '--config', config.MONGO_CONF]
backend_cmd   = ['node', './backend/server.js']
frontend_cmd  = ['npm', 'start']

def kill_required_ports():
	"""Used to kill processes int he ports required by the system."""
	outputs = [subprocess.getoutput(f'lsof -nti :{port}').split() for port in (config.MONGO_PORT, config.NODE_PORT, config.REACT_PORT)]
	for pids in outputs:
		for pid in pids: os.kill(int(pid), signal.SIGKILL)

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
	with open('logs/mongod.log', 'w') as mlog, open('logs/frontend.log', 'w') as nlog, open('logs/backend.log', 'w') as rlog: # Open log files for writing and truncate
		subprocess.Popen(mongod_cmd, stdout=mlog) # Start mongodb daemon
		subprocess.Popen(backend_cmd, stdout=nlog) # Start node backend server
		subprocess.Popen(frontend_cmd, stdout=rlog) # Start react frontend server

if __name__ == '__main__':
	if '-d' in sys.argv: backend_cmd = ['nodemon', './backend/server.js'] # Set to development server
	kill_required_ports()
	start_servers()
