// import { AboutUs } from '@/components/about-us/about-us'
import Featureblock from '@/components/featureblock/featureblock'
import Imageblock from '@/components/imageblock/imageblock'
import Solutionblock from '@/components/solutionblock/solutionblock'
import Top from '@/components/top/top'
import { Feather } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Top />
      <Imageblock />
      <Featureblock />
      <Solutionblock />
      {/* <AboutUs /> */}
    </>
  )
}
