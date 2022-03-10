import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lottery D-app</title>
        <meta name="description" content="Lottery app created using NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className='flex justify-between align-middle bg-sky-500 p-3'>
          <h1 className='text-2xl font-bold text-white inline-block'>
            Lottery D-app
          </h1>
          <button className='p-2 outline-none border-0 text-white font-bold bg-sky-400 rounded-md'>
            Connect Wallet
          </button>
        </nav>
      </main>

      <footer className='flex justify-center align-middle text-white'>
        <p>&copy; 2022 Nirban Chakraborty</p>
      </footer>
    </div>
  )
}
