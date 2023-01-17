#base image where our app will running
FROM node:latest

#working directory where our app will be placed
WORKDIR /app

#copy package.json to the working directory
COPY package.json .

#install dependencies
RUN npm install

#copy all files to the working directory
COPY . .

#port in docker container (not in localhost)
EXPOSE 5005

#command to run the app
CMD ["npm", "start"]