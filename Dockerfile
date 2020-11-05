FROM node:12.14.1-alpine as build-stage

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install
COPY . /app/

RUN npm run build:ssr

CMD ["npm", "run", "serve:ssr"]

# start app
EXPOSE 4000

FROM nginx:1.19.4-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
