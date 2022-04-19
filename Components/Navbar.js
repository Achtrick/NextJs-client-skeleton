import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";

function Navbar({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div
        className={
          mobileOpen
            ? `${styles.mobileMenu} + ${styles.open}`
            : styles.mobileMenu
        }
      >
        <h3>
          <CloseIcon
            onClick={() => {
              setMobileOpen(false);
            }}
            fontSize="large"
          />
        </h3>
        <h3>
          <Link href="/">NEWS-FEED</Link>
        </h3>
        <h3>
          <Link href="/politics">POLITICS</Link>
        </h3>
        <h3>
          <Link href="/art">ART</Link>
        </h3>
        <h3>
          <Link href="/goverment">GOVERMENT</Link>
        </h3>

        <button className={styles.subscribe}>Subscribe</button>
      </div>
      <div className={styles.navbar}>
        <div
          onClick={() => {
            setMobileOpen(true);
          }}
          className={styles.navBtn}
        >
          <MenuIcon
            onClick={() => {
              setMobileOpen(true);
            }}
          />
        </div>
        <div className={styles.logo}>
          <Image
            width={100}
            height={100}
            objectFit="contain"
            src={"/" + "./logo.svg"}
          />
        </div>
        <div className={styles.navItems}>
          <ul>
            <li>NEWS-FEED</li>
            <li>POLITICS</li>
            <li>ART</li>
            <li>GOVERMENT</li>
          </ul>
        </div>
        <div className={styles.navControls}>
          <ul>
            <li>
              <Button className={styles.subscribe} variant="text">
                <a>Subscribe</a>
              </Button>
            </li>
            <li>
              <Button className={styles.search} variant="text">
                <SearchIcon />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ paddingTop: "60px" }}>{children}</div>
    </>
  );
}

export default Navbar;
