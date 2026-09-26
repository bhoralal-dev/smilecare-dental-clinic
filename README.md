# SmileCare Dental Clinic

A Next.js portfolio clinic site with a responsive public booking experience and protected admin API/dashboard.

## Setup

1. Copy `.env.example` to `.env` and supply `DATABASE_URL`, a long `JWT_SECRET`, and seed credentials.
2. Run `npm exec prisma migrate dev --name init`.
3. Run `npm exec tsx prisma/seed.ts` to create the admin from environment variables.
4. Start with `npm run dev`.

Notification variables (`SMTP_URL`, `EMAIL_FROM`, `WHATSAPP_API_URL`, `WHATSAPP_API_TOKEN`) are placeholders only. Appointments still work without them; connect a provider later inside the appointment creation flow.

The dentist photo is intentionally a UI placeholder in `app/page.tsx`; replace it with a supplied image using Next `Image` when one is available.
