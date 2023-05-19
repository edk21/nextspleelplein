import { Inter } from 'next/font/google'
import Head from 'next/head'
import ChildrenList from '@/components/ChildrenList/ChildrenList'

export default function Home({ data }) {
  return (
    <section>
      <Head>
        <title>Speelplein Raccoon</title>
        <meta name="description" content="Speelplein Raccon Application"
      />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py-5 mt-32 mx-32 tablet:w-full tablet:mr-0 tablet:p-2 tablet:ml-0'>
        <ChildrenList data={data} />
      </main>
    </section>
  )
}

export async function getServerSideProps(context) {

  //const response = await fetch('http://localhost:3000/api/children')
  const response = await fetch('https://myspeelplein.netlify.app/api/children')
  
  const data = await response.json()

  return {
    props: {
      data: data
    }
  }
}
