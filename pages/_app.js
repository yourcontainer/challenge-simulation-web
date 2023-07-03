import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";

const ClientOnly = ({children}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [])

  return mounted ? children : null;
}

function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider>
      <ClientOnly>
        <Component {...pageProps} />
      </ClientOnly>
    </NativeBaseProvider>
  );
}

export default MyApp;
