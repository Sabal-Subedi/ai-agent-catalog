# ArkLab AI Agent Catalog 🧠

A production-ready web application to browse and filter a catalog of AI agents. Built with Next.js, TypeScript, Redux, Shadcn UI, and Framer Motion.

---

## 🚀 Features

- 🔍 Search and Filter AI Agents by name, status, category, and pricing model
- ⚙️ Redux state management
- ⚡ Server-side rendering with Next.js App Router
- 💄 Shadcn UI for styling and layout
- ✨ Smooth animations with Framer Motion
- 🧩 Bonus: Google OAuth login with NextAuth.js (optional)
- 📱 Fully responsive UI
- 🔎 SEO-optimized with dynamic metadata

---

## 🧱 Tech Stack

- **Next.js 14+ (App Router)**
- **TypeScript**
- **Redux Toolkit**
- **Shadcn UI**
- **Framer Motion**
- **Tailwind CSS**
- **NextAuth.js** (Optional for OAuth)

---

## 📦 Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/YOUR_USERNAME/ai-agent-catalog.git
cd ai-agent-catalog
```

### 2. Setup Environment Variables
Create `.env.local` from the example file:
```bash
cp .env.local.example .env.local
```
> Fill in Google OAuth keys if using login feature.

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Dev Server
```bash
npm run dev
```
App will be available at `http://localhost:3000`.

---

## 🧪 Available Scripts

- `npm run dev` – Run development server
- `npm run build` – Build app for production
- `npm run start` – Start production server
- `npm run lint` – Run linter

---

## 🌐 Deploying to Vercel

1. Push code to GitHub
2. Visit [https://vercel.com/import](https://vercel.com/import)
3. Connect GitHub repo
4. Configure environment variables
5. Click **Deploy**

---

## 🔐 Google OAuth Integration (Optional)

This feature uses `next-auth` to allow users to log in via Google.

### Setup:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create credentials for OAuth Client
3. Set redirect URL: `http://localhost:3000/api/auth/callback/google`
4. Copy credentials to `.env.local`:

```
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

### Enable in `app/layout.tsx`
```tsx
<SessionProvider>
  <YourApp />
</SessionProvider>
```

### Add routes in `pages/api/auth/[...nextauth].ts`
```ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
```

---

## 📂 Folder Structure
```
/ai-agent-catalog
├── /app
│   └── /catalog/page.tsx       # SSR page
├── /redux
│   ├── store.ts
│   ├── hooks.ts
│   └── agentSlice.ts
├── /components/ui              # Shadcn UI components
├── /public/data/mock-agents.json
├── /pages/api/auth/[...nextauth].ts  # OAuth route (optional)
├── .env.local.example
├── README.md
└── package.json
```

---

## 🧠 Author
Made with ❤️ by Sabal Subedi for the ArkLab AI Frontend Internship Challenge.

---
