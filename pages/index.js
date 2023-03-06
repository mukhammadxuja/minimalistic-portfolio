import Head from 'next/head';

import { Header, Projects, About, Contact, Tools } from 'components';

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <Head>
        <title>Anvaroov - Frontend Developer.</title>
        <meta name="description" content="Anvaroov - Frontend Developer." />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <Header />
      <Projects />
      <About />
      <Tools />
      <Contact />
    </div>
  );
}
