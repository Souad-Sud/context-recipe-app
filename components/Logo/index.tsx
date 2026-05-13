import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return(
        <div>
            <Link href="/">
                <Image src="/Logo/logorec.png" alt="Logo" width={90} height={78} />
            </Link>
        </div>
    )
}

export default Logo;