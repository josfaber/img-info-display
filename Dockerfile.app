FROM node:20-slim AS compile

WORKDIR /opt/ncapp

COPY package.json package-lock.json ./

RUN npm install && npm install -g nodemon

COPY src /opt/ncapp/src
COPY public /opt/ncapp/public

EXPOSE 3001

CMD ["nodemon", "src/server.js"]
