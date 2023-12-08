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
              <li><a href="#">책임의 한계와 법적고지</a></li>
              <li><a href="#">게시중단 요청 서비스</a></li>
              <li><a href="#">고객센터</a></li>
            </ul>
            <address>
              Copyright&copy;songkungseon.co.kr All Rigtht Rederved
            </address>
          </div>
        </div>

      </footer>
    )
}

export default Servicefooter;