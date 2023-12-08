import React from "react";

import { footerText } from "@/constants";
import {portfolioLinks} from "@/constants"

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>개인 포트폴리오</div>
                    <div>Git</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        {portfolioLinks.map((portfolio, key) => (
                            <div className="title" key={key}>
                                <a href={portfolio.link} target="_balnk" rel="noopener noreferrer">
                                    {portfolio.title}
                                </a>
                                <br />
                            </div>
                        ))}
                    </div>
                    <div className="right">
                        <h3>Git Hub</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link} target="_blank">{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2023 보안.com<br />
                    정보보호학과 웹어플리케이션 & Capstone Design
                </div>
            </div>
        </footer>
    )
}

export default Footer;