FROM ubuntu AS build

COPY /myapp /myapp

WORKDIR /myapp

FROM nginx

COPY --from=build /myapp/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
