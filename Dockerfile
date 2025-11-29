FROM node:20.19.6-bookworm-slim

WORKDIR /usr/src/app
COPY . .

RUN npm install

CMD [ "node", "dist/bin/fortune.js" ]