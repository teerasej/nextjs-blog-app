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
