FROM node:alpine3.15
WORKDIR /app
COPY . .
ENV PORT=3005
EXPOSE ${PORT}
RUN npm install
RUN npm run build
CMD node ./dist/main.js