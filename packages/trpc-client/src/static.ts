import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '@repo/trpc-server/routers'

export const trpcStatic = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NEXT_PUBLIC_API_URL + '/trpc',
    }),
  ],
})