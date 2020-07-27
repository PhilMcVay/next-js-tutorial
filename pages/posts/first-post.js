import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

const FirstPost = () => (
  <Layout>
    <Head>
      <title>Next Demo | First Post</title>
    </Head>

    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </h2>
  </Layout>
);

export default FirstPost;
