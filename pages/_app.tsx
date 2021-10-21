import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from "react";
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />
}

export default App
