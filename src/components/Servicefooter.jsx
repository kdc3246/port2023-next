import React from "react";
import styles from '../app/dashboard/Servicefooter.module.css'
import { footerText } from "@/constants";

const Servicefooter = () => {
    return (
        <footer className={styles.footer} role="contentinfo">
        <div className={styles.containe}>

          <div className={styles.footer}>
            <ul>
              <li><a href="#">사이트 도움말</a></li>
              <li><a href="#">사이트 이용약관</a></li>
              <li><a href="#">사이트 운영규칙</a></li>
              <li><a href="#"><strong>개인정보취급방침</strong></a></li>
              <li><a href="#">고객센터</a></li>
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