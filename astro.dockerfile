FROM node:22-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY astro.config.mjs ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app .

RUN pnpm install --prod

EXPOSE 4321

USER node

CMD ["pnpm", "run", "preview","--host" ,"0.0.0.0"]