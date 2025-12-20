# Node.js official image
FROM node:18-alpine

# App directory
WORKDIR /app

# package files copy
COPY package*.json ./

# dependencies install
RUN npm install

# baqi code copy
COPY . .

# Port expose (Back4App env use karta hai)
EXPOSE 3000

# App start
CMD ["npm", "start"]
