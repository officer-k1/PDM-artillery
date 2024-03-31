FROM node:alpine

RUN mkdir -p /pdmArtillery/backend
WORKDIR /pdmArtillery/backend

COPY package.json /pdmArtillery/backend
COPY package-lock.json /pdmArtillery/backend

RUN npm install

COPY . /pdmArtillery/backend

EXPOSE 3000

CMD ["npm", "start"]
