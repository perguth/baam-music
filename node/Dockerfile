FROM node:lts-alpine

RUN apk --update --no-cache add curl nmap nload htop nano

WORKDIR /node
COPY . .
RUN yarn install --silent --frozen-lockfile


