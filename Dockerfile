FROM node:lts-alpine AS dependencies

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

FROM dependencies AS build

# Bundle app source
COPY . .

RUN npx ng build

FROM node:lts-alpine AS release

WORKDIR /app

COPY --from=build /app/dist/portfolio ./

EXPOSE 4000

CMD [ "node", "./server/server.mjs" ]