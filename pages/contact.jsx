import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

export default function Contact() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [formattedDateTime, setFormattedDateTime] = useState("");

  const capitalizeWords = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Dwarka,Delhi&units=metric&appid=dfc884ab11e96f832d54aa9a6136c037"
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();

      setCity(data.name);
      setCountry(data.sys.country);
      setWeather(data.weather[0].description);
      setTemp(Math.round(data.main.temp));

      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const localTime = new Date(utcTime + data.timezone * 1000);

      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const dateFormatter = new Intl.DateTimeFormat("de-DE", options);
      const parts = dateFormatter.formatToParts(localTime);

      let formattedDate = "";
      let formattedTime = "";
      for (const part of parts) {
        if (["day", "month", "year"].includes(part.type)) {
          formattedDate += part.value;
          if (part.type === "day" || part.type === "month")
            formattedDate += ".";
        } else if (part.type === "hour" || part.type === "minute") {
          if (formattedTime !== "") formattedTime += ":";
          formattedTime += part.value;
        }
      }

      setFormattedDateTime(`${formattedDate} - ${formattedTime}`);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Contact | Dilip Kumar </title>
        <meta
          name="description"
          content="Get in touch with Dilip Kumar for collaboration or inquiries about web development and digital solutions."
        />
        <meta
          name="keywords"
          content="Dilip Kumar , contact, web developer, collaboration, inquiries"
        />
        <meta name="author" content="Dilip Kumar Maurya" />
        <meta name="publisher" content="Dilip Kumar Maurya" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dilipmaurya.in/contact" />
        <meta property="og:title" content="Contact | Dilip Kumar" />
        <meta
          property="og:description"
          content="Get in touch with Dilip Kumar for collaboration or inquiries about web development and digital solutions."
        />
        <meta
          property="og:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dilipmaurya.in/contact" />
        <meta name="twitter:title" content="Contact | Dilip Kumar" />
        <meta
          name="twitter:description"
          content="Get in touch with Dilip Kumar for collaboration or inquiries about web development and digital solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.dilipmaurya.in/og-image.jpg"
        />
        <link rel="canonical" href="https://www.dilipmaurya.in/contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-scroll-section>
        <div className="container container__padding-block">
          <div className="contact">
            <motion.header
              className="contact__header"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "anticipate" }}
            >
              <h1 className="contact__header-heading">Get in Touch</h1>
              <h2 className="contact__header-text">
                Reach out for collaborations, questions, or just to say hi. I’m
                always open to connect!
              </h2>
            </motion.header>
            <div className="contact__content">
              <ContactForm />
              <motion.div
                className="contact__content-info"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "anticipate" }}
              >
                <div className="contact__content-info__data">
                  <h3 className="body-s">Location</h3>
                  <div>
                    <p>
                      {city}, {country}
                    </p>
                    <p>{formattedDateTime}</p>
                    <p>
                      {temp}°C - {capitalizeWords(weather)}
                    </p>
                  </div>
                </div>

                <div className="contact__content-info__data">
                  <h3 className="body-s">Get in Touch</h3>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/curiousdilip/"
                      target="_blank"
                      rel="me noopener noreferrer"
                      title="Linkedin"
                    >
                      LinkedIn
                    </Link>{" "}
                    <Link
                      href="https://www.x.com/curiousdilip/"
                      target="_blank"
                      rel="me noopener noreferrer"
                      title="Twitter"
                    >
                      Twitter
                    </Link>{" "}
                    <Link
                      href="https://github.com/curiousdilip"
                      target="_blank"
                      rel="me noopener noreferrer"
                      title="Github"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://codepen.io/curiousdilip"
                      target="_blank"
                      rel="me noopener noreferrer"
                      title="Codepen"
                    >
                      Codepen
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
