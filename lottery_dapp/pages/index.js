import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lottery D-app</title>
        <meta name="description" content="Lottery app created using NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
      </main>

      <footer>

      </footer>
    </div>
  )
}
