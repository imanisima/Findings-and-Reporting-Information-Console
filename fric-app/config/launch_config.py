"""
	Configuration file for launch.py scripts.
"""

import os, re

# Default Host IP for intializing servers
HOST = 'localhost' # 127.0.0.1

# Default ports for app servers
MONGO_PORT = 27017
SERVER_PORT = 5000
REACT_PORT = 3000

# Path to mongod configuration file
MONGO_CONF = 'mongod.conf'
MONGO_CONF = os.path.join(os.path.dirname(__file__), MONGO_CONF) # Resolve path to mongod config file

# Path to app server configuration file
SERVER_CONF = 'server_config.js'
SERVER_CONF = os.path.join(os.path.dirname(__file__), SERVER_CONF) # Resolve path to server config file

# Default database folder path where all bson files are stored
DB_PATH = os.path.expanduser('~/data/db')

# Log file directory name
LOG_DIR = 'log'


def getMongoConfigFileSettings():
	"""This function parses the default set mongod.conf file for the path to the bson database and for the mongod port configuration."""
	global DB_PATH, MONGO_PORT
	with open(MONGO_CONF, 'r') as file:
		while line := file.readline():
			if (pathMatch := re.search('(?<=dbPath: [\"\'])[\w\/]+', line)): DB_PATH = pathMatch.group(0)  # Get dbpath
			if (portMatch := re.search('(?<=port: )\d+', line)): MONGO_PORT = portMatch.group(0)  # Get port number


def getServerConfigFileSettings():
	"""This function parses the server port configured in SERVER_CONF path."""
	global SERVER_PORT
	line_regex, port_regex = '(?<=exports.SERVER_PORT)[^\n]*', '\d+'
	with open(SERVER_CONF, 'r') as file:
		while line := file.readline():
			if (lineMatch := re.search(line_regex, line)) and (portMatch := re.search(port_regex, lineMatch.group(0))):
				SERVER_PORT = portMatch.group(0)


getMongoConfigFileSettings() # Set constants from MONGO_CONF
getServerConfigFileSettings() # Set constants from SERVER_CONF
