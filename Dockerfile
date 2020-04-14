FROM node:lts-alpine as builder
WORKDIR /app
RUN apk update && \
    apk add git openssh

CMD ["yarn", "start"]
