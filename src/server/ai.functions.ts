import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  studentName: z.string().trim().min(1).max(80),
  bullets: z.string().trim().min(5).max(2000),
});

export const generateReportCard = createServerFn({ method: "POST" })
  .inputValidator((input) => inputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { summary: "", error: "AI is not configured. Please enable Lovable AI." };
    }

    const systemPrompt =
      "You are a warm, encouraging school teacher writing a one-paragraph report card summary. " +
      "Tone: professional, kind, balanced — celebrate strengths, gently note growth areas, end with an encouraging line. " +
      "Length: exactly one paragraph, 4–6 sentences, ~80–120 words. No bullet points, no headings, no lists.";

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `Student: ${data.studentName}\n\nTeacher notes (bullet points):\n${data.bullets}\n\nWrite the one-paragraph report card summary now.`,
            },
          ],
        }),
      });

      if (res.status === 429) {
        return { summary: "", error: "Too many requests. Please try again in a moment." };
      }
      if (res.status === 402) {
        return { summary: "", error: "AI credits exhausted. Add funds in Settings → Workspace → Usage." };
      }
      if (!res.ok) {
        const text = await res.text();
        console.error("AI gateway error:", res.status, text);
        return { summary: "", error: "AI service unavailable. Please try again." };
      }

      const json = await res.json();
      const summary: string = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!summary) return { summary: "", error: "Empty response from AI." };
      return { summary, error: null as string | null };
    } catch (err) {
      console.error("generateReportCard failed:", err);
      return { summary: "", error: "Network error. Please try again." };
    }
  });
