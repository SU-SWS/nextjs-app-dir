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
        <h1>NOT FOUND: 404</h1>
        <p>This a Netlify 404 Page.</p>
      </div>
    </main>
  )
}
