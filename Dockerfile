# Dockerfile

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build
# RUN npm install -g next

EXPOSE 3000

CMD ["npm", "run", "start"]