import Container from '@/components/Container/Container'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import '@/styles/globals.css'


export default function App({ Component, pageProps }) {

  return (
    <Container>

      <Component {...pageProps} />

    </Container>
  )
}
