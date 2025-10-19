import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Work() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 20;
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
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      if (data.objects && data.objects.length > 0) {
        if (currentSkip === 0) {
          setProjects(data.objects);
        } else {
          setProjects((prev) => [...prev, ...data.objects]);
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
        <title>Portfolio of Web Development Projects | Dilip Kumar</title>
        <meta
          name="description"
          content="Explore a curated portfolio of web development projects by Dilip Kumar. Innovative, responsive, and user-friendly websites ready to elevate your business."
        />
        <meta
          name="keywords"
          content="Dilip Kumar , portfolio, portfolio of web development projects, web developer, work samples, user-friendly websites"
        />
        <meta name="author" content="Dilip Kumar Maurya" />
        <meta name="publisher" content="Dilip Kumar Maurya" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.dilipmaurya.in/portfolio"
        />
        <meta
          property="og:title"
          content="Portfolio of Web Development Projects | Dilip Kumar"
        />
        <meta
          property="og:description"
          content="Explore a curated portfolio of web development projects by Dilip Kumar. Innovative, responsive, and user-friendly websites ready to elevate your business."
        />
        <meta
          property="og:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.dilipmaurya.in/portfolio"
        />
        <meta
          name="twitter:title"
          content="Portfolio of Web Development Projects | Dilip Kumar"
        />
        <meta
          name="twitter:description"
          content="Explore a curated portfolio of web development projects by Dilip Kumar. Innovative, responsive, and user-friendly websites ready to elevate your business."
        />
        <meta
          name="twitter:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />

        <link rel="canonical" href="https://www.dilipmaurya.in/portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-scroll-section>
        <div className="container container__padding-block">
          <motion.h1
            className="projects-heading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            Making digital solutions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
            className="side-by-side__content"
            variants={item}
          >
            <p className="side-by-side__paragraph ">
              Check out a variety of projects that show off my skills in web
              development, UI/UX design, and making custom digital solutions.
              From websites for big companies to new businesses, each project
              shows how much I care about making experiences that are responsive
              and easy to use that help businesses grow.
            </p>
            <p className="side-by-side__paragraph">
              This portfolio shows that I can deliver high-quality solutions
              that are tailored to the needs of my clients, whether you want to
              be inspired or work together.
            </p>
          </motion.div>

          {isLoading && <p>Loading... Please wait</p>}
          {error && <p>Something went wrong... Please try again later</p>}

          <motion.div
            className="project-cards-grid"
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginTop: "2.5rem",
            }}
          >
            {projects.length > 0 &&
              [...projects].map((project) => (
                <motion.div
                  key={project.slug}
                  variants={item}
                  className="project-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "12px",
                    background: "#131313",
                    boxShadow: "0 4px 32px 0 rgb(0 0 0 / 6%)",
                    overflow: "hidden",
                    minHeight: 420,
                    border: "1px solid #222",
                  }}
                >
                  {project.metadata?.gallery?.[0]?.image?.url && (
                    <div
                      style={{
                        width: "100%",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          paddingBottom: "56.4%",
                        }}
                      >
                        <Image
                          src={project.metadata.gallery[0].image.url}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 387px"
                          style={{ objectFit: "cover" }}
                          priority
                        />
                      </div>
                    </div>
                  )}
                  <div
                    style={{
                      padding: "1.5rem",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h2
                      className="project-card-title"
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        margin: "0 0 1rem 0",
                      }}
                    >
                      {project.title}
                    </h2>
                    <p
                      className="project-card-desc"
                      style={{
                        color: "#bbb",
                        fontSize: "1rem",
                        flexGrow: 1,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {project.metadata?.description
                        ? project.metadata.description.slice(0, 100) +
                          (project.metadata.description.length > 100
                            ? "..."
                            : "")
                        : "No description available."}
                    </p>
                    <h3>
                      <Link
                        title={`Know more about  ${project.title}`}
                        href={`/portfolio/${project.slug}`}
                        className="btn btn--secondary"
                        style={{
                          alignSelf: "flex-start",
                          lineHeight: "1.6",
                        }}
                      >
                        View Project &rarr;
                      </Link>
                    </h3>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {hasMore && !isLoading && !error && (
            <button
              onClick={handleLoadMore}
              className="btn btn--primary"
              style={{
                marginTop: "2rem",
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
