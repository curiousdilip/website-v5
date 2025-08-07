import { motion } from "framer-motion";
import Link from "next/link";


export default function Footer() {
  // Define variants inline
  const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  const footerItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.footer
        variants={footerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container">
          <div className="upper-footer">
            <motion.div className="description" variants={footerItemVariants}>
              <Link href="/">Dilip.</Link>
              <p>Delivers responsive web solutions and maintaining high client satisfaction</p>
              <motion.div className="socials" variants={footerItemVariants}>
                <motion.ul>
                  {[
                    {
                      href: "https://github.com/curiousdilip",
                      label: "github",
                      icon: "bi bi-github", rel: "me noopener noreferrer",
                    },
                    {
                      href: "https://www.linkedin.com/in/curiousdilip/",
                      label: "linkedin",
                      icon: "bi bi-linkedin", rel: "me noopener noreferrer",
                    },
                    {
                      href: "https://x.com/curiousdilip/",
                      label: "twitter",
                      icon: "bi bi-twitter-x", rel: "me noopener noreferrer",
                    },
                    {
                      href: "mailto:curiousdilip@gmail.com",
                      label: "mail me",
                      icon: "bi bi-envelope", rel: " noopener noreferrer",
                    },
                  ].map((item) => (
                    <motion.li key={item.href} variants={footerItemVariants}>
                      <a href={item.href} target="_blank"rel={item.rel}aria-label={item.label} title={item.label}>
                        <i className={item.icon}></i>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            <div className="links">
              {[
                {
                  title: "Site Link",
                  links: [
                    { text: "Projects", href: "/work" },
                    { text: "About", href: "/about" },
                    { text: "Contact", href: "/contact" },
                    { text: "Resume", href: "/resume" },
                  ],
                },
                {
                  title: "This Site",
                  links: [
                    {
                      text: "Source Code",
                      href: "https://github.com/curiousdilip/website-v5",
                      external: true,
                      rel: "me noopener noreferrer",

                    },
                    { text: "Sitemap", href: "/sitemap.xml" },
                  ],
                },
                {
                  title: "Elsewhere",
                  links: [
                    {
                      text: "Frontend Mentor",
                      href: "https://www.frontendmentor.io/profile/curiousdilip",
                      external: true,
                      rel:"me noopener noreferrer"
                    },
                    {
                      text: "Codepen",
                      href: "https://codepen.io/curiousdilip",
                      external: true,
                      rel: "me noopener noreferrer",
                    },
                  ],
                },
              ].map((col) => (
                <motion.div className="link" key={col.title} variants={footerItemVariants}>
                  <h4>{col.title}</h4>
                  <ul>
                    {col.links.map((lnk) => (
                      <li key={lnk.href}>
                        <Link href={lnk.href} target={lnk.external ? "_blank" : undefined}   rel={lnk.rel || (lnk.external ? "noopener noreferrer" : undefined)} title={lnk.text}>
                          {lnk.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="copyright" variants={footerItemVariants}>
            <p>&copy; {new Date().getFullYear()} Dilip Kumar. All rights reserved. </p>
            <p>Last updated by Dilip on 7 August, 2025 at 11:27 AM UTC +5:30</p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
