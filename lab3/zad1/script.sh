#!/bin/bash

docker build -t lab3zad1 .

docker run -d --name zad1 -p 8080:80 lab3zad1