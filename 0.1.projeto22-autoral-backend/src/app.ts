import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';
loadEnv();
// import { usersRouter } from './routers/users-router';
import testUser from './routers/test-user-router';

// import { handleApplicationErrors } from '@/middlewares';


const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  // .use('/users', usersRouter)
  .use('/test-user', testUser)
// .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
