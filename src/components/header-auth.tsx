"use client";

import * as actions from "@/actions";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  //client side session = static
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Avatar className="">
            <AvatarImage src={session.data.user.image || ""} />
            <AvatarFallback>{session.data.user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuItem>
            <form action={actions.signOut}>
              <Button type="submit" variant={"ghost"}>
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    authContent = (
      <div className="flex gap-3">
        <form action={actions.signIn}>
          <Button type="submit">Sign In</Button>
        </form>
        <form action={actions.signIn}>
          <Button type="submit" variant={"secondary"}>
            Sign Up
          </Button>
        </form>
      </div>
    );
  }

  return authContent;
};

export default HeaderAuth;
