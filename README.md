# Cj's Aero Frutiger Portfolio 🌤️

A modern personal website with a glossy, mid-2000s tech-optimism aesthetic.

## 🚀 Deployment Guide (Two-Project Setup)

Follow these steps exactly to get your site live on Vercel.

### 🗄️ 1. Supabase Setup
1. Create a project on [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** and run:
   ```sql
   create table public.guestbook (
     id bigint generated always as identity primary key,
     name text not null,
     message text not null,
     created_at timestamptz not null default now()
   );
   alter table public.guestbook enable row level security;
   create policy "Allow public reads" on public.guestbook for select using (true);
   create policy "Allow public inserts" on public.guestbook for insert with check (true);
   ```
3. Copy your **Project URL** and **Anon Key** from Settings -> API.

---

### ⚙️ 2. Deploy Backend (The API)
1. Open your terminal in the `backend/` folder.
2. Run `npx vercel`.
3. Follow the prompts (Answer **Y** to setup, use default settings).
4. **Copy the URL** Vercel gives you (e.g., `https://my-api.vercel.app`).
5. In your **Vercel Dashboard** (under Settings -> Environment Variables for the backend), add:
   - `SUPABASE_URL` = (your Supabase URL)
   - `SUPABASE_KEY` = (your Supabase Anon Key)
   - `FRONTEND_URL` = `*`

---

### 🎨 3. Deploy Frontend (The Website)
1. Open `frontend/.env` and change `VITE_API_URL` to your **Backend URL** from Step 2.
2. Open your terminal in the `frontend/` folder.
3. Run `npx vercel`.
4. Follow the prompts.
5. In your **Vercel Dashboard** (under Settings -> Environment Variables for the frontend), add:
   - **Key:** `VITE_API_URL`
   - **Value:** (your Backend URL)
6. **Redeploy** the frontend (from the Deployments tab) so it picks up the environment variable.

---

## 🛠️ Local Development
1. Run `npm install` in both `backend/` and `frontend/`.
2. Terminal 1: `cd backend && npm run start:dev`
3. Terminal 2: `cd frontend && npm run dev`