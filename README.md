# Mini Local Business Dashboard

This project simulates how small businesses might view their SEO content and Google Business data, one of GrowthProAI’s core use cases.

## Features

- **Input Form:** Enter your business name and location.
- **Display Card:** Shows simulated Google rating, review count, and an AI-generated SEO headline.
- **Regenerate Headline:** Get a new random SEO headline for your business.
- **Responsive Design:** Clean, mobile-friendly UI built with React and Tailwind CSS.
- **No Database:** All data is simulated in-memory by the backend.

---

## Folder Structure

```
mini-local-business-dashboard/
├── backend/
│   ├── index.js
│   └── package.json
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── index.js
        ├── index.css
```

---

## Getting Started

### 1. Backend

#### Setup

```bash
cd backend
npm install
```

#### Run

```bash
node index.js
# Server runs at http://localhost:4000
```

---

### 2. Frontend (Create React App + Tailwind)

#### Setup

```bash
cd frontend
npm install
```

#### Tailwind CSS

Tailwind is already configured in `tailwind.config.js` and `postcss.config.js`.
No extra setup is needed.

#### Run

```bash
npm start
# App runs at http://localhost:3000
```

---

## Usage

1. Start both backend and frontend servers.
2. Go to [http://localhost:3000](http://localhost:3000) in your browser.
3. Enter a business name and location, then submit the form.
4. View simulated Google rating, review count, and an AI-style SEO headline.
5. Click "Regenerate SEO Headline" to get a new headline.

---

## Tech Stack

- **Frontend:** React, Create React App, Tailwind CSS
- **Backend:** Node.js, Express

---

## Customization

- You can add more headline templates in `backend/index.js` for more variety.
- Tailwind theme can be edited in `frontend/tailwind.config.js`.

---

## License

MIT
