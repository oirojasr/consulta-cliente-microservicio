FROM node:10.16.3-alpine AS build

RUN apk update && \
    apk upgrade && \
    apk add ca-certificates && \
    apk add python && \
    apk add make && \
    apk add g++ && \
    apk add --update bash

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
ADD . /app
RUN npm run build

FROM node:10.16.3-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/env.yaml .
COPY --from=build /app/package.json .

RUN npm install --production

CMD [ "npm", "run", "start:production" ]