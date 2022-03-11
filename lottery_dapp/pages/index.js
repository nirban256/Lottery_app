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

        <section className='flex flex-col justify-center align-middle text-center text-white'>
          <h1 className='text-5xl font-bold p-3'>
            Play and win Ethers
          </h1>
          <p className='text-4xl font-bold p-3'>
            Prize Pot: 0 Ether
          </p>
        </section>

        <section className='flex justify-between align-middle text-white p-5'>
          <div className='text-center bg-sky-500 p-2 rounded-md'>
            <p className='text-xl'>
              Admin: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
            </p>
            <button className='p-2 outline-none border-0 text-white font-bold bg-sky-400 rounded-md mr-2 mt-2'>
              Pick Winner
            </button>
          </div>
          <div className='text-center bg-sky-500 p-2 rounded-md'>
            <p className='text-xl'>
              Paricipants:-
            </p>
            <ul>
              <li className='text-xl'>
                <a href="https://etherscan.io/address/0x55Bbf49dc52d5f7e501a652568F58d67389E6B44" target="_blank" className='underline'>
                  0x55Bbf49dc52d5f7e501a652568F58d67389E6B44
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className='flex justify-between mt-6 p-7'>
          <div className='bg-sky-500 p-7 text-center rounded-md'>
            <h1 className='text-3xl text-white font-bold'>Winner will get the total amount</h1>
            <p className='text-white text-xl font-medium'>
              Admin Only: <input type="number" name="index" id="index" placeholder='Enter the account index to pay' className='p-1 mt-3 rounded border-0 text-black' />
            </p>
            <button className='outline-none border-0 text-white text-xl font-bold bg-sky-400 rounded-md ml-1 mt-4 pt-1 pb-1 pl-5 pr-5'>
              Pay
            </button>
          </div>

          <div className='flex flex-col justify-center bg-sky-500 text-white align-top font-bold text-xl text-center rounded-lg pl-5 pr-5'>
            <p className='pb-5'>
              Pay 0.01 ether to start playing
            </p>
            <p>
              Minimum three players required
            </p>
          </div>
        </section>
      </main>

      <footer className='flex justify-center align-middle text-white font-bold text-2xl'>
        <p>&copy; 2022 Nirban Chakraborty</p>
      </footer>
    </div>
  )
}
