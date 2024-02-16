FROM node:20.11.0-bookworm-slim

WORKDIR /usr/src/app
COPY . .

RUN npm install

CMD [ "node", "dist/bin/fortune.js" ]