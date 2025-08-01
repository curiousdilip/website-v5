import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Resume() {
    return (
        <>
            <Head>
                <title>Resume | Dilip Kumar Maurya</title>
                <meta
                    name="description"
                    content="View and download the professional resume of Dilip Kumar Maurya, web developer."
                />
            </Head>
            <div data-scroll-section>
                <div className="container container__padding-block">
                    <div className="resume">
                        <motion.header
                            className="resume__header"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'anticipate' }}
                        >
                            <h1 className="resume__header-heading">My Resume</h1>
                            <p className="resume__header-text">
                                Explore my professional journey and skills. You can view or download my resume below.
                            </p>
                        </motion.header>

                        <motion.div
                            className="resume__content"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'anticipate', delay: 0.3 }}
                        >
                            <div className="resume__embed-container" style={{ margin: '2rem 0', textAlign: 'center' }}>
                                {/* Replace '/resume.pdf' with your actual resume file path in the public folder */}
                                <iframe
                                    src="/resume.pdf"
                                    width="100%"
                                    height="600px"
                                    style={{ border: '1px solid #ddd', borderRadius: '8px' }}
                                    title="Dilip Kumar Maurya Resume"
                                ></iframe>
                                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    If the PDF is not visible, you can{' '}
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                        download the resume here.
                                    </a>
                                </p>

                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <a
                                    href="/resume.pdf"
                                    download="Dilip-Kumar-Maurya-Resume.pdf"
                                    className="btn btn--primary"

                                    

                                >
                                    Download Resume (PDF)
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
