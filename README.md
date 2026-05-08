<p align="center">
  <img src="public/assets/images/logo.png" width="60" />
</p>

<h1 align="center">PromptWhiz</h1>

<p align="center">
  An open-source library for discovering, creating, and sharing AI prompts.
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/leonardoo210399/PromptWhiz.git?style=flat&color=b9ff3b&labelColor=0e0e0e" alt="license">
  <img src="https://img.shields.io/github/last-commit/leonardoo210399/PromptWhiz.git?style=flat&color=b9ff3b&labelColor=0e0e0e" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/leonardoo210399/PromptWhiz.git?style=flat&color=b9ff3b&labelColor=0e0e0e" alt="top language">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/NextAuth.js-000000?style=flat&logo=next.js&logoColor=white" />
</p>

---

## Overview

PromptWhiz is a full-stack web app where users can discover, publish, and copy AI prompts. Sign in with Google, write a prompt, tag it, and share it with the community. Browse and search the archive by tag or username.

The UI is built with a dark editorial aesthetic — `Syne` display font, `JetBrains Mono` for prompt content, and an acid lime accent palette.

---

## Features

- **Google OAuth** sign-in via NextAuth.js
- **Create, edit, and delete** your own prompts
- **Browse the feed** — all community prompts in a masonry grid
- **Search** by tag or username with debounced filtering
- **Copy to clipboard** any prompt in one click
- **Profile pages** — view your own or any other user's prompts
- **Responsive** — works on mobile and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13 (App Router) |
| Auth | NextAuth.js (Google OAuth) |
| Database | MongoDB + Mongoose |
| Styling | Tailwind CSS + custom CSS variables |
| Fonts | Syne, JetBrains Mono (Google Fonts) |

---

## Project Structure

```
PromptWhiz/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/   # NextAuth handler
│   │   ├── prompt/               # GET all, POST new
│   │   ├── prompt/[id]/          # GET, PATCH, DELETE by id
│   │   └── users/[id]/posts/     # GET prompts by user
│   ├── create-prompt/            # Create page
│   ├── update-prompt/            # Edit page
│   ├── profile/                  # Own profile
│   ├── profile/[id]/             # Other user's profile
│   ├── layout.jsx                # Root layout + Nav
│   └── page.jsx                  # Home feed
├── components/
│   ├── Feed.jsx                  # Search + masonry grid
│   ├── Form.jsx                  # Shared create/edit form
│   ├── Nav.jsx                   # Navigation bar
│   ├── Profile.jsx               # Profile layout
│   ├── PromptCard.jsx            # Individual prompt card
│   └── Provider.jsx              # NextAuth session provider
├── models/
│   ├── prompt.js                 # Prompt schema
│   └── user.js                   # User schema
├── styles/
│   └── globals.css               # Design tokens + component styles
└── utils/
    └── database.js               # MongoDB connection
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- A Google OAuth app ([Google Cloud Console](https://console.cloud.google.com/))

### Installation

```sh
git clone https://github.com/leonardoo210399/PromptWhiz.git
cd PromptWhiz
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### Run

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Roadmap

- [ ] Like / bookmark prompts
- [ ] Comments on prompts
- [ ] Prompt version history
- [ ] Collections / folders
- [ ] More OAuth providers (GitHub, Discord)

---

## Contributing

Fork the repo, create a branch, and open a pull request. All contributions welcome.

---

## License

MIT — see [LICENSE](LICENSE) for details.
