
import { sql } from "drizzle-orm";
import {
   integer,
   pgTableCreator,
   serial,
   text,
   timestamp,
   varchar,
   jsonb
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ejevent_${name}`);

export const decorations = createTable("decorations", {
   id: serial("id").primaryKey(),
   name: text("name").notNull().unique(),
   description: varchar("description", {length: 255}).notNull(),
   type: varchar("type", {length: 255}).notNull(),
   price: integer("price").default(0),
   image: text("image").notNull(),
   created_at: timestamp("created_at").defaultNow(),
   updated_at: timestamp("updated_at").defaultNow(),
   slug: varchar("slug", {length: 255}).notNull(),
   status: varchar("status", {length: 255}).default('available'),
   images: varchar('images', {length: 255})
   .array()
   .default(sql`'{}'::text[]`),
   })

export const decorations2 = createTable("decorations_2", {
   id: serial("id").primaryKey(),
   name: jsonb("name").notNull().$type<{[key:string]:string}>(),
   description: jsonb("description", ).notNull().$type<{[key:string]:string}>(),
   type: varchar("type", {length: 50}).notNull(),
   price: integer("price").default(0),
   image: text("image").notNull(),
   created_at: timestamp("created_at").defaultNow(),
   updated_at: timestamp("updated_at").defaultNow(),
   slug: varchar("slug", {length: 255}).notNull(),
   status: varchar("status", {length: 255}).default('available'),
   images: varchar('images', {length: 255})
   .array()
   .default(sql`'{}'::text[]`),
   })


export const bookings = createTable("bookings", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id").default(''),
    user_name: text("user_name").notNull(),
    user_email: text("user_email").notNull(),
    user_contact: text("user_contact"),
    item_id: integer("item_id").notNull(),
    item_name: varchar("item_name").notNull(),
    item_image: varchar("item_image").notNull(),
// decoration_id: integer("decoration_id").notNull(),
start_at: timestamp("start_at").defaultNow(),
end_at: timestamp("end_at").defaultNow(),
      status: varchar('status').notNull(),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
})
