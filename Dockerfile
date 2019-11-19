FROM node:13

WORKDIR /app

ADD . /app

CMD node server.js