// eslint-disable-next-line @typescript-eslint/no-unused-vars
import session from 'express-session';
import { Request, Response } from 'express';
import { Redis } from 'ioredis';
import { createUserLoader } from './utils/createUserLoader';

export type MyContext = {
  req: Request;
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
};

declare module 'express-session' {
  export interface SessionData {
    userId?: number;
  }
}
