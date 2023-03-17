#!/bin/bash

cd nginx
docker build -t my-nginx .

cd ..

cd node
docker build -t my-node .

cd ..

docker run -d --name my-node -p 3000:3000 my-node

docker run -d --name my-nginx-container -p 80:80 -p 443:443 --link my-node:my-node my-nginx
docker exec -it my-nginx-container ngix -s reload