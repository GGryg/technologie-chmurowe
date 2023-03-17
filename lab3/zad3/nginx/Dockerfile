FROM nginx

RUN mkdir -p /var/proxy/nginx

COPY ./default.conf /etc/nginx/conf.d

COPY ./cert.pem /etc/nginx/ssl/cert.pem

COPY ./key.pem /etc/nginx/ssl/key.pem

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]