import React from "react"
import { QueryClient, QueryClientProvider } from "react-query";
import Example2 from './Example2'

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example2/>
        </QueryClientProvider>
    );
}
