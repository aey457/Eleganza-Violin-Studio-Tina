import '@/styles/globals.scss'
import DefaultLayout from '@/component/default-layout'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
  return <>{getLayout(<Component {...pageProps} />)}</>
}
