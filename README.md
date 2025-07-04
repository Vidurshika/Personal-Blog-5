# 📝 Personal-Blog-5

A simple yet functional personal blog application built with **React**, styled with **CSS**, and powered by **Easy Peasy (Redux simplified)** for state management. It includes all core blog features: viewing posts, creating new posts, deleting posts, updating posts and navigating through the app.

---

## 📁 Project Structure (Simplified)

```
Personal-Blog-5/
├── public/
├── api/
├── data/  //JSON file with posts
├── hooks/
│   └── useAxiosFetch.js
├── components/
│   ├── About.jsx
│   ├── App.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── Missing.jsx
│   ├── NewPost.jsx
│   ├── PostPage.jsx
│   ├── EditPost.jsx
│   └── Nav.jsx
├── assets/
│   └── cont.jpg
├── index.js
├── App.css / index.css
├── store.js (Easy Peasy store)
├── README.md
└── package.json
```

---

## 🌟 Features

- 🏠 **Home Page**:
  - Displays recent blog posts in reverse chronological order
  - Includes a **search bar** to filter posts

- ➕ **New Post Page**:
  - Allows users to create and submit a new blog entry

- ✏️ **Edit Page**:
  - Enables editing of existing blog posts

- 📄 **Post Details Page**:
  - Shows full content of an individual post

- ℹ️ **About Page**:
  - Contains information about the blog/project

- 🚫 **404 Missing Page**:
  - Displays a custom message for unmatched routes

---

## 🧠 State Management with Easy Peasy (Redux)

This project uses **Easy Peasy**, a simplified abstraction of Redux, for global state management.

- The global state logic is defined in **`store.js`**, which contains the app's shared state (like posts) and the actions to update it.
- It helps avoid prop drilling and makes the app more scalable by keeping all state-related logic in one central place.

### 🔸 `useStoreState`
Used to **read** data from the store.
```js
const posts = useStoreState((state) => state.posts);
```

### 🔹 `useStoreActions`
Used to **update** data in the store.
```js
const setPosts = useStoreActions((actions) => actions.setPosts);
```

---

## ⚙️ Tech Stack

- **Frontend**: React
- **State Management**: Easy Peasy (Redux abstraction)
- **Routing**: React Router
- **Data Fetching**: Custom Hook `useAxiosFetch`
- **Styling**: CSS
- **Assets**: Images included (e.g., `cont.jpg`)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Vidurshika/Personal-Blog-5.git
cd Personal-Blog-5
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the mock API server  
This project uses [`json-server`] to serve blog data locally.

Run the following:
```bash
npx json-server -p 3500 -w data/db.json
```

> This will start a mock REST API at:  
> 📡 [http://localhost:3500/posts](http://localhost:3500/posts)

### 4. Start the React development server
In a **new terminal tab or window** (keeping json-server running):
```bash
npm start
```

> The React app will now be running at:  
> 🌐 [http://localhost:3000](http://localhost:3000)

---


