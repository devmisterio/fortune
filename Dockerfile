FROM node:20.14-bookworm-slim

WORKDIR /usr/src/app
COPY . .

RUN npm install

CMD [ "node", "dist/bin/fortune.js" ]