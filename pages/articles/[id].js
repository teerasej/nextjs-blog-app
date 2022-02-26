import { getFileData, getFileIds } from "../../lib/post-md";
import Layout from '../../components/layouts'
import Head from "next/head";

const postsDir = 'articles';

export async function getStaticPaths() {
    const paths = (await getFileIds(postsDir)).map((id) => ({ params: { id }}))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    return {
        props: {
            postData: await getFileData(postsDir, params.id)
        }
    }
}

export default function Article({postData}) {
    const html = `
    <h1>${ postData.title }</h1>
    <p class="time"><time datetime="${ postData.dateYMD }">${ postData.dateFriendly }</time></p>
    <p class="words">${ postData.wordcount }</p>
    ${ postData.html }
  `;

  return (
    <Layout hero="phone.jpg">
      <Head>
        <title>{ postData.title }</title>
        <meta name="description" content={ postData.description } />
      </Head>

      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}