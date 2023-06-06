import Navbar from '@/components/navbar/Navbar';
import { getSession } from 'next-auth/react';

export default function Home() {
  return (
    <main
      className=""
    >
      <div>
        <Navbar />
      </div>
      <div className=''>
        <p className='text-center font-bold text-2xl'>Home Page</p>
      </div>
    </main>
  )
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({req});

  if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: session
  }
}
