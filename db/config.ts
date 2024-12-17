import { column, defineDb, defineTable, NOW } from "astro:db";

// https://astro.build/db/config

const Emails = defineTable({
  columns: {
    email: column.text({ primaryKey: true, optional: false }),
    created_at: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { Emails },
});
