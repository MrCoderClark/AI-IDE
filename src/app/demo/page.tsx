"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

import * as Sentry from "@sentry/nextjs"
import { useAuth } from "@clerk/nextjs";

export default function DemoPage() {
  const { userId } = useAuth();

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleBlocking = async () => {
    setLoading2(true);
    await fetch("/api/demo/blocking", { method: "POST" });
    setLoading2(false);
  };

  const handleBackground = async () => {
    setLoading(true);
    await fetch("/api/demo/background", { method: "POST" });
    setLoading(false);
  };

  // 1) Client error - throws in the browser
  const handleClientError = () => {
    Sentry.logger.info("User attempting to click on client function", { userId });
    throw new Error("Client error: Something went wrong in the browser!")
  }
  // 2) API error - triggers server-side error
  const handleCApiError = async () => {
    await fetch("/api/demo/error", { method: "POST" })
  }

  // 3) Inngest error - triggers error in background job
  const handleInngestError = async () => {
    await fetch("/api/demo/inngest-error", { method: "POST" })
  }


  return (
    <div className="p-8 space-x-4">
      <Button onClick={handleBlocking}>
        {loading ? "Loading..." : "Blocking"}
      </Button>

      <Button onClick={handleBackground}>
        {loading2 ? "Loading..." : "Background"}
      </Button>

      <Button variant={"destructive"} onClick={handleClientError}>
        Client Error
      </Button>

      <Button variant={"destructive"} onClick={handleCApiError}>
        API Error
      </Button>

      <Button variant={"destructive"} onClick={handleInngestError}>
        Inngest Error
      </Button>
    </div>
  );
}
