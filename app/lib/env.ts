import z from "zod";
import tryParseEnv from "./try-parse-env";

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // Add environment variables here (e.g., API_BASE_URL, etc.)
});

export type Env = z.infer<typeof EnvSchema>;

/**
 * Validate environment variables at build-time or startup.
 */
export function validateEnv() {
  tryParseEnv(EnvSchema);
}

// Default export for direct access (server-side/build-time)
// eslint-disable-next-line node/no-process-env
export const env = EnvSchema.parse(process.env);
export default env;
