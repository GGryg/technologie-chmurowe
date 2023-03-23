#!/bin/bash

docker volume create nginx_data

docker run -d --name zad1 -p 80:80 -v nginx_data:/usr/share/nginx/html nginx

echo "zmiana" > \\\\wsl$\\docker-desktop-data\\data\\docker\\volumes\\nginx_data\\_data\\index.html