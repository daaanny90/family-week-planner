FROM node:17-alpine
ENV PORT 8080
WORKDIR /usr/src/app
COPY ./backend /usr/src/app

RUN npm install -g nodemon
RUN npm install

ENTRYPOINT ["nodemon", "/usr/src/app/server.js"]
