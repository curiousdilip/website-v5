import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Project({ project }) {
  if (!project) {
    return (
      <div className="container container__padding-block">
        Project not found.
      </div>
    );
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.15 },
    },
  };

  const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <>
      <Head>
        <title>{`${project.title} | Portfolio`}</title>
        <meta
          name="description"
          content={project.metadata?.description || ""}
        />
      </Head>
      <div data-scroll-section>
        <div className="container container__padding-block">
          <motion.header
            className="p__header"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            <h1 className="p__header-title">
              {project.metadata?.link ? (
                <Link
                  href={project.metadata.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p__header-title-link"
                  title={project.title}
                >
                  {project.title}
                </Link>
              ) : (
                project.title
              )}
            </h1>
          </motion.header>

          <div className="p-content">
            <div className="p-content__description">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "anticipate" }}
              >
                {project.metadata?.description}
              </motion.p>

              <motion.div
                className="p-content__description-info"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <motion.p
                  className="p-content__description-info__job-role"
                  variants={item}
                >
                  <span className="font-weight--semi-bold">Job Role:</span>{" "}
                  {project.metadata?.job_role}
                </motion.p>
                <motion.p
                  className="p-content__description-info__client"
                  variants={item}
                >
                  <span className="font-weight--semi-bold">Client:</span>{" "}
                  {project.metadata?.client}
                </motion.p>
                <motion.p
                  className="p-content__description-info__year"
                  variants={item}
                >
                  <span className="font-weight--semi-bold">Year:</span>{" "}
                  {project.metadata?.year}
                </motion.p>
                <motion.p
                  className="p-content__description-info__site"
                  variants={item}
                >
                  <span className="font-weight--semi-bold">
                    Website: &nbsp;
                  </span>
                  {project.metadata?.link ? (
                    <Link
                      href={project.metadata.link}
                      target="_blank"
                      style={{ textDecoration: "underline" }}
                      rel="noopener noreferrer"
                      title="Visit the website"
                    >
                      See Live
                    </Link>
                  ) : (
                    <span>Not Available</span>
                  )}
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="p-content__technologies"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {project.metadata?.technologies?.map(({ technology }, index) => (
                <motion.p
                  key={index}
                  className="p-content__technologies-tech"
                  variants={item}
                >
                  {technology}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <div className="p-showcase">
            {project.metadata?.gallery?.length > 0 &&
              project.metadata.gallery.map(({ image }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, ease: "anticipate" }}
                >
                  <Image
                    className="p-showcase__img"
                    key={index}
                    src={image.url}
                    alt={`Project image ${index + 1}`}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const query = encodeURIComponent(JSON.stringify({ type: "projects" }));
    const url =
      "https://api.cosmicjs.com/v3/buckets/my-website-website/objects?pretty=true&query=%7B%22type%22:%22works%22%7D&limit=10&skip=0&read_key=n3jLniptSDz6sl6YWVXuEict2MsOxs3jN3sxxFOBg2vY8d0NIE&depth=1&props=slug,title,metadata,type";
    const res = await fetch(url);

    if (!res.ok) {
      console.error("API returned status", res.status);
      return { paths: [], fallback: true };
    }

    const data = await res.json();
    const paths = data.objects.map((project) => ({
      params: { slug: project.slug },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error("Failed to fetch paths:", error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  try {
    const query = encodeURIComponent(JSON.stringify({ slug: params.slug }));
    const url = `https://api.cosmicjs.com/v3/buckets/my-website-website/objects?pretty=true&query=${query}&limit=1&skip=0&read_key=n3jLniptSDz6sl6YWVXuEict2MsOxs3jN3sxxFOBg2vY8d0NIE&depth=1&props=slug,title,metadata,type`;
    const res = await fetch(url);

    if (!res.ok) {
      console.error("API returned status", res.status);
      return { notFound: true };
    }

    const data = await res.json();
    const project = data.objects?.[0] ?? null;

    if (!project) {
      return { notFound: true };
    }

    return { props: { project }, revalidate: 60 };
  } catch (error) {
    console.error("Failed to fetch project:", error);
    return { notFound: true };
  }
}
