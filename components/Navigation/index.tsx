"use client";

import { NavItems } from "@/data/navigationLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/context/UserName";

import "./navigation.scss";

const Navigation = () => {
  const pathname = usePathname();

  const { savedUserName } = useUserContext();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {NavItems.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <li
              key={index}
              className="navigation__listItem"
            >
              <Link
                href={item.link}
                className={
                  isActive
                    ? "navigation__listItemLinks active"
                    : "navigation__listItemLinks"
                }
              >
                {item.name === "Profile" &&
                savedUserName
                  ? savedUserName
                  : item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;