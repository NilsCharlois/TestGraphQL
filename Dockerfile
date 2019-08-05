FROM node:10.16.0
WORKDIR /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
