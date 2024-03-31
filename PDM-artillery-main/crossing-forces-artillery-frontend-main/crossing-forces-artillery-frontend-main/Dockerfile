FROM node:21-alpine3.18

RUN mkdir -p /pdmArtillery/frontend
WORKDIR /pdmArtillery/frontend

COPY ./frontend/package.json /pdmArtillery/frontend
COPY ./frontend/package-lock.json /pdmArtillery/frontend

RUN npm -f install 
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY ./frontend/ /pdmArtillery/frontend

EXPOSE 8080

CMD ["npm", "start"]
