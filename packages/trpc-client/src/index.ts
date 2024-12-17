import { createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import { cookies } from 'next/headers'
import { AppRouter } from '@repo/trpc-server/routers';
export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: process.env.NEXT_PUBLIC_API_URL + '/trpc',
        async headers() {
          const getCookies = cookies()
          const token = (await getCookies).get('next-auth.session-token')?.value || ''
  
          return {
            authorization: `Bearer ${token}`,
          }
        },
      }),
    ],
  })
  