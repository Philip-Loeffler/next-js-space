import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav>
      <link href={"/"}>
        <Image width={216} height={30} src="/logo.svg" alt="NextSpace logo" />
      </link>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
