import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function Custom404() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.1, staggerChildren: 0.15 } },
  };

  return (
    <>
      <Head>
        <title>Page Not Found | 404</title>
      </Head>
      <Header />
      <main>
        <div className="container err__container">
          <motion.h1
            className="body-l err__heading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'anticipate' }}
          >
            I don’t know why you’re here... so let me help.
          </motion.h1>

          <motion.div className="err__btn-wrapper" variants={container} initial="hidden" animate="visible">
            <Link href="/contact" className="btn btn--primary">
             Get in Touch
            </Link>
            <Link href="/work" className="btn btn--secondary">
            Projects
            </Link>
            <Link href="/about" className="btn btn--secondary">
            My Story
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
