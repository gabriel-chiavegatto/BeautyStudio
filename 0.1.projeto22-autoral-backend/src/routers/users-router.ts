import { Router } from 'express';

// import { createUserSchema } from '@/schemas';
// import { validateBody } from '@/middlewares';
// import { usersPost } from '@/controllers';

const usersRouter = Router();

// usersRouter.post('/', validateBody(createUserSchema), usersPost);
usersRouter.get('/', (_req, res) => res.send('OK!'));
// usersRouter.post('/', usersPost);

export {usersRouter} ;
