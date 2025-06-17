import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/NewHeader.module.css";


const ActiveLink = ({ href, text, className = "", handle }) => {
  
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <button className={styles.megaButton} onClick={handle}>
      <Link
        href={href}
        className={`
        ${currentRoute === href ? `${styles.tabLink}` : `${styles.myLink}`}
        ${className}
      `}
      >
        {text}
      </Link>
    </button>
  );
};
export default ActiveLink;
