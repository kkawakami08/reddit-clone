"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>From Client: Signed IN {JSON.stringify(session.data.user)}</div>
    );
  }

  return <div>From Client: Signed OUT</div>;
};

export default Profile;
