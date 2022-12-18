import Link from "next/link";
import {useRouter} from "next/router";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <Link href="/">
                <p className={router.pathname === "/" ? "active" : ""}>Home</p>
            </Link>
            <Link href="/about">
                <p className={router.pathname === "about" ? "active" : ""}>about</p>
            </Link>
            <style jsx>
                {`
                  nav {
                    backround-color: tomato;
                  }
                  a {
                    text-decoration: none;
                  }
                  .active {
                    color: blue;
                  }
                `}
            </style>
        </div>
    )
}
