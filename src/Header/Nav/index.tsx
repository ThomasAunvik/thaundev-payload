"use client";

import type React from "react";

import type { Header as HeaderType } from "@/payload-types";

import { CMSLink } from "@/components/Link";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || [];

  return (
    <nav className="flex items-center gap-3">
      {navItems.map((nav, i) => {
        return <CMSLink key={nav.id} {...nav.link} appearance="link" />;
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  );
};
