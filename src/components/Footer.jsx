import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/ellisvelandia/",
    },
    {
      id: 2,
      url: "https://t.me/+573125668800",
    },
    {
      id: 3,
      url: "https://wa.me/+573125668800",
    },
    {
      id: 4,
      url: "https://github.com/Ellisvelandia",
    },
  ];

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
