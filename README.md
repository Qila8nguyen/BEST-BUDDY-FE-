# Self-Mood-FE-

## Getting Started

Node version: 16.x

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
docker-compose up -d
npx prisma generate
npx prisma migrate dev
npx prisma db seed
yarn dev
```

Open [http://localhost:3600](http://localhost:3600) with your browser to see the result.
