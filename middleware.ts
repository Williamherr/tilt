import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // An array of public routes that don't require authentication.
  publicRoutes: ["/", "/api/webhook/clerk"],
  ignoredRoutes: ["/api/webhook/clerk"],
  //debug: true,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
