import '../styles/globals.css'
import ContextProvider from '../src/components/ContextProvider'

const  MyApp = ({ Component, pageProps }) =>
  <ContextProvider><Component {...pageProps} /></ContextProvider>

export default MyApp
