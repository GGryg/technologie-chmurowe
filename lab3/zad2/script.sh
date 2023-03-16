#!/bin/bash

docker build -t lab3zad2 .

docker run -d --name zad2 -p 8080:82 lab3zad2