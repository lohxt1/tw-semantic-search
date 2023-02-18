import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { Inter } from "@next/font/google";
import * as Fathom from "fathom-client";
import { SessionProvider } from "next-auth/react";
import { SessionProviderProps } from "next-auth/react";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

interface CustomAppProps extends AppProps {
  pageProps: SessionProviderProps;
}

const App = ({ Component, pageProps }: CustomAppProps) => {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("XHWSZGQP", {
      includedDomains: ["twitsema.vercel.app"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

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
