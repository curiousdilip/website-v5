import Head from 'next/head';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../public/developer.json'; 


export default function Home() {
  const links = [
    { href: "/work", label: "What I have Built?" },
    { href: "/about", label: "More about myself" },
    { href: "/resume", label: "My Latest Resume" },
    { href: "/contact", label: "Contact Me" },
  ];

  return (
    <>
      <Head>
        <title>Dilip Kumar Maurya | Home</title>
        <meta name="description" content="Personal portfolio of Dilip Kumar, web developer." />
      </Head>

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', minHeight: '80vh' }}>
        <div className="hero">
             <Lottie animationData={animationData} loop={true} autoplay={true} />
     


          <div className="hero__info" style={{ flex: 1 }}>
            <motion.p
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'anticipate' }}
            >
              Hey there, I&apos;m Dilip Kumar, a dedicated web developer with a passion to empower your business in the digital world. I specialize in developing websites that elevate online presence.
            </motion.p>

            <motion.p
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.225, ease: 'anticipate' }}
            >
              Feel free to reach out to me if you would like to discuss new opportunities or projects
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: "anticipate" }}
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}
              className="hero__links"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "underline" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.25 + index * 0.15, ease: "anticipate" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </>
  );
}
