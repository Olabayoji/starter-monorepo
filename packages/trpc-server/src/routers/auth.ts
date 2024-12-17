import { prisma } from '@repo/db'
import {publicProcedure, router} from '../trpc'

export const authRoutes = router({
    users: publicProcedure.query(() => prisma.user.findMany())
})