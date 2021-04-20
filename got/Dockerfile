FROM node:alpine

WORKDIR /usr/src/got

COPY package*.json ./

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 5000

#CMD ["node", "app.js"]
CMD nodemon -L --watch . app.js