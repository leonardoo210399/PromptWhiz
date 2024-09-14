
<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">PROMPTWHIZ.GIT</h1>
</p>
<p align="center">
    <em><code>❯ Empower your creativity with prompts.</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/leonardoo210399/PromptWhiz.git?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/leonardoo210399/PromptWhiz.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leonardoo210399/PromptWhiz.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leonardoo210399/PromptWhiz.git?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/NextAuth-000000.svg?style=flat&logo=next.js&logoColor=white" alt="NextAuth">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🔐 Authentication](#-authentication)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
    - [🧪 Tests](#-tests)
- [📌 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

PromptWhiz is a platform designed to help users create, share, and explore creative prompts. Whether you're a writer, artist, or developer, PromptWhiz can spark inspiration and facilitate collaboration. With user authentication, prompt creation, and profile management, PromptWhiz makes it easy for the community to contribute and explore.

---

## 👾 Features

- User authentication and authorization via **NextAuth**.
- OAuth support for multiple providers (Google, GitHub, etc.).
- Create, update, and manage prompts.
- View other users' profiles and their prompts.
- Responsive design with **Tailwind CSS**.
- MongoDB integration for storing user and prompt data.
- Efficient API routes for managing prompts.
- Secure database management with **Mongoose**.

---

## 📂 Repository Structure

```sh
└── PromptWhiz.git/
    ├── README.md
    ├── app
    │   ├── api
    │   │   ├── auth
    │   │   │   └── [...nextauth]
    │   │   │       └── route.js
    │   │   ├── prompt
    │   │   │   ├── [id]
    │   │   │   │   └── route.js
    │   │   │   ├── new
    │   │   │   │   └── route.js
    │   │   │   └── route.js
    │   │   └── users
    │   │       └── [id]
    │   │           └── posts
    │   ├── create-prompt
    │   │   └── page.jsx
    │   ├── layout.jsx
    │   ├── page.jsx
    │   ├── profile
    │   │   ├── [id]
    │   │   │   └── page.jsx
    │   │   ├── loading.jsx
    │   │   └── page.jsx
    │   └── update-prompt
    │       └── page.jsx
    ├── components
    │   ├── Feed.jsx
    │   ├── Form.jsx
    │   ├── Nav.jsx
    │   ├── Profile.jsx
    │   ├── PromptCard.jsx
    │   └── Provider.jsx
    ├── jsconfig.json
    ├── models
    │   ├── prompt.js
    │   └── user.js
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── assets
    │       ├── icons
    │       │   ├── copy.svg
    │       │   ├── link.svg
    │       │   ├── loader.svg
    │       │   ├── menu.svg
    │       │   └── tick.svg
    │       └── images
    │           ├── grid.svg
    │           ├── logo-text.svg
    │           ├── logo.png
    │           └── logo.svg
    ├── styles
    │   └── globals.css
    ├── tailwind.config.js
    └── utils
        └── database.js
```

---

## 🧩 Modules

<details><summary>Configuration Files</summary>

| File | Summary |
| --- | --- |
| `jsconfig.json` | Configuration for JavaScript project paths and aliases. |
| `next.config.js` | Configuration for Next.js settings. |
| `postcss.config.js` | PostCSS configuration for managing CSS processing. |
| `package.json` | Contains project dependencies and scripts. |
| `tailwind.config.js` | Tailwind CSS configuration file. |

</details>

<details><summary>Components</summary>

| File | Summary |
| --- | --- |
| `PromptCard.jsx` | Displays individual prompts. |
| `Provider.jsx` | Context provider for managing global states. |
| `Form.jsx` | Form component for creating or updating prompts. |
| `Feed.jsx` | Displays a feed of prompts. |
| `Profile.jsx` | User profile component showing user information and prompts. |
| `Nav.jsx` | Navigation bar for the application. |

</details>

<details><summary>Models</summary>

| File | Summary |
| --- | --- |
| `prompt.js` | Mongoose model for managing prompt data. |
| `user.js` | Mongoose model for managing user data. |

</details>

---

## 🔐 Authentication

PromptWhiz uses **NextAuth.js** to handle authentication and user management. It supports multiple OAuth providers like Google and GitHub. Here's how authentication is integrated:

### Features of Authentication:
- **OAuth 2.0** providers (Google, GitHub, etc.) for seamless login.
- **Session Management**: Users remain logged in across sessions.
- **Custom User Model**: Integrated with MongoDB to store and manage user information.
- **Secure Routes**: Protect certain pages and actions (e.g., creating or updating prompts) to authorized users only.
- **API Authentication**: Secure API routes that ensure only authenticated users can interact with the backend.

### How It Works:
1. **Authentication Route**: The main authentication route is located at `app/api/auth/[...nextauth]/route.js`, where NextAuth.js handles the provider callbacks and session management.
   
2. **Session Management**: A global provider is used to keep track of whether a user is authenticated, utilizing NextAuth's session mechanism. This ensures users can interact with the app based on their session state.

3. **Protected Pages**: Pages like creating or updating prompts (`create-prompt/page.jsx` and `

update-prompt/page.jsx`) are protected. If a user is not authenticated, they are redirected to the login page.

4. **OAuth Providers Configuration**: In `next.config.js`, we have configured multiple OAuth providers like Google and GitHub for seamless login.

### Environment Variables:
To configure OAuth providers, make sure to add the following variables to your `.env.local`:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Example of Usage:
```jsx
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Sign In with Google</button>
      )}
    </nav>
  );
};
```

---

## 🚀 Getting Started

### 🔖 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) or a MongoDB cloud instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 📦 Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/leonardoo210399/PromptWhiz.git
    cd PromptWhiz.git
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create `.env.local` file and add the necessary environment variables:
    ```sh
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-secret-key
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

---

## 🤖 Usage

- **Prompt Feed**: Explore a variety of prompts created by the community.
- **Authentication**: Sign in with Google or GitHub to create and manage prompts.
- **Create Prompts**: After signing in, navigate to the create prompt page and share your ideas.
- **Profile Management**: View your profile to see all the prompts you've created.

---

## 🧪 Tests

To run tests, use the following command:
```sh
npm run test
```

---

## 📌 Project Roadmap

- Add more OAuth providers for authentication.
- Implement dark mode support.
- Allow users to comment on prompts.
- Add search functionality for prompts.
- Enhance the analytics dashboard for user profiles.

---

## 🤝 Contributing

We welcome contributions from the community! Feel free to fork the repo and submit pull requests. Please see our [CONTRIBUTING.md](https://github.com/leonardoo210399/PromptWhiz.git/blob/main/CONTRIBUTING.md) for more information.

---

## 🎗 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/leonardoo210399/PromptWhiz.git/blob/main/LICENSE) file for details.

---

## 🙌 Acknowledgments

Special thanks to all contributors, the open-source community, and tools that helped build this project.  
Logo design from [Icons8](https://icons8.com/icons/set/prompt).
```

This section now includes comprehensive details about the authentication system, how it's implemented, and how to configure and use it. Let me know if you need more changes!
