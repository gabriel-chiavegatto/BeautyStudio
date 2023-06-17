import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from './config/index.js';
loadEnv();

// import { handleApplicationErrors } from '@/middlewares';

// import * from './routers';


const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
// .use('/users', usersRouter)
// .use('/auth', authenticationRouter)
// .use('/payments', paymentsRouter)
// .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
