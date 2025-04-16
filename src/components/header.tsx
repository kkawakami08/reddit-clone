import Link from "next/link";
import paths from "@/paths";
import { Input } from "./ui/input";
import HeaderAuth from "./header-auth";

const Header = () => {
  //server side session = dynamic

  return (
    <nav className="flex items-center justify-between py-4">
      <Link href={paths.home()} className="font-bold">
        Discuss
      </Link>
      <Input className="max-w-lg" />
      <HeaderAuth />
    </nav>
  );
};

export default Header;
