import { createAuthClient } from "better-auth/vue";
import { env } from "./env";

export const authClient = createAuthClient({
  // En dev, on utilise le port dynamique si côté client, sinon l'URL de base définie
  baseURL: typeof window !== "undefined" ? window.location.origin : (env.BETTER_AUTH_URL || "http://localhost:3001"),
});

export const { signIn, signUp, signOut, useSession } = authClient;
