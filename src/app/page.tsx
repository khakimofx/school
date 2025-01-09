import Hero from '@/components/Hero'
import TheAbout from '@/components/TheAbout'
import '../app/globals.css'
import TheData from '@/components/TheData'
import TheSkills from '@/components/TheSkills'

import TheNews from '@/components/TheNews'
import Solutions from '@/components/Solutions'
import OurTeam  from '@/components/OurTeam'
import TheForm from '@/components/TheForm'
import Themap from '@/components/Themap'

export default function Home () {
  return (
    <>
      <Hero/>
      <TheAbout/>
      <TheData/>
      <TheSkills/>
      <TheNews/>
      <Solutions/>
      <OurTeam/>
      <TheForm/>
      <Themap/>
    </>
  )
}
