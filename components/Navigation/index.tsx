import { NavItems } from "@/data/navigationLinks";
import Link from "next/link";
const Navigation = () => {
  return (
    <nav>
      <ul>
        {NavItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
