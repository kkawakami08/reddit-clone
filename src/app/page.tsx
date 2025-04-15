import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";

const HomePage = async () => {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      <div>
        {session?.user ? (
          <p>Signed In {JSON.stringify(session.user)}</p>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
      <Profile />
    </div>
  );
};

export default HomePage;
