# 💬 React + .NET Chat

Мгновенный чат в реальном времени, построенный на современном стеке: **ASP.NET 8**, **SignalR**, **React 18**, **Tailwind CSS 3** и **Chakra UI**.

## ✨ Основной функционал

- ⚡ Мгновенное подключение к серверу через WebSocket (SignalR)
- 📨 Отправка и получение сообщений в реальном времени
- 🎨 Адаптивный интерфейс на Chakra UI с кастомизацией через Tailwind CSS

## 🛠 Стек технологий

| Технология     | Назначение                  |
| -------------- | --------------------------- |
| ASP.NET 8      | Бэкенд, хостинг SignalR     |
| SignalR        | Двусторонняя связь в реальном времени |
| React 18       | Клиентский интерфейс        |
| Tailwind CSS 3 | Утилитарные стили           |
| Chakra UI      | Готовые UI-компоненты       |

## 🚀 Быстрый старт

### Требования

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (рекомендуется LTS)

### Установка и запуск

1. **Клонируй репозиторий:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
Запусти сервер:

bash
cd server
dotnet run
Сервер будет доступен на https://localhost:5001 (или http://localhost:5000).

Запусти клиент:

bash
cd client
npm install
npm run dev
Открой браузер на http://localhost:3000.

📂 Структура проекта
text
├── client/               # React-приложение
│   ├── src/
│   │   ├── components/   # UI-компоненты
│   │   ├── hooks/        # Кастомные хуки (useSignalR)
│   │   └── App.tsx
│   └── package.json
├── server/               # .NET Web API + SignalR Hub
│   ├── Hubs/             # Хаб чата
│   ├── Program.cs
│   └── server.csproj
└── README.md
