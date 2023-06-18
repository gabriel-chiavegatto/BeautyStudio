import { Router } from "express";

const testUser = Router();

testUser.get('/testUser', (_req, res) => res.send('OK!'))

export default testUser;