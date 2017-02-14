# Use the docker/node base image
FROM node:7.3.0-alpine
MAINTAINER David Fonollosa <dafobe@gmail.com>

# Add node user in order to run without root permissions
# allows run docker image as node -u "node"
# RUN addgroup -S node && adduser -S -g node node 

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# default API servers port
EXPOSE 3000

CMD [ "npm", "start" ]
