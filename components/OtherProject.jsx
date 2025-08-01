import { motion } from 'framer-motion';

export default function OtherProject({ heading, text }) {
  return (
    <motion.div
      className="project-s"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px 0px 0px 0px' }}
      transition={{
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      }}
    >
      <h4 className="project-s__heading">{heading}</h4>
      <p className="project-s__text">{text}</p>
    </motion.div>
  );
}
