import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ token, req }) => {
      return true;
    },
  },
});

export const config = {
  matcher: ["/admin"],
};
