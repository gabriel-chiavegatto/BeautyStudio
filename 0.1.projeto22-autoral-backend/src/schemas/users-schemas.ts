import Joi from 'joi';
import { CreateUserParams } from '@/services';

export const createUserSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
