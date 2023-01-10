import React from "react";
import { SocialIcon } from "react-social-icons";
import {socials} from "../data/socialData";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full p-5 flex items-center justify-center my-6">
      <motion.div
        initial={{ x: 2, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="flex"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            url={social.url}
            fgColor="#fff"
            rel="noreferrer"
            target="_blank"
            style={{ height: 35, width: 35 }}
            className="mx-2 hover:scale-150"
          />
        ))}
      </motion.div>
    </footer>
  );
};

export default Footer;
