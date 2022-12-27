# syntax=docker/dockerfile:1

FROM node:14.15.0
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "npm run", "build"]
CMD [ "node", "./build/server.js"]