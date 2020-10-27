---------------------------------------------------
                    Node Execute
---------------------------------------------------

Requirements
-----------

This API requires:

* NVM (NodeJS >= v12.18.3)
* NPM (Version >= 6.14.6)

# Setup

Install dependencies:
---------------------
* npm install pm2@latest -g
* npm install


# Running the app Via NodeJs PM2
`pm2 start ecosystem.config.js`

# Look Log PM2
`pm2 log Test`


---------------------------------------------------
                    DOCKER
---------------------------------------------------

# Depedency
* Install Docker

# Running the app using Docker

* Build Docker Image
`docker build -t rexameibella/test .`

* Run Docker Image 
`docker run -d --rm -p 4001:4001 -p 5000:5000 --name rexatest1 rexameibella/test`

* Check docker running
`docker ps -a`

* Check logs Docker
`docker logs rexatest1 -f`

---------------------------------------------------
                    LIST API
---------------------------------------------------
* Open URL
`localhost:4001`
