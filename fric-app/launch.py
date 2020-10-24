#! python3.8

import os, subprocess, signal
from config import *

mongod_cmd = ['mongod', '-f', MONGO_CONF]
node_cmd   = ['nodemon', './backend/server.js']
react_cmd  = ['npm', 'start']

def kill_required_ports():
	outputs = [subprocess.getoutput(f'lsof -nti :{port}').split() for port in (MONGO_PORT, NODE_PORT, REACT_PORT)]
	for pids in outputs:
		for pid in pids: os.kill(int(pid), signal.SIGKILL)

def start_servers():
	subprocess.Popen(mongod_cmd) # Start mongodb daemon
	subprocess.Popen(node_cmd) # Start node backend server
	subprocess.Popen(react_cmd) # Start react frontend server

if __name__ == '__main__':
	try:
		kill_required_ports()
		start_servers()
	except Exception as err: print(err)
