//@ts-nocheck
import { serverAuth$ } from "@builder.io/qwik-auth";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import type { Provider } from "@auth/core/providers";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
// import { withAccelerate } from '@prisma/extension-accelerate';

// const prismaWithAccelerate = new PrismaClient().$extends(withAccelerate())
export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    // adapter: PrismaAdapter(prismaWithAccelerate()),
    trustHost: true,
    providers: [
      GitHub({
        clientId: env.get("GITHUB_ID")!,
        clientSecret: env.get("GITHUB_SECRET")!,
      }),
      Google({
        clientId: env.get("GOOGLE_ID")!,
        clientSecret: env.get("GOOGLE_SECRET")!,
      })
    ] as Provider[],
  }));
