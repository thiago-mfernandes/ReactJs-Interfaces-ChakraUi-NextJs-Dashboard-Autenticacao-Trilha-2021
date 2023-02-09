import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { SidebarDrawerProvider } from '@/contexts/SidebarDrawerContext'
import { makeServer } from '@/services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient();

if(process.env.NODE_ENV === "development") {
  //inicializador do Mirage
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
