import '@/styles/globals.scss'
import DefaultLayout from '@/component'


export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
  return <>{getLayout(<Component {...pageProps} />)}</>
}
