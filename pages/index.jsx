import Head from "next/head";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../public/developer.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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


  return (
    <>
      <Head>
        <title>Dilip Kumar | Professional Web Developer in Delhi</title>
        <meta
          name="description"
          content="Dilip Kumar is an experienced web developer in India, specializing in responsive, user-friendly websites and custom solutions to grow your business. Contact today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dilipmaurya.in/" />
        <meta property="og:title" content="Dilip Kumar | Professional Web Developer in Delhi" />
        <meta
          property="og:description"
          content="Dilip Kumar is an experienced web developer in India, specializing in responsive, user-friendly websites and custom solutions to grow your business. Contact today."
        />
        <meta
          property="og:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dilipmaurya.in/" />
        <meta name="twitter:title" content="Dilip Kumar | Professional Web Developer in Delhi" />
        <meta
          name="twitter:description"
          content="Dilip Kumar is an experienced web developer in India, specializing in responsive, user-friendly websites and custom solutions to grow your business. Contact today."
        />
        <meta
          name="twitter:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.dilipmaurya.in/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dilip Kumar Maurya" />
        <meta name="publisher" content="Dilip Kumar Maurya" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="keywords"
          content="Dilip kumar, web developer, curiousdilip,"
        />
      </Head>

      <div
        className="container"
      >
        <div className="hero">

          <div className="hero__info" style={{ flex: 1 }}>
            <motion.div
              className="hero__head"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
            >
              Hi, I&apos;m <h1>Dilip Kumar</h1>,
            </motion.div>
            <motion.div
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "anticipate" }}
            >
              a passionate web developer based in Delhi, specializing in responsive website design and custom web development. I create user-friendly, SEO-optimized websites using modern technologies like Next.js, React, PHP, and WordPress.
            </motion.div>

            <motion.div
              className="hero__text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: "anticipate" }}
            >
              Beyond coding, I stay updated with the latest web development trends, SEO best practices, and innovative design techniques to deliver impactful solutions.
            </motion.div>
          </div>
        </div>

        <motion.div
          className="skills"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="skill-heading" variants={item}>
            Technical Skills
          </motion.h2>

          <div className="skill-cards-grid">
            <motion.div className="skill-card" variants={item}>
              <div className="icon">
                {/* HTML SVG icon */}
                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.369 37.814 2 0h37.038L35.67 37.794 20.49 42" fill="#E44D26"></path>
                  <path d="M20.519 38.785V3.104h15.14l-2.89 32.26" fill="#F16529"></path>
                  <path d="M8.88 7.729h11.64v4.634h-6.555l.429 4.748h6.125v4.624H10.147L8.88 7.73Zm1.471 16.334h4.655l.327 3.706 5.186 1.388v4.84l-9.515-2.655" fill="#EBEBEB"></path>
                  <path d="M32.116 7.729H20.5v4.634h11.189l.428-4.634Zm-.847 9.382H20.5v4.634h5.717l-.542 6.024-5.175 1.388v4.819l9.494-2.634" fill="#fff"></path>
                </svg>
              </div>
              <h3>HTML</h3>
            </motion.div>

            <motion.div className="skill-card" variants={item}>
              <div className="icon">
                {/* CSS SVG icon */}
                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.033 0 35.66 37.796 20.494 42 5.37 37.801 2 0h37.033Z" fill="#264DE4"></path>
                  <path d="M32.771 35.389 35.654 3.09H20.517v35.695L32.77 35.39Z" fill="#2965F1"></path>
                  <path d="m9.726 17.11.416 4.637h10.375v-4.636H9.727ZM20.517 7.727H8.89l.422 4.636h11.204V7.727ZM20.517 33.975V29.15l-.02.006-5.164-1.395-.33-3.697h-4.654l.65 7.28 9.496 2.636.022-.006Z" fill="#EBEBEB"></path>
                  <path d="m26.21 21.747-.538 6.013-5.171 1.395v4.824l9.504-2.634.07-.784 1.09-12.205.113-1.245.837-9.384H20.5v4.636h6.533l-.422 4.748H20.5v4.636h5.709Z" fill="#fff"></path>
                </svg>
              </div>
              <h3>CSS</h3>
            </motion.div>

            <motion.div className="skill-card" variants={item}>
              <div className="icon">
                {/* JS SVG icon */}
                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#javascript_svg__a)">
                    <path d="M42 0H0v41.767h42V0Z" fill="#F7DF1E"></path>
                    <path d="M28.213 32.63c.846 1.374 1.947 2.384 3.894 2.384 1.635 0 2.68-.813 2.68-1.936 0-1.346-1.074-1.822-2.874-2.605l-.986-.421c-2.848-1.207-4.74-2.718-4.74-5.914 0-2.944 2.255-5.184 5.78-5.184 2.509 0 4.313.868 5.613 3.142l-3.073 1.962c-.677-1.206-1.407-1.681-2.54-1.681-1.156 0-1.89.729-1.89 1.681 0 1.178.734 1.654 2.428 2.384l.986.42c3.354 1.43 5.247 2.888 5.247 6.166 0 3.533-2.791 5.47-6.54 5.47-3.665 0-6.033-1.738-7.192-4.014l3.207-1.854Zm-13.942.34c.62 1.095 1.184 2.02 2.54 2.02 1.297 0 2.115-.505 2.115-2.467V19.178h3.947v13.398c0 4.064-2.396 5.914-5.894 5.914-3.16 0-4.99-1.626-5.92-3.585l3.212-1.934Z" fill="#000"></path>
                  </g>
                  <defs>
                    <clipPath id="javascript_svg__a"><path fill="#fff" d="M0 0h42v42H0z" /></clipPath>
                  </defs>
                </svg>
              </div>
              <h3>JS</h3>
            </motion.div>

            <motion.div className="skill-card" variants={item}>
              <div className="icon">
                {/* ReactJs SVG icon */}
                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#frontend-frameworks_svg__a)"><path d="M1 7h40M35 1v40M1 35h40M7 1v40" stroke="#01A3FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 23.108A2.101 2.101 0 0 0 23.095 21 2.101 2.101 0 0 0 21 18.893 2.101 2.101 0 0 0 18.905 21c0 1.164.938 2.108 2.095 2.108Z" fill="#01A3FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.15 19.891c-.475.432-.631.808-.631 1.109 0 .301.156.677.631 1.109.475.431 1.205.854 2.171 1.226 1.928.74 4.643 1.214 7.679 1.214 3.036 0 5.75-.473 7.679-1.214.966-.372 1.696-.795 2.17-1.226.476-.432.632-.808.632-1.109 0-.301-.156-.677-.631-1.109-.475-.431-1.205-.855-2.171-1.226-1.928-.74-4.643-1.215-7.679-1.215-3.036 0-5.75.474-7.679 1.215-.966.371-1.696.795-2.17 1.226Zm1.632-2.663c2.14-.822 5.046-1.314 8.218-1.314 3.172 0 6.078.492 8.218 1.314 1.067.41 1.984.917 2.646 1.52C32.527 19.348 33 20.107 33 21c0 .891-.473 1.65-1.136 2.253-.662.602-1.579 1.108-2.646 1.519-2.14.822-5.046 1.314-8.218 1.314-3.172 0-6.078-.492-8.218-1.314-1.067-.41-1.984-.917-2.646-1.52C9.473 22.652 9 21.892 9 21c0-.891.473-1.65 1.136-2.253.662-.602 1.579-1.109 2.646-1.519Z" fill="#00D8FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.036 11.865c-.609-.198-1.012-.147-1.275.006-.263.152-.509.479-.642 1.107-.134.63-.133 1.476.03 2.504.326 2.049 1.275 4.65 2.793 7.294 1.517 2.645 3.282 4.772 4.883 6.081.802.656 1.53 1.08 2.14 1.278.607.198 1.011.147 1.274-.006.262-.152.508-.479.642-1.108.134-.628.133-1.475-.03-2.503-.327-2.049-1.275-4.65-2.793-7.294-1.517-2.645-3.282-4.772-4.883-6.081-.802-.656-1.531-1.08-2.14-1.278Zm3.097.088c1.779 1.455 3.656 3.741 5.242 6.505 1.587 2.765 2.616 5.544 2.979 7.821.18 1.136.202 2.188.015 3.067-.186.88-.604 1.669-1.367 2.112-.764.444-1.653.413-2.503.136-.85-.276-1.745-.822-2.632-1.547-1.779-1.455-3.656-3.741-5.243-6.505-1.586-2.765-2.615-5.544-2.978-7.821-.18-1.136-.203-2.188-.016-3.067.187-.88.604-1.669 1.368-2.112.764-.444 1.652-.413 2.502-.136.85.276 1.745.822 2.633 1.547Z" fill="#00D8FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.881 12.978c-.134-.628-.38-.955-.642-1.107-.263-.153-.667-.204-1.275-.006-.608.198-1.337.622-2.14 1.278-1.6 1.309-3.365 3.436-4.882 6.08-1.518 2.645-2.467 5.246-2.793 7.295-.164 1.027-.164 1.874-.03 2.503.133.63.38.956.642 1.108.263.153.666.204 1.275.006.608-.198 1.337-.622 2.14-1.278 1.6-1.309 3.365-3.436 4.882-6.08 1.518-2.645 2.466-5.247 2.793-7.296.163-1.027.164-1.874.03-2.503Zm1.473 2.743c-.363 2.277-1.392 5.056-2.979 7.82-1.586 2.765-3.463 5.051-5.242 6.506-.887.725-1.783 1.27-2.633 1.547-.85.277-1.738.308-2.502-.136-.763-.443-1.18-1.233-1.368-2.112-.187-.879-.165-1.931.016-3.067.363-2.277 1.392-5.056 2.978-7.82 1.587-2.765 3.464-5.051 5.243-6.506.887-.726 1.782-1.27 2.632-1.547.85-.277 1.739-.308 2.503.135.763.444 1.18 1.234 1.367 2.113.187.879.166 1.931-.015 3.067Z" fill="#00D8FF"></path></g><defs><clipPath id="frontend-frameworks_svg__a"><path fill="#fff" d="M0 0h42v42H0z"></path></clipPath></defs></svg>
              </div>
              <h3>ReactJs</h3>
            </motion.div>

            <motion.div className="skill-card" variants={item}>
              <div className="icon">
                {/* SASS SVG icon */}
                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.417 27.494a7.156 7.156 0 0 0-3.203.76c-.331-.668-.662-1.251-.717-1.688-.063-.507-.139-.816-.063-1.42.076-.606.421-1.464.421-1.534-.007-.058-.076-.372-.786-.38-.711-.006-1.325.147-1.395.332-.069.19-.207.625-.296 1.075-.125.66-1.422 3.003-2.16 4.233-.242-.477-.45-.9-.49-1.237-.063-.507-.139-.816-.063-1.421.076-.605.421-1.464.421-1.533-.007-.059-.076-.372-.786-.38-.711-.007-1.326.147-1.395.331-.069.19-.145.64-.296 1.076-.145.436-1.87 4.345-2.32 5.365-.227.52-.427.936-.572 1.216-.145.28-.007.014-.02.044l-.194.372v.007c-.097.176-.2.344-.249.344-.034 0-.103-.472.014-1.118.255-1.357.877-3.473.87-3.55 0-.03.117-.41-.4-.598-.504-.19-.684.132-.725.132-.042 0-.076.117-.076.117s.559-2.384-1.07-2.384c-1.021 0-2.43 1.132-3.126 2.166-.442.246-1.38.766-2.374 1.322-.38.211-.773.437-1.146.64l-.076-.087c-1.974-2.145-5.625-3.664-5.473-6.547.055-1.047.414-3.811 7.012-7.158 5.404-2.743 9.731-1.99 10.484-.317 1.07 2.391-2.312 6.835-7.93 7.475-2.14.246-3.265-.598-3.548-.914-.296-.331-.338-.344-.448-.281-.18.102-.07.394 0 .57.165.442.855 1.23 2.029 1.624 1.028.344 3.54.535 6.577-.66 3.402-1.344 6.06-5.07 5.28-8.186-.794-3.171-5.956-4.212-10.836-2.447-2.905 1.055-6.053 2.7-8.316 4.859-2.692 2.56-3.12 4.796-2.94 5.724.628 3.312 5.107 5.47 6.901 7.067-.09.044-.172.103-.248.147-.897.45-4.314 2.27-5.17 4.197-.966 2.18.152 3.749.898 3.96 2.305.653 4.665-.52 5.942-2.455 1.27-1.933 1.118-4.444.531-5.59l-.02-.044.704-.422c.455-.274.904-.527 1.297-.745-.22.612-.38 1.336-.462 2.39-.097 1.238.4 2.841 1.056 3.474.29.274.635.281.849.281.759 0 1.104-.64 1.483-1.406.47-.936.884-2.018.884-2.018s-.518 2.932.897 2.932c.518 0 1.035-.682 1.27-1.034v.007s.014-.015.041-.073a2.6 2.6 0 0 0 .083-.132v-.014a56.53 56.53 0 0 0 1.36-2.588c.89-1.786 1.746-4.022 1.746-4.022s.083.548.338 1.449c.152.534.483 1.117.738 1.687-.207.296-.33.465-.33.465l.006.007a19.24 19.24 0 0 1-.545.703c-.704.858-1.546 1.835-1.656 2.117-.132.33-.104.577.151.773.187.146.518.168.87.146a3.871 3.871 0 0 0 1.298-.301 4.641 4.641 0 0 0 1.118-.598c.69-.52 1.11-1.258 1.07-2.243-.021-.542-.194-1.075-.408-1.582.062-.088.124-.183.186-.281 1.09-1.625 1.933-3.411 1.933-3.411s.083.55.338 1.449c.131.457.393.956.628 1.448-1.021.852-1.663 1.836-1.884 2.483-.407 1.195-.09 1.737.51 1.863.27.059.656-.073.946-.196a4.207 4.207 0 0 0 1.194-.626c.69-.52 1.353-1.245 1.319-2.222a4.333 4.333 0 0 0-.297-1.315c.87-.366 1.994-.577 3.423-.401 3.071.366 3.678 2.32 3.561 3.136-.117.816-.759 1.265-.973 1.406-.214.132-.283.183-.262.281.027.148.124.147.31.117.256-.044 1.615-.668 1.67-2.172.083-1.934-1.718-4.044-4.913-4.023v-.015ZM6.73 35.629c-1.014 1.133-2.443 1.562-3.05 1.196-.656-.387-.4-2.054.849-3.256.759-.731 1.746-1.406 2.394-1.821.145-.088.366-.226.629-.387.04-.03.069-.044.069-.044.048-.03.103-.059.158-.102.463 1.715.021 3.22-1.049 4.409v.005Zm7.42-5.14c-.353.879-1.098 3.136-1.546 3.01-.387-.103-.622-1.814-.077-3.502.277-.851.863-1.864 1.208-2.257.56-.633 1.167-.844 1.319-.585.179.338-.684 2.786-.905 3.334Zm6.121 2.982c-.152.073-.29.132-.352.088-.048-.03.062-.132.062-.132s.766-.837 1.07-1.223c.173-.225.38-.485.6-.781v.088c0 1.012-.952 1.685-1.38 1.96Zm4.72-1.097c-.11-.088-.096-.345.277-1.16.145-.324.476-.865 1.049-1.38.069.212.11.416.104.606-.007 1.265-.89 1.737-1.43 1.933Z" fill="#CF649A"></path><path d="M27.27 20.12c.295.036.593.038.888.004l.325.597a.43.43 0 0 0 .539.197l.936-.383a.433.433 0 0 0 .248-.52l-.18-.65a3.76 3.76 0 0 0 .657-.651l.65.194a.424.424 0 0 0 .514-.247l.388-.946a.442.442 0 0 0-.187-.549l-.569-.327a3.94 3.94 0 0 0 .01-.997l.56-.312a.437.437 0 0 0 .19-.545l-.387-.954a.43.43 0 0 0-.515-.257l-.61.168a3.829 3.829 0 0 0-.683-.707l.167-.591a.441.441 0 0 0-.247-.525l-.936-.403a.423.423 0 0 0-.54.185l-.292.529a3.712 3.712 0 0 0-.956-.017l-.287-.527a.43.43 0 0 0-.54-.196l-.933.382a.433.433 0 0 0-.249.52l.157.562c-.27.204-.51.444-.718.714l-.564-.168a.424.424 0 0 0-.514.246l-.388.946a.442.442 0 0 0 .187.55l.512.294c-.046.35-.043.703.007 1.053l-.52.289a.437.437 0 0 0-.19.545l.387.953a.43.43 0 0 0 .515.258l.605-.168c.2.258.433.488.691.685l-.174.612a.442.442 0 0 0 .248.524l.936.403c.2.087.432.008.54-.185l.322-.584Zm-1.124-4.518a1.655 1.655 0 0 1 2.19-.897 1.725 1.725 0 0 1 .904 2.23 1.655 1.655 0 0 1-2.19.898 1.725 1.725 0 0 1-.904-2.23Z" fill="#714EFF"></path><path d="m32.814 7.406-.626.321a.432.432 0 0 0-.203.536l.143.388c-.208.186-.39.401-.54.638l-.41-.084a.424.424 0 0 0-.49.288l-.214.68a.44.44 0 0 0 .23.528l.379.178c-.014.291.012.582.077.865l-.354.238a.435.435 0 0 0-.141.557l.325.64c.1.196.327.287.529.21l.425-.158c.182.197.387.37.611.515l-.086.45a.44.44 0 0 0 .288.5l.67.223c.206.068.43-.029.519-.229l.198-.442c.245.01.489-.01.729-.06l.27.412a.425.425 0 0 0 .55.149l.625-.322a.432.432 0 0 0 .203-.536l-.169-.46c.188-.172.355-.367.495-.58l.481.1a.424.424 0 0 0 .49-.289l.214-.679a.44.44 0 0 0-.23-.529l-.43-.201a3.257 3.257 0 0 0-.06-.82l.386-.26c.18-.122.24-.36.141-.557l-.322-.638a.425.425 0 0 0-.529-.211l-.425.16a3.124 3.124 0 0 0-.608-.532l.083-.434a.44.44 0 0 0-.288-.5l-.67-.222a.422.422 0 0 0-.52.229l-.176.394a3.045 3.045 0 0 0-.786.054l-.235-.358a.422.422 0 0 0-.55-.152Zm2.728 4.083a1.363 1.363 0 0 1-1.733.892 1.417 1.417 0 0 1-.892-1.768 1.363 1.363 0 0 1 1.733-.892 1.417 1.417 0 0 1 .892 1.768Z" fill="#fff"></path><path d="m32.814 7.406-.626.321a.432.432 0 0 0-.203.536l.143.388c-.208.186-.39.401-.54.638l-.41-.084a.424.424 0 0 0-.49.288l-.214.68a.44.44 0 0 0 .23.528l.379.178c-.014.291.012.582.077.865l-.354.238a.435.435 0 0 0-.141.557l.325.64c.1.196.327.287.529.21l.425-.158c.182.197.387.37.611.515l-.086.45a.44.44 0 0 0 .288.5l.67.223c.206.068.43-.029.519-.229l.198-.442c.245.01.489-.01.729-.06l.27.412a.425.425 0 0 0 .55.149l.625-.322a.432.432 0 0 0 .203-.536l-.169-.46c.188-.172.355-.367.495-.58l.481.1a.424.424 0 0 0 .49-.289l.214-.679a.44.44 0 0 0-.23-.529l-.43-.201a3.257 3.257 0 0 0-.06-.82l.386-.26c.18-.122.24-.36.141-.557l-.322-.638a.425.425 0 0 0-.529-.211l-.425.16a3.124 3.124 0 0 0-.608-.532l.083-.434a.44.44 0 0 0-.288-.5l-.67-.222a.422.422 0 0 0-.52.229l-.176.394a3.045 3.045 0 0 0-.786.054l-.235-.358a.422.422 0 0 0-.55-.152Zm2.728 4.083a1.363 1.363 0 0 1-1.733.892 1.417 1.417 0 0 1-.892-1.768 1.363 1.363 0 0 1 1.733-.892 1.417 1.417 0 0 1 .892 1.768Z" fill="#714EFF" fillOpacity="0.5"></path><path d="M33.856 20.106c-.06.205.041.426.236.511l.387.173a.41.41 0 0 0 .526-.173l.155-.273c.194.027.388.03.582.009l.15.284c.102.19.324.275.521.197l.392-.155a.42.42 0 0 0 .247-.501l-.082-.308c.163-.122.309-.262.435-.42l.309.096a.41.41 0 0 0 .501-.234l.166-.392a.427.427 0 0 0-.175-.534l-.265-.157c.033-.216.037-.434.014-.652l.264-.143a.421.421 0 0 0 .189-.527l-.157-.398a.418.418 0 0 0-.496-.256l-.282.074a2.474 2.474 0 0 0-.442-.469l.08-.269a.428.428 0 0 0-.235-.511l-.388-.173a.41.41 0 0 0-.525.173l-.136.238a2.473 2.473 0 0 0-.626-.02l-.126-.238a.416.416 0 0 0-.52-.197l-.392.155a.42.42 0 0 0-.248.501l.066.25a2.437 2.437 0 0 0-.475.461l-.252-.079a.41.41 0 0 0-.502.234l-.166.392a.428.428 0 0 0 .175.535l.227.134c-.032.228-.033.46-.004.689l-.236.126a.421.421 0 0 0-.19.526l.158.402c.08.2.291.31.496.255l.281-.074c.13.169.279.323.447.454l-.084.284Zm.603-2.73a1.083 1.083 0 0 1 1.44-.569c.556.247.813.905.575 1.467a1.082 1.082 0 0 1-1.44.57 1.129 1.129 0 0 1-.575-1.467Z" fill="#fff"></path><path d="M33.856 20.106c-.06.205.041.426.236.511l.387.173a.41.41 0 0 0 .526-.173l.155-.273c.194.027.388.03.582.009l.15.284c.102.19.324.275.521.197l.392-.155a.42.42 0 0 0 .247-.501l-.082-.308c.163-.122.309-.262.435-.42l.309.096a.41.41 0 0 0 .501-.234l.166-.392a.427.427 0 0 0-.175-.534l-.265-.157c.033-.216.037-.434.014-.652l.264-.143a.421.421 0 0 0 .189-.527l-.157-.398a.418.418 0 0 0-.496-.256l-.282.074a2.474 2.474 0 0 0-.442-.469l.08-.269a.428.428 0 0 0-.235-.511l-.388-.173a.41.41 0 0 0-.525.173l-.136.238a2.473 2.473 0 0 0-.626-.02l-.126-.238a.416.416 0 0 0-.52-.197l-.392.155a.42.42 0 0 0-.248.501l.066.25a2.437 2.437 0 0 0-.475.461l-.252-.079a.41.41 0 0 0-.502.234l-.166.392a.428.428 0 0 0 .175.535l.227.134c-.032.228-.033.46-.004.689l-.236.126a.421.421 0 0 0-.19.526l.158.402c.08.2.291.31.496.255l.281-.074c.13.169.279.323.447.454l-.084.284Zm.603-2.73a1.083 1.083 0 0 1 1.44-.569c.556.247.813.905.575 1.467a1.082 1.082 0 0 1-1.44.57 1.129 1.129 0 0 1-.575-1.467Z" fill="#CF649A" fillOpacity="0.5"></path></svg>
              </div>
              <h3>SASS</h3>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="services"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="service-heading" variants={item}>
            Services
          </motion.h2>

          <div className="service-cards-grid">
            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-cursor"></i>
              </div>
              <div className="service-detail">
                <h3>Web Development</h3>
                <p>Creation of user interfaces and user experiences for websites and web applications.</p>
              </div>
            </motion.div>

            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="service-detail">
                <h3>Analytics & SEO</h3>
                <p>Implement tracking & analytics tools to monitor website performance & improve SEO</p>
              </div>
            </motion.div>

            <motion.div className="service-card" variants={item}>
              <div className="icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <div className="service-detail">
                <h3>Web Security</h3>
                <p>Ensuring web applications are secure by addressing common vulnerabilities.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="projects"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="projects-heading" variants={item}>
            Key Projects
          </motion.h2>

          <div
            className="project-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 3fr))",
              gap: "2rem",
            }}
          >
            <motion.div
              className="project-card"
              variants={item}
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
              <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.4%" }}>
                  <Image
                    src="https://cdn.cosmicjs.com/0960a860-6eb9-11f0-9635-17c84764a8f2-www-discipleshipcentre-org-in_.png"
                    alt="Discipleship Centre"
                    width={387}
                    height={258}
                    priority
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>Discipleship Centre</h3>
                <p style={{ color: "rgb(187, 187, 187)", fontSize: "1rem", flexGrow: 1, marginBottom: "1.5rem" }}>
                  Discipleship Centre (DC) is a registered nonprofit organization working toward the sustainable devel...
                </p>
                <a href="work/discipleship-centre" className="btn btn--secondary" style={{ alignSelf: "flex-start", lineHeight: 1.6 }}>
                  View Project
                </a>
              </div>
            </motion.div>

            <motion.div
              className="project-card"
              variants={item}
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
              <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.4%" }}>
                  <Image
                    src="https://cdn.cosmicjs.com/8df5f630-6eb8-11f0-9c1f-63444cd7c64f-sidharth-design_.png"
                    alt="Sidharth Design"
                    width={387}
                    height={258}
                    priority
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>Sidharth Design</h3>
                <p style={{ color: "rgb(187, 187, 187)", fontSize: "1rem", flexGrow: 1, marginBottom: "1.5rem" }}>
                  An independent brand designer on a mission to craft brands that pop! I'm all about teaming up to cre...
                </p>
                <a href="work/sidharth-design" className="btn btn--secondary" style={{ alignSelf: "flex-start", lineHeight: 1.6 }}>
                  View Project
                </a>
              </div>
            </motion.div>

            <motion.div
              className="project-card"
              variants={item}
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
              <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.4%" }}>
                  <Image
                    src="https://cdn.cosmicjs.com/a591f080-6df7-11f0-8a01-b925a63a09d6-mpaa-ac-uk_.png"
                    alt="MPAA Academy"
                    width={387}
                    height={258}
                    priority
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>MPAA Academy</h3>
                <p style={{ color: "rgb(187, 187, 187)", fontSize: "1rem", flexGrow: 1, marginBottom: "1.5rem" }}>
                  MPAA is an independent Higher and Further Education Academy for the Performing Arts.
                </p>
                <a href="work/mpaa-academy" className="btn btn--secondary" style={{ alignSelf: "flex-start", lineHeight: 1.6 }}>
                  View Project
                </a>
              </div>
            </motion.div>
          </div>

          <div className="block" style={{ display: "block", margin: "0 auto", marginBottom: "60px" }}>
            <a href="/work" className="btn btn--primary">
              View More Project
            </a>
          </div>
        </motion.div>

      </div >


    </>
  );
}
