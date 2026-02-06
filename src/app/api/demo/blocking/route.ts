// import { google } from "@ai-sdk/google";
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST() {
  const response = await generateText({
    // model: google("gemini-2.5-flash"),
    model: anthropic("claude-3-haiku-20240307"),
    prompt: "Write a vegetarian lasagna recipe for 4 people",
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    },
  });

  return NextResponse.json({ response });
}
