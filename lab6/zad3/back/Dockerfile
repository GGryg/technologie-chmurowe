FROM node

WORKDIR /app

COPY server/. .

RUN yarn install

EXPOSE 5000

CMD ["node", "server.js"]