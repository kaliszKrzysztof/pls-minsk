import 'reflect-metadata';
import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import { TeamResolver } from './resolvers/team';
import { MatchResolver } from './resolvers/match';
import { AUTH_COOKIE_NAME, prod } from './constants';
import { MyContext } from './types';
import { Post } from './entities/Post';
import { User } from './entities/User';
import { Updoot } from './entities/Updoot';
import { Team } from './entities/Team';
import { createUserLoader } from './utils/createUserLoader';
import { createMatchesLoader } from './utils/createMatchesLoader';
import { createTeamsLoader, createHostTeamsLoader, createGuestTeamsLoader } from './utils/createTeamsLoader';
import { Match } from './entities/Match';
import { MatchToTeam } from './entities/MatchToTeam';

const main = async () => {
  const connection = await createConnection({
    type: 'postgres',
    database: 'plsminsk2',
    username: 'postgres',
    password: 'postgres',
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, './migrations/*')],
    entities: [Post, User, Updoot, Team, Match, MatchToTeam],
  });

  await connection.runMigrations();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  app.use(
    session({
      name: AUTH_COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        sameSite: 'lax',
        secure: prod,
      },
      saveUninitialized: false,
      secret: 'sdfsdfsd',
      resave: false,
    }),
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver, TeamResolver, MatchResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({
      req,
      res,
      redis,
      userLoader: createUserLoader(),
      matchesLoader: createMatchesLoader(),
      teamsLoader: createTeamsLoader(),
      hostTeamsLoader: createHostTeamsLoader(),
      guestTeamsLoader: createGuestTeamsLoader(),
    }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(process.env.PORT || 4000, () => {
    console.log(`server started on localhost:${process.env.PORT || 4000}`);
  });
};

main();
