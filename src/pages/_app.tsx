import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import { client } from "../services/queryClient";
import { MenuContextProvider } from "../context/MenuContext";

import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <MenuContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </MenuContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
