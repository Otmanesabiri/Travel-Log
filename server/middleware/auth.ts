import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  // 1. Définir les zones sécurisées de l'application
  const isProtectedRoute = event.path.startsWith("/profile") || event.path.startsWith("/dashboard");

  // 2. Récupération de la session via Better Auth en passant les en-têtes
  const session = await auth.api.getSession({
    headers: event.headers,
  });

  // 3. Redirection si l'utilisateur tente d'accéder à une zone protégée sans être connecté
  if (isProtectedRoute && !session) {
    return sendRedirect(event, "/");
  }

  // 4. Enrichissement du contexte pour les futures requêtes API
  if (session && session.user) {
    event.context.user = session.user;
  }
});
