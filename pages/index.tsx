import type { NextPage } from 'next'
import React from "react";
import App from "../components/App"
import dynamic from 'next/dynamic'
import { QueryClient, QueryClientProvider } from "react-query";

// const DynamicComponentWithNoSSR = dynamic(
//     () => import('../components/App'),
//     { ssr: false }
// )
const queryClient = new QueryClient();
const Home: NextPage = () => {
  return (
      <QueryClientProvider client={queryClient}>
      <>
        testtests
      {typeof window !== "undefined" && <App username={"shkyung"}/>}
        </>
      </QueryClientProvider>
  )
}

export default Home
