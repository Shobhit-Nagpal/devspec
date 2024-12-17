import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Emails = defineTable({
  columns: {
    email: column.text({ primaryKey: true }),
    created_at: column.date(),
  },
});

export default defineDb({
  tables: { Emails },
});
