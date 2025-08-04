import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

export default function Work() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const [hasMore, setHasMore] = useState(true);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const fetchData = async (currentSkip = 0) => {
    setIsLoading(true);
    setError(false);

    try {
      const url = `https://api.cosmicjs.com/v3/buckets/my-website-website/objects?pretty=true&query=%7B%22type%22:%22works%22%7D&limit=${limit}&skip=${currentSkip}&read_key=n3jLniptSDz6sl6YWVXuEict2MsOxs3jN3sxxFOBg2vY8d0NIE&depth=1&props=slug,title,metadata,type`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();

      if (data.objects && data.objects.length > 0) {
        if (currentSkip === 0) {
          setProjects(data.objects);
        } else {
          setProjects(prev => [...prev, ...data.objects]);
        }
        // If fetched less than limit, there are no more projects
        if (data.objects.length < limit) {
          setHasMore(false);
        }
      } else {
        // No more data returned
        setHasMore(false);
      }
    } catch (e) {
      setError(true);
      console.error("Failed to fetch projects:", e);
    }

    setIsLoading(false);
  };

  // Initial load
  useEffect(() => {
    fetchData(0);
  }, []);

  // Handler for Load More button
  const handleLoadMore = () => {
    const newSkip = skip + limit;
    setSkip(newSkip);
    fetchData(newSkip);
  };

  return (
    <>
      <Head>
        <title>Portfolio | Dilip Kumar</title>
        <meta
          name="description"
          content="Below you can find a selection of personal projects I've been working on recently. Here you can find some excerpts from my day-to-day professional work."
        />
      </Head>

      <div data-scroll-section>
        <div className="container container__padding-block">
          <motion.h1
            className="projects-heading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'anticipate' }}
          >
            Crafting Digital Solutions
          </motion.h1>

          {isLoading && <p>Loading... Please wait</p>}
          {error && <p>Something went wrong... Please try again later</p>}

          <motion.div
            className="project-cards-grid"
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '2.5rem',
            }}
          >
            {projects.length > 0 &&
              [...projects].reverse().map((project) => (
                <motion.div
                  key={project.id}
                  variants={item}
                  className="project-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    background: '#131313',
                    boxShadow: '0 4px 32px 0 rgb(0 0 0 / 6%)',
                    overflow: 'hidden',
                    minHeight: 420,
                    border: '1px solid #222',
                  }}
                >
                  {project.metadata?.gallery?.[0]?.image?.url && (
                    <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>


                      <Image
                        src={project.metadata.gallery[0].image.url}
                        alt={project.title}
                        width="0"
                        height={180}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        priority
                      />

                    </div>
                  )}
                  <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 className="project-card-title" style={{ fontSize: "1.4rem", fontWeight: 600, margin: "0 0 1rem 0" }}>
                      {project.title}
                    </h2>
                    <p className="project-card-desc" style={{
                      color: "#bbb",
                      fontSize: '1rem',
                      flexGrow: 1,
                      marginBottom: '1.5rem',
                    }}>
                      {project.metadata?.description
                        ? project.metadata.description.slice(0, 100) + (project.metadata.description.length > 100 ? "..." : "")
                        : "No description available."}
                    </p>
                    <Link
                      href={`/work/${project.slug}`}
                      className="btn btn--secondary"
                      style={{
                        alignSelf: 'flex-start',
                       
                      }}
                    >
                      View Project &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Load More Button */}
          {hasMore && !isLoading && !error && (
            <button
              onClick={handleLoadMore}
              className="btn btn--primary"
              style={{
                marginTop: '2rem',

              }}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
}
