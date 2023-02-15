import { AppProps } from "next/app";
import Script from "next/script";
import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { SessionProviderProps } from "next-auth/react";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

interface CustomAppProps extends AppProps {
  pageProps: SessionProviderProps;
}

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" />
      {/* <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script> */}
      <SessionProvider session={pageProps?.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default App;
