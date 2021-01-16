import React from 'react';
import Link from 'next/link';
import { useLogoutMutation, useMeQuery } from 'generated/graphql';
import { isServer } from 'utils/isServer';

const NavBar: React.FC = () => {
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [, logout] = useLogoutMutation();
  let body = null;

  if (!data?.me) {
    body = (
      <>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </>
    );
  } else {
    body = (
      <div>
        Hello
        <span>{data.me.username}</span>
        <Link href="/create-post">
          <a>Add post</a>
        </Link>
        <button onClick={() => logout()} type="button">
          Logout
        </button>
      </div>
    );
  }

  return <div>{body}</div>;
};

export default NavBar;
