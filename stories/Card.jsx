import "./card.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  WebsiteIcon,
} from "../components/SocialIcons";
import { useState } from "react";

export const Card = (props) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const [hovered, setHovered] = useState(false);
  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    });
  } else {
    // animationControl.start({
    //   y: 100,
    //   opacity: 0,
    //   transition: {
    //     delay: 0.5,
    //     type: "tween",
    //     ease: "easeInOut"
    //   }
    // });
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        y: 100,
        opacity: 0,
        border: "none",
        outline: "none",
      }}
      animate={animationControl}
      className={"card"}
      whileHover={{
        color: "white",
        backgroundColor: "black",
        outline: "1px solid white",
      }}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <div>
        <div className={"company_name"}>{props.name}</div>
        <div style={{ padding: 0, margin: 0 }}>{props.category}</div>
        <p>{props.established}</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "red"
        }}
      >
        {props.website && (
          <a href={props.website} style={{ padding: 5 }}>
            <div className={"card_icon"}>
              <WebsiteIcon fill={hovered ? "white" : "black"} />
            </div>
          </a>
        )}
        {props.twitterHandle && (
          <a
            href={"https://instagram.com/" + props.twitterHandle}
            style={{ padding: 5 }}
          >
            <div className={"card_icon"}>
              <TwitterIcon fill={hovered ? "white" : "black"} />
            </div>
          </a>
        )}
        {props.instagramHandle && (
          <a
            href={"https://instagram.com/" + props.instagramHandle}
            style={{ padding: 5 }}
          >
            <div className={"card_icon"}>
              <InstagramIcon fill={hovered ? "white" : "black"} />
            </div>
          </a>
        )}
        {props.githubHandle && (
          <a
            href={"https://github.com/" + props.githubHandle}
            style={{ padding: 5 }}
          >
            <div className={"card_icon"}>
              <GithubIcon fill={hovered ? "white" : "black"} />
            </div>
          </a>
        )}
      </div>
    </motion.div>
  );
};
