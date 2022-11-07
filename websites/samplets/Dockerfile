FROM node as builder
WORKDIR /typescript
COPY ./package*.json .
RUN npm install
COPY ./tsconfig.json .
COPY ./source ./source
RUN npm install typescript
RUN npx tsc

FROM node:alpine
WORKDIR /application
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder ./typescript/release ./release
COPY ./public ./public
CMD ["node", "release/main.js"]