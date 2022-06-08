import { NextPage } from 'next'
import React, { Fragment } from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutSectionOne from '../components/About/AboutSectionOne'

const About:NextPage = () => {
  return (
    <Fragment>
        <AboutHero />
        <AboutSectionOne />
    </Fragment>
  )
}

export default About