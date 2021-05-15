FROM node:current-slim

## Set environment
EXPOSE 8000

# Workdir
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

## Get Hexohe       
RUN apt-get update
RUN npm install npm@latest -g
RUN npm install

CMD ["npm", "start"]