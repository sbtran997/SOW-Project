import { pgTable, text, timestamp, uuid, jsonb } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  role: text("role").notNull().default("USER"),
});

export const sows = pgTable("sow", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: jsonb("content").notNull(),
  status: text("status").notNull().default("DRAFT"),
  ownerId: uuid("owner_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const templates = pgTable("template", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  content: jsonb("content").notNull(),
  ownerId: uuid("owner_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
