# Specify a base image
FROM node:14-alpine

# WORKDIR
WORKDIR /usr/app

# COPYING package.json so no need to install all depenendencies
COPY ./package.json ./

# Install some depenendencies
RUN npm install

# COPY rest of files
COPY ./ ./

# Default command
CMD [ "npm","start" ]