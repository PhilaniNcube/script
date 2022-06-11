import '../styles/globals.css'
import {Fragment} from 'react'
import type { AppProps } from 'next/app'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <Fragment>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Fragment>
          )
}

export default MyApp
