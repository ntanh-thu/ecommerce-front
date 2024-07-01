import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import { SessionProvider } from "next-auth/react";

import "../styles/main.css";

const GlobalStyles = createGlobalStyle`
body{
  background-color: #f0f0f0;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}`;

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </SessionProvider>
  );
}
