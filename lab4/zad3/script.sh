#!/bin/bash

volumes=$(docker volume ls --format '{{.Name}}')

for volume in $volumes
do
    usage=$(df -h $volume | awk 'NR==2 {print $5}')
    p=$(echo $usage | tr -d '%')

    echo "Zużycie $volume: $p %"
done