import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  
  dbCredentials: {
    host: env.POSTGRES_HOST as string,
    database: env.POSTGRES_DATABASE as string ,
      user: env.POSTGRES_USER,   
      password: env.POSTGRES_PASSWORD,
      ssl: 'allow',
  },
  tablesFilter: ["ejevent_*"],
} satisfies Config;
