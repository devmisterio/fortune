FROM node:20.5-bookworm-slim

WORKDIR /usr/src/app
COPY . .

RUN npm install

CMD [ "node", "dist/app.js" ]