import React from "react";
import "../styles/index.css";  // applied everywhere in the Next.js application scope

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
