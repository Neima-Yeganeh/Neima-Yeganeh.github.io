import React from "react";
import { Link } from "@chakra-ui/react";
import "./About.css";
const followLinks = [
  {
    link: "https://github.com/Neima-Yeganeh/Neima-Yeganeh.github.io",
    name: "Github",
    whiteSpace: ", ",
  },
  {
    link: "https://www.figma.com/file/ueOAlL16lbexE9NYJuh3FR/Untitled?type=design&node-id=1%3A2&mode=design&t=XL7zhxd9eklgIdYj-1",
    name: "Figma",
    whiteSpace: ", ",
  },
  {
    link: "https://neima-yeganeh.atlassian.net/jira/software/projects/NEIM/boards/1",
    name: "Jira",
    whiteSpace: ", and ",
  },
  {
    link: "https://drive.google.com/drive/folders/1R00tnDyKVFs47NS7pbHwzQAteWDGK63T?usp=sharing",
    name: "Google Drive",
    whiteSpace: "",
  },
];
const AboutPageLink = ({ link, name, whiteSpace }) => (
  <span>
    <Link color="teal.500" href={link} target="_blank">
      {name}
    </Link>
    {whiteSpace}
  </span>
);
function About() {
  const READMELINK =
    "https://github.com/Neima-Yeganeh/Neima-Yeganeh.github.io/tree/NEIM-12_aboutpage1.0#readme";
  const READMENAME = "README";
  const READMEWHITESPACE = "";
  return (
    <div>
      <div className="aboutPageContainer">
        <div className="imgBox">
          <img className="neimaImg" src="./neima.png" />
        </div>
        <div className="textBox">
          <span className="thankyou">Hello!</span> Welcome to my personal
          website. It's currently under construction. I recently rewrote it
          using Javascript, HTML, CSS, React and Github Pages. The Goal is to
          update it with more information about myself and use a lot of the
          skills I have developed over the past few years. Feel free to follow
          my progress on{" "}
          {followLinks.map(({ link, name, whiteSpace }) => (
            <AboutPageLink
              link={link}
              name={name}
              whiteSpace={whiteSpace}
              key={name}
            />
          ))}
          . If you arent able to access a certain page please reachout to me and
          I will grant the permissions/share the info. In the{" "}
          {
            <AboutPageLink
              link={READMELINK}
              name={READMENAME}
              whiteSpace={READMEWHITESPACE}
            />
          }{" "}
          I have instructions on how to download and run this site locally and
          other development information. I have decided to take on the role of
          product owner, UI, and software developer.
          <div className="thankyou">Thank you</div>
          <div>
            for visiting my site. I hope you are able to find what you are
            looking for.{" "}
          </div>
        </div>
      </div>

      <div className="pdf-container">
        <iframe
          className="pdf-iframe"
          src="https://drive.google.com/file/d/1Prg-_D1C70NG6o3wtYwJMD-YvH23lAse/preview"
        ></iframe>
        <a
          href="https://drive.google.com/file/d/1Prg-_D1C70NG6o3wtYwJMD-YvH23lAse/preview"
          download="neimaResume.pdf"
          className="download-link"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
export default About;
