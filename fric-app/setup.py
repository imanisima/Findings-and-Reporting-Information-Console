#! python3.8

import os, subprocess, re
from pymongo import MongoClient


config_file = './mongod.conf' # Path to mongod configuration file
dbpath = '/Users/msoto/test/mongodb/data/db' # Path to folder where mongodb bson files are stored (all database files)
host, port = 'localhost', 27017

db_name = 'fric_db'
db_user = 'fricapp'
db_pass = 'fricitup'

def getConfigData():
	with open('./mongod.conf') as configFile:
		while line := configFile.readline():
			print(re.search('(?<=dbPath: )\S+'))  # Get dbpath
			print(re.search('(?<=port: )\d+')) # Get port number

def npm_install(): return subprocess.Popen(['npm', 'install'])

def start_mongod(): return subprocess.Popen(['mongod', '--config', config_file])

def init_database():
	print('Initializing Database')
	client = MongoClient(f'mongodb://{host}:{port}') # Connect to mongodb
	db = client[db_name] # Use database

	# Delete required user if it exists
	try: db.command("dropUser", db_user)
	except Exception as err: print(f'Error: {err}\nCould not delete required db user.')

	# Create required db user
	try:
		db.command("createUser", db_user, pwd=db_pass, roles=[{"role": "readWrite", "db": db_name}])
		print('Successfully created required db user.')
	except Exception as err: print(f'Error: {err}\nCould not create required db user.')


if __name__ == '__main__':
	npm_install()
	try: os.makedirs(dbpath)
	except FileExistsError as err: print(err)
	finally: print(f'Succesfully created db folder: {dbpath}')
	mongod = start_mongod() # start mongodb server using mongo daemon
	init_database()
	mongod.kill() # kill mongod server
