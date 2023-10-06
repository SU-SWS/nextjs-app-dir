import Image from 'next/image'

interface Props {
  params: {
    slug: string[]
  }
}
export default function Home({ params }:Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>{params.slug.join('/')}</h1>
        <p>This is a test of the app dir on Netlify.</p>
      </div>
    </main>
  )
}
