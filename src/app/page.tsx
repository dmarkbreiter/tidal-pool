import Image from 'next/image'
import Card from 'components/Card'
import Section from 'components/Section'
import Sections from 'components/Sections'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-6 dark:bg-gray-900">
      <Sections />
    </main>
  )
}
