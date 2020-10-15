# react-template

Demo React App

## Featuring
* Node App
* MongoDB
* JSS
* local build
* remote deploy
* Native React
* Redux

## Instructions

### Install Mongo (if needed)
1. Install brew `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
2. Install MongoDB `brew tap mongodb/brew`
3. Install MongoDB community `$ brew install mongodb-community`
4. `brew services start mongodb-community@4.4z`
5. `mongod --config /usr/local/etc/mongod.conf`

### Create DB
1. Run Mongo Shell `mongo`
2. `use react-template`

### Install App
1. `npm install`

### Run App Locally
#### Run Service App
1. `npm start`
2. Visit [localhost:3000](http://localhost:3000/)
#### Run Client App
3. `cd ./client`
4. `npm start`
5. Visit [localhost:8000](http://localhost:8000/)

## Links
* [Create a MERN app](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66)
* [Installing MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)