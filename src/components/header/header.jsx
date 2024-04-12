import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
      <header>
        <div>
          <div className="topNav">
            <Image
              src={
                "https://www.bhmpics.com/downloads/logo-black-background/6.mountain-logo-design-isolated-dark-background-simple-vector-194259788.jpg"
              }
              alt="abcd"
              width={50}
              height={50}
            />
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <h1>Sed ut perspiciatis unde omnis</h1>
        </div>
      </header>
    );
}