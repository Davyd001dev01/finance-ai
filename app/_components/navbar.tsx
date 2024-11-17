"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

//interface NavbarProps {}

export default function Navbar() {
  const pathname = usePathname(); // pega a url atual

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/*LEFT*/}
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Logo Finance AI" />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      {/*RIGHT*/}
      <UserButton showName />
    </nav>
  );
}
