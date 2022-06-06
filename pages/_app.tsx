import '../styles/globals.css'
import {Fragment} from 'react'
import type { AppProps } from 'next/app'
import Navbar from '../components/Layout/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <Fragment>
            <Navbar />
            <Component {...pageProps} />
          </Fragment>
          )
}

export default MyApp
