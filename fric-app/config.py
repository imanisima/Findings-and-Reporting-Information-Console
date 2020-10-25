'''

'''

# Default Host IP for intializing servers
HOST = 'localhost' # 127.0.0.1

# Ports for system database, backend, and frontend respectively
MONGO_PORT = 27017
NODE_PORT  = 5000
REACT_PORT = 3000

# Path to mongod configuration file
MONGO_CONF = './mongod.conf'

# Default database folder path where all bson files are stored
DB_PATH = '/data/db'

# Constants used for accessing database
DB_NAME = 'fric_db'
DB_USER = 'fricapp'
DB_PASS = 'fricitup'

def getConfigFileData():
	"""This function parses the default set mongod.conf file for the path to the bson database and for the mongod port configuration."""
	import re
	global DB_PATH, MONGO_PORT
	with open(MONGO_CONF, 'r') as file:
		while line := file.readline():
			pathMatch = re.search('(?<=dbPath: [\"\'])[\w\/]+', line)  # Get dbpath
			portMatch = re.search('(?<=port: )\d+', line)  # Get port number
			if pathMatch: DB_PATH = pathMatch.group(0)
			if portMatch: MONGO_PORT = portMatch.group(0)

getConfigFileData() # Get constants from mongod.conf
