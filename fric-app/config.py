'''

'''


# Host IP for intializing servers
HOST = 'localhost'

# Ports for system database, backend, and frontend respectively
MONGO_PORT = 27017
NODE_PORT  = 5000
REACT_PORT = 3000

# Path to mongod config file
MONGO_CONF = './mongod.conf'

__all__ = ['HOST', 'MONGO_PORT', 'NODE_PORT', 'REACT_PORT', 'MONGO_CONF']
