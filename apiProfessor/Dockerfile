FROM node:16

WORKDIR /src
COPY package*.json /
EXPOSE 3000

RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "bin/www"]