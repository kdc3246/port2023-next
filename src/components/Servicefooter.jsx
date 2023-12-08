import React from "react";
import styles from '../app/dashboard/Servicefooter.module.css'
import Link from "next/link";

const Servicefooter = () => {
    return (
        <footer className={styles.footer} role="contentinfo">
        <div className={styles.containe}>

          <div className={styles.footer}>
            <ul>
              <li><Link href="https://github.com/kdc3246/port2023-next#readme" target="_blank">사이트 도움말</Link></li>
              <li><Link href="#">사이트 이용약관</Link></li>
              <li><Link href="#">사이트 운영규칙</Link></li>
              <li><Link href="#"><strong>개인정보취급방침</strong></Link></li>
              <li><Link href="#">고객센터</Link></li>
            </ul>
            <address>
                  &copy; 2023 보안.com<br />
                  정보보호학과 웹어플리케이션 & Capstone Design
            </address>
          </div>
        </div>

      </footer>
    )
}

export default Servicefooter;