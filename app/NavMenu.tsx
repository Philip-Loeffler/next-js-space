import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav>
      <Link href={"/"}>
        <Image width={216} height={30} alt="NextSpace logo" />
      </Link>
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
