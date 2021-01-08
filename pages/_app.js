import '../styles/globals.css'
import OutputSectionProvider from '../src/components/OutputSectionProvider'

function MyApp({ Component, pageProps }) {
  return (
    <OutputSectionProvider><Component {...pageProps} /></OutputSectionProvider>
  )
}

export default MyApp
