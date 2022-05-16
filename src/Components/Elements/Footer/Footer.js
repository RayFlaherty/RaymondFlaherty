import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./Footer.module.css";

const Footer = () => {
  const FooterEl = [
    {
      title: "FIN",
      desc: "For a look at the repository for this project and future additions, please click the link below and explore the ReadMe.",
      link: (
        <a href="https://github.com/RayFlaherty/RaymondFlaherty.git">
          Resume' Repo
        </a>
      ),
    },
  ];

  return (
    <Card>
      {FooterEl.map((FooterEl) => (
        <div>
          <header>
            <h2>{FooterEl.title}</h2>
          </header>
          <p>{FooterEl.desc}</p>
          <p className={classes.linkPos}>{FooterEl.link}</p>
        </div>
      ))}
    </Card>
  );
};

export default Footer;
