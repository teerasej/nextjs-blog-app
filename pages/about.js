import Head from "next/head";
import Layout from "../components/layouts";

export default function Home() {
    return (
        <Layout hero="keyboard.jpg">
            <Head>
                <title>About us</title>
            </Head>

            <h1>About us</h1>
            <p>Some info</p>
        </Layout>
    )
}