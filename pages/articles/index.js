import { getAllFiles } from '../../lib/post-md';
import Layout from '../../components/layouts'
import Head from 'next/head';
import Pagelink from '../../components/pagelink'

const postsDir = 'articles';

// fetch array of all article posts
export async function getStaticProps() {
    return {
        props: {
            postData: await getAllFiles(postsDir),
        },
    };
}

export default function ArticleIndex({ postData }) {
    return (
        <Layout hero='phone.jpg'>
            <Head>
                <title>Article index</title>
                <meta name="description" content="a list of published articles" />
            </Head>

            <h1>Article Index</h1>

            <aside className='pagelist'>
                {
                    postData.map(post => (<Pagelink
                        key={post.id}
                        postdir={postsDir}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        dateymd={post.dateYMD}
                        datefriendly={post.dateFriendly}
                    />))
                }
            </aside>
        </Layout>
    )
}