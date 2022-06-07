import type { NextPage } from 'next'
import {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | Script</title>
      </Head>
      <Hero />
      <SectionOne />
    </Fragment>
  )
}

export default Home
