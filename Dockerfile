FROM node:16

WORKDIR /app
COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g nodemon

COPY ./src .
COPY .env .
EXPOSE 4000
CMD [ "nodemon", "src/server.js" ]