// eslint-disable-next-line @typescript-eslint/no-unused-vars
import session from 'express-session';
import { Request, Response } from 'express';
import { Redis } from 'ioredis';
import { createUserLoader } from './utils/createUserLoader';
import { createMatchesLoader } from './utils/createMatchesLoader';
import { createTeamsLoader, createHostTeamsLoader, createGuestTeamsLoader } from './utils/createTeamsLoader';

export type MyContext = {
  req: Request;
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
  matchesLoader: ReturnType<typeof createMatchesLoader>;
  teamsLoader: ReturnType<typeof createTeamsLoader>;
  hostTeamsLoader: ReturnType<typeof createHostTeamsLoader>;
  guestTeamsLoader: ReturnType<typeof createGuestTeamsLoader>;
};

declare module 'express-session' {
  export interface SessionData {
    userId?: number;
  }
}
