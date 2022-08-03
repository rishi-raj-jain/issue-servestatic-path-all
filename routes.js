import { Router } from "@layer0/core/router";

export default new Router().match("/:path*", ({ serveStatic }) => {
  serveStatic("/:path*");
});
