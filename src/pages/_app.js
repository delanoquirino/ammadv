import Global from "@/styles/global";


export default function App({ Component, pageProps }) {
  return <>
  <Global/>
  <Component {...pageProps} />
  </> 
  
}
