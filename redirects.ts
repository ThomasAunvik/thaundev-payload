import type { Redirect } from "next/dist/lib/load-custom-routes";

const redirects = async () => {
  const internetExplorerRedirect: Redirect = {
    destination: "/ie-incompatible.html",
    has: [
      {
        type: "header",
        key: "user-agent",
        value: "(.*Trident.*)", // all ie browsers
      },
    ],
    permanent: false,
    source: "/:path((?!ie-incompatible.html$).*)", // all pages except the incompatibility page
  };

  const redirects: Redirect[] = [internetExplorerRedirect];

  return redirects;
};

export default redirects;
