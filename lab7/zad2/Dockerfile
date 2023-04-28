FROM node

WORKDIR /app

COPY app/ .

RUN yarn install

EXPOSE 3003

CMD ["node", "server.js"]