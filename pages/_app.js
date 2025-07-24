import '../src/styles/globals.css';
import Head from 'next/head';
import Layout from '../src/components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ProCogia AI Agent Hub</title>
        <meta name="description" content="Access ProCogia's suite of AI agents for enterprise solutions" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
