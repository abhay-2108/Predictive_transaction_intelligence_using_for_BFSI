# 🚀 Predictive Transaction Intelligence using AI/ML for BFSI

A comprehensive fraud detection and transaction intelligence system built with **React + FastAPI + MongoDB**. This full-stack application provides real-time fraud detection, advanced analytics, and transaction monitoring for banking and financial services institutions.

![Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.121.3-darkgreen)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [System Architecture](#-system-architecture)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Frontend Setup](#-frontend-setup)
- [Backend Setup](#-backend-setup)
- [API Documentation](#-api-documentation)
- [Dashboard Usage](#-dashboard-usage)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🎯 Project Overview

**Predictive Transaction Intelligence** is an AI/ML-powered fraud detection system designed for Banking, Financial Services, and Insurance (BFSI) institutions. It combines real-time transaction monitoring with advanced analytics to detect, prevent, and analyze fraudulent activities.

### Core Objectives

✅ **Real-time Fraud Detection** - Identify suspicious transactions instantly  
✅ **Advanced Analytics** - Comprehensive insights into transaction patterns  
✅ **Risk Assessment** - Multi-layer risk scoring and recommendations  
✅ **Regulatory Compliance** - Meet BFSI compliance requirements  
✅ **User-Friendly Dashboard** - Intuitive interface for fraud analysts  

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React + Vite)                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Dashboard │ Analytics │ Fraud Detection │ Risk Mgmt  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↕ (REST API)
┌─────────────────────────────────────────────────────────────┐
│               Backend (FastAPI + Python 3.9+)               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Overview │ Analytics │ Filters │ Alerts │ Insights   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│            Data Layer (MongoDB + Redis Cache)               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Transactions  │  Analytics  │  Cache  │  Alerts    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Key Features

### 🎨 Frontend Features

- **📊 KPI Dashboard** - Real-time key performance indicators
- **🔍 Advanced Search & Filters** - Multi-criteria filtering with date ranges
- **📋 Transaction Table** - Comprehensive transaction listing with sorting/pagination
- **🎯 Fraud Detection Module** - Interactive fraud detection engine tester
- **📈 Analytics Dashboard** - Visual charts and trend analysis
- **🔔 Real-time Alerts** - Automated fraud detection notifications
- **🎚️ Risk Analysis** - Risk scoring and assessment tools
- **📱 Responsive Design** - Mobile, tablet, and desktop optimization
- **🌙 Dark/Light Mode** - Theme switching with system preference detection
- **🌍 Multi-language Support** - English and Spanish translations
- **⚙️ Customizable Settings** - User preferences and configurations

### 🔧 Backend Features

#### Overview Routes (`/overview`)
- **Total Transaction Statistics** - Record counts and distributions
- **Fraud vs. Non-Fraud Metrics** - Fraud detection rates and percentages
- **Active User Metrics** - User activity tracking
- **Financial Metrics** - Transaction amounts and loss estimates

#### Analytics Routes (`/analytics`)
- **Dashboard Composite Endpoint** - All analytics in single request
- **Fraud Trend Analysis** - Time-based fraud patterns
- **Channel Distribution** - Channel-wise breakdown (ATM, Mobile, POS, Web)
- **Hourly/Daily Activity** - Temporal activity heatmaps

#### Insights Routes (`/insights`)
- **Transaction Amount Analytics** - Statistical aggregations
- **Volume Distribution** - Transaction volume patterns
- **Fraud Loss Estimation** - Financial impact analysis

#### Filter Routes (`/filter`)
- **Date Range Filtering** - Time-based transaction filtering
- **Channel Filtering** - Channel-specific data retrieval
- **Custom Query Support** - Flexible transaction queries

#### Alert Routes (`/alerts`)
- **Suspicious Transaction Detection** - High-risk transaction identification
- **Anomaly Detection** - Pattern-based anomalies
- **Real-time Notifications** - Alert streaming

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Icons**: Lucide React
- **State Management**: React Hooks, Context API
- **Additional**: React Router, Recharts (optional charts)

### Backend
- **Framework**: FastAPI 0.121.3
- **Language**: Python 3.9+
- **Database**: MongoDB (Atlas)
- **Caching**: Redis
- **Server**: Uvicorn
- **CORS**: FastAPI CORS Middleware
- **Validation**: Pydantic

### DevOps & Deployment
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Version Control**: Git
- **Environment Management**: `.env` files

---

## 📁 Project Structure

```
project-root/
├── frontend/                          # React frontend application
│   ├── src/
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # Entry point
│   │   ├── components/               # Reusable components
│   │   │   ├── LoginPage.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── DashboardHeader.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── SettingsPage.jsx
│   │   │   └── [other components]
│   │   ├── contexts/                 # React Context providers
│   │   │   ├── SettingsContext.jsx
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useTranslation.js
│   │   │   └── useResponsive.js
│   │   ├── services/                 # API services
│   │   │   └── api.js
│   │   ├── locales/                  # Translation files
│   │   │   ├── en.json
│   │   │   └── es.json
│   │   └── utils/
│   │       └── seedData.ts           # Sample data generator
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md
│
├── backend/                          # FastAPI backend application
│   ├── src/
│   │   ├── utils/
│   │   │   └── fraud_dashboard/
│   │   │       ├── main.py           # FastAPI app entry point
│   │   │       ├── cache.py          # Redis caching utilities
│   │   │       ├── database.py       # MongoDB connection
│   │   │       ├── routers/          # API route modules
│   │   │       │   ├── overview.py   # Overview endpoints
│   │   │       │   ├── analytics.py  # Analytics endpoints
│   │   │       │   ├── insights.py   # Insights endpoints
│   │   │       │   ├── filters.py    # Filter endpoints
│   │   │       │   ├── alerts.py     # Alert endpoints
│   │   │       │   ├── auth.py       # Authentication
│   │   │       │   ├── prediction.py # ML predictions
│   │   │       │   └── [other routers]
│   │   │       └── models/           # Data models
│   │   └── models/                   # ML models
│   ├── data/                         # Dataset files
│   ├── notebooks/                    # Jupyter notebooks
│   ├── requirements.txt
│   ├── .env
│   ├── README.md
│   └── LICENSE
│
├── Agile Docs/                       # Project documentation
├── docker-compose.yml                # Docker Compose configuration
├── docker-compose.enhanced.yml       # Enhanced services
├── README.md                         # This file
├── LICENSE
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

**For Frontend:**
- Node.js 16+ and npm/yarn
- Modern web browser

**For Backend:**
- Python 3.9+
- pip or conda
- MongoDB Atlas account
- Redis (optional, for caching)

### Quick Start (Both Frontend & Backend)

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd project-root
```

---

## 🎨 Frontend Setup

### Installation & Configuration

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` and set:
```
VITE_API_BASE=http://localhost:8000/api
```

4. **Start development server**
```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173`

### Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint (if configured)
npm run test      # Run unit tests (if configured)
```

### Frontend Key Files

- **`src/App.jsx`** - Main application component with routing
- **`src/services/api.js`** - API service for backend communication
- **`src/contexts/SettingsContext.jsx`** - Global settings management
- **`src/hooks/useTranslation.js`** - Multi-language support hook
- **`tailwind.config.js`** - Tailwind CSS configuration

### Frontend Features Breakdown

| Feature | Component | Status |
|---------|-----------|--------|
| Dashboard | DashboardLayout.jsx | ✅ Complete |
| Analytics | AnalyticsView.jsx | ✅ Complete |
| Fraud Detection | FraudDetection.jsx | ✅ Complete |
| Risk Analysis | RiskAnalysis.jsx | ✅ Complete |
| Settings | SettingsPage.jsx | ✅ Complete |
| Authentication | LoginPage.jsx | ✅ Complete |
| Alerts | RealtimeAlerts.jsx | ✅ Complete |

---

## 🔧 Backend Setup

### Installation & Configuration

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Create Python virtual environment**
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Configure environment variables**
```bash
cp .env.example .env  # if available, or create new .env
```

Edit `.env` and configure:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
MONGODB_DB_NAME=fraud_analytics
REDIS_URL=redis://localhost:6379
```

5. **Start the backend server**
```bash
cd src/utils/fraud_dashboard
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The backend API will be available at: `http://localhost:8000`
- Swagger UI Docs: `http://localhost:8000/docs`
- ReDoc Docs: `http://localhost:8000/redoc`

### Backend Key Files

- **`src/utils/fraud_dashboard/main.py`** - FastAPI application entry point
- **`src/utils/fraud_dashboard/routers/`** - API route implementations
- **`src/utils/fraud_dashboard/cache.py`** - Redis caching setup
- **`src/utils/fraud_dashboard/database.py`** - MongoDB connection

---

## 📡 API Documentation

### Base URL
```
http://localhost:8000/api
```

### Overview Routes (`/overview`)

#### GET `/overview/stats`
Returns high-level transaction and fraud summary metrics.

**Response:**
```json
{
  "total_transactions": 150000,
  "total_fraud": 5230,
  "fraud_percentage": 3.48,
  "active_users": 92000,
  "average_transaction_amount": 245.87,
  "high_risk_transactions": 1420
}
```

### Analytics Routes (`/analytics`)

#### GET `/analytics/dashboard`
Returns comprehensive analytics for dashboard visualization.

**Response:**
```json
{
  "volume_data": [
    { "_id": 1, "count": 168 },
    { "_id": 2, "count": 214 }
  ],
  "channel_distribution": [
    {
      "_id": null,
      "atm": 490,
      "mobile": 1992,
      "pos": 784,
      "web": 1734
    }
  ],
  "fraud_loss": 129.65,
  "legit_volume": 537.54,
  "hourly_distribution": [
    { "_id": 0, "count": 203 }
  ],
  "daily_activity": []
}
```

#### GET `/analytics/fraud_trend`
Returns fraud trends aggregated by date.

**Response:**
```json
[
  {
    "_id": {
      "year": 2025,
      "month": 8,
      "day": 25
    },
    "fraud_count": 15,
    "total": 204
  }
]
```

### Insights Routes (`/insights`)

#### GET `/insights/transaction-amounts`
Returns transaction amount analytics and distributions.

### Filter Routes (`/filter`)

#### GET `/filter/transactions`
Filters transactions by date range and channel.

**Query Parameters:**
- `start_date` (string, ISO format) - Lower bound
- `end_date` (string, ISO format) - Upper bound
- `channel` (string) - Channel filter (atm, mobile, pos, web)

### Alerts Routes (`/alerts`)

#### GET `/alerts/suspicious`
Returns suspicious and high-risk transactions.

### Authentication Routes (`/auth`)

#### POST `/auth/signup`
Register a new user.

**Payload:**
```json
{
  "email": "user@example.com",
  "password": "secure_password",
  "name": "User Name"
}
```

#### POST `/auth/login`
Authenticate user.

**Payload:**
```json
{
  "email": "user@example.com",
  "password": "secure_password"
}
```

---

## 📊 Dashboard Usage

### Main Dashboard
1. **View KPI Cards** - See real-time metrics at the top
2. **Transaction Table** - Browse and sort transactions
3. **Quick Stats** - View summary statistics
4. **System Status** - Monitor system health

### Analytics Section
1. **Fraud Loss Metrics** - View financial impact
2. **Channel Distribution** - Analyze by transaction channel
3. **Hourly Activity** - See transaction patterns by hour
4. **Trend Charts** - Observe fraud trends over time

### Fraud Detection
1. **Test Payloads** - Submit test transactions
2. **View Results** - See fraud decision and risk score
3. **Read Explanation** - Understand decision reasons

### Risk Analysis
1. **Risk Scoring** - View risk levels for transactions
2. **Recommendations** - Get actionable recommendations
3. **Activity Map** - Visualize geographic patterns

### Settings
1. **Theme Selection** - Choose dark/light/system theme
2. **Language** - Select English or Spanish
3. **Preferences** - Customize dashboard behavior

---

## 🐳 Docker Deployment

### Docker Compose (Development)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Docker Compose Enhanced (Production Features)

```bash
# Start with enhanced services (InfluxDB, Elasticsearch, etc.)
docker-compose -f docker-compose.enhanced.yml up -d

# Services include:
# - Frontend (React)
# - Backend (FastAPI)
# - MongoDB
# - Redis
# - InfluxDB (metrics)
# - Elasticsearch (logging)
# - Nginx (reverse proxy)
```

---

## 🚀 Deployment

### Frontend Deployment

#### Build for Production
```bash
cd frontend
npm run build
```

#### Deploy Options
- **Vercel**: Connect repository for auto-deployment
- **Netlify**: Upload `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Traditional Hosting**: Upload `dist` folder to server

### Backend Deployment

#### Prepare for Production
```bash
# Update .env with production values
# Test the build
pip install -r requirements.txt
```

#### Deploy Options
- **Heroku**: Use Procfile and git push
- **AWS/EC2**: Deploy to EC2 instance
- **Google Cloud**: Deploy to Cloud Run
- **Docker**: Use Docker Compose in production

---

## 🐛 Troubleshooting

### Frontend Issues

**JSX Syntax Errors**
- Ensure Vite config includes JSX loader
- Check `vite.config.js` plugin configuration

**Tailwind Styles Not Loading**
- Verify `tailwind.config.js` content paths
- Rebuild with `npm run dev`

**Hot Reload Not Working**
- Restart dev server: `npm run dev`
- Check Vite configuration

**API Connection Issues**
- Verify `VITE_API_BASE` in `.env`
- Ensure backend is running on port 8000
- Check CORS settings in backend

### Backend Issues

**MongoDB Connection Error**
- Verify `MONGODB_URI` in `.env`
- Check MongoDB Atlas IP whitelist
- Ensure MongoDB is running

**Redis Connection Error**
- Verify Redis is running
- Check `REDIS_URL` in `.env`
- On Windows, use WSL2 or Docker

**Port Already in Use**
```bash
# Change port in backend
uvicorn main:app --reload --port 8001
```

**Import Errors**
- Activate virtual environment
- Reinstall dependencies: `pip install -r requirements.txt`
- Check Python version (3.9+)

### Common Solutions

| Issue | Solution |
|-------|----------|
| CORS errors | Check backend CORS middleware configuration |
| 404 API errors | Verify endpoint paths match documentation |
| Slow performance | Enable Redis caching, check DB indexes |
| Out of memory | Reduce batch sizes, implement pagination |

---

## 📈 Performance Optimization

### Frontend
- Use `useMemo` for expensive calculations
- Implement virtual scrolling for large lists
- Lazy load components with `React.lazy`
- Optimize images and assets
- Use production build for deployment

### Backend
- Enable Redis caching for frequently accessed data
- Use MongoDB indexes for common queries
- Implement pagination for large datasets
- Monitor query performance
- Use connection pooling

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Coding Standards
- Follow PEP 8 for Python code
- Use ESLint for JavaScript
- Add comments for complex logic
- Write meaningful commit messages

---

## 📄 License

This project is dual-licensed:
- **Frontend**: MIT License
- **Backend**: MIT License
- See `LICENSE` file in root for details

---

## 📚 Additional Documentation

- [Frontend README](frontend/README.md) - Detailed frontend documentation
- [Backend README](backend/README.md) - Detailed backend documentation
- [API Documentation](http://localhost:8000/docs) - Interactive Swagger UI
- [Project Agile Docs](Agile%20Docs/) - Project planning and documentation

---
