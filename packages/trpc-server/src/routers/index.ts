import { inferRouterOutputs } from "@trpc/server";
import { authRoutes } from "./auth";
import {  router } from "../trpc";


export const appRouter = router({
   auth: authRoutes
})

export type AppRouter = typeof appRouter;
export type AppRouterType = inferRouterOutputs<AppRouter>

