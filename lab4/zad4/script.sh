#!/bin/bash

read -p "Enter password: " pass

tar -czvf - \\\\wsl$\\docker-desktop-data\\data\\docker\\volumes\\nginx_data | gpg --symmetric --cipher-algo AES256 --batch --passphrase "$pass" -o \\\\wsl$\\docker-desktop-data\\data\\docker\\volumes\\nginx_data.tar.gz.gpg

read -p "Enter password to decrypt: " pas

gpg --decrypt --batch --passphrase "$pas" \\\\wsl$\\docker-desktop-data\\data\\docker\\volumes\\nginx_data.tar.gz.gpg | tar -xzvf - -C \\\\wsl$\\docker-desktop-data\\data\\docker\\volumes\\nginx_data
