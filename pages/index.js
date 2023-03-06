import Head from 'next/head';
import { motion } from 'framer-motion';

import { Header, Projects, About, Contact, Tools } from 'components';

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <Head>
        <title>Anvaroov - Frontend Developer.</title>
        <meta name="description" content="Anvaroov - Frontend Developer." />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
      >
        <Header />
        <Projects />
        <About />
        <Tools />
        <Contact />
      </motion.div>
    </div>
  );
}
