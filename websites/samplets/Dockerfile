FROM node as builder
WORKDIR /typescript
COPY ./package*.json .
RUN npm install
COPY ./tsconfig.json .
COPY ./source ./source
RUN npm install typescript
RUN npx tsc

FROM node
WORKDIR /application
COPY package*.json ./
RUN npm install --production
COPY --from=builder ./typescript/release ./release
COPY ./public ./public
CMD ["npm", "start"]