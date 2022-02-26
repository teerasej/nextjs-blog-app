import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layouts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js starter site</title>
      </Head>

      <h1>Next.js starter site</h1>
      <p>This is a demonstration blog using <a href="https://nextjs.org/">Next.js</a>.</p>
      <p>Find out more <Link href="/about"><a>about us...</a></Link></p>
    </Layout>
  )
}
