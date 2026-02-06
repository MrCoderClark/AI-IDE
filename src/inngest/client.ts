import { Inngest } from "inngest";
import { sentryMiddleware } from "@inngest/middleware-sentry";

export const inngest = new Inngest({
  id: "prometheus",
  middleware: [sentryMiddleware()],
});
