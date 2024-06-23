import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: env.POSTGRES_HOST,
    database: env.POSTGRES_DATABASE,
      user: env.POSTGRES_USER,   
      password: env.POSTGRES_PASSWORD,
      url: env.POSTGRES_URL,

  },
  tablesFilter: ["ejevent_*"],
} satisfies Config;
