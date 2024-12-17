import { db, Emails } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Emails).values([
    {email: "shobhitsnagpal@gmail.com", created_at: Date.now()},
    {email: "snagpal@gitam.in", created_at: Date.now()},
  ])
}