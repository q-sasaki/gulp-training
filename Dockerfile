FROM ubuntu

RUN apt-get update && apt-get install -y \
    nginx \
    vim \
    curl \
    tree

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]