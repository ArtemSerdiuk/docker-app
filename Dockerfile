# Set Global arg
ARG ENV=prod

# STAGE 1: Build
# base image
FROM node:12.14.1-alpine as build-stage

# For using the global arg in this build stage
ARG ENV

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

ADD . .


EXPOSE 80

# start app
ENTRYPOINT ng serve --host 0.0.0.0
