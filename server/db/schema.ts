
import { desc, sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  time,
  text,
  varchar,
  integer,
  pgEnum,
  PgVarcharBuilder
  
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ejevent_${name}`);

export const decorations = createTable("decorations", {
   id: serial("id").primaryKey(),
   name: text("name").notNull(),
   description: varchar("description", {length: 255}).notNull(),
   type: varchar("type", {length: 255}).notNull(),
   price: integer("price").default(0),
   image: text("image").notNull(),
   created_at: timestamp("created_at").defaultNow(),
   updated_at: timestamp("updated_at").defaultNow(),
   })
   
   /* 
export const services = createTable("services", {
   id: serial("id").primaryKey(),
   name: text("name").notNull(),
   description: varchar("description", {length: 255}).notNull(),
   price: integer("price").default(0),
   image: text("image").notNull(),
   created_at: timestamp("created_at").defaultNow(),
   updated_at: timestamp("updated_at").defaultNow(),

}) */
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


