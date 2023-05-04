FROM node:14-alpine

WORKDIR /app

COPY app/ .

RUN yarn install

EXPOSE 3000

CMD ["node", "server.js"]