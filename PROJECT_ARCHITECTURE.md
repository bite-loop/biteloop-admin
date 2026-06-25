# 🏛️ BiteLoop Admin - Project Architecture Documentation

---

# 📖 Purpose

This document serves as the single source of truth for the BiteLoop Admin Panel.

It contains:

* Project vision
* Folder structure
* File explanations
* Authentication flow
* Data flow
* Architecture decisions
* Development history
* Future implementation notes

This file should be updated whenever major architectural changes are made.

---

# 🎯 Project Vision

BiteLoop Admin is the centralized control center for the entire BiteLoop ecosystem.

The platform will allow administrators to manage:

* Users
* Restaurants
* Orders
* Analytics
* Support Operations
* Moderation
* Coupons
* Notifications
* Platform Settings

The goal is to build an enterprise-grade administration platform inspired by:

* Stripe Dashboard
* Shopify Admin
* Uber Eats Admin
* Vercel Dashboard
* Linear

---

# 🛠️ Tech Stack

## Frontend

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* Shadcn UI
* Framer Motion
* Lucide React

## State Management

* Zustand

## Authentication

* Firebase Authentication
* Firebase Admin SDK
* Session Cookies

## Database

Planned:

* MongoDB

## Deployment

Planned:

* Vercel

---

# 📂 Current Folder Structure

```txt
src
│
├── app
├── components
├── lib
├── public
└── types
```

---

# 📁 Folder Responsibilities

## app/

Contains all routes and pages.

### Route Groups

```txt
(auth)
(dashboard)
```

Purpose:

* Organize application routes
* Separate authentication routes from dashboard routes

---

## components/

Reusable UI components.

Examples:

```txt
dashboard/
layout/
protected-route/
theme/
```

Purpose:

* Keep UI modular
* Reuse components across pages

---

## lib/

Contains application logic.

Current structure:

```txt
lib
├── constants
├── data
├── firebase
├── services
└── stores
```

---

## public/

Static assets.

Examples:

```txt
logo.png
images/
icons/
banners/
```

---

## types/

Application-wide TypeScript types.

Purpose:

* Shared contracts
* Strong typing
* Single source of truth

---

# 🔐 Authentication Architecture

Current Authentication System:

```txt
User Login
      ↓
Firebase Authentication
      ↓
ID Token
      ↓
Firebase Admin SDK
      ↓
Session Cookie
      ↓
Protected Route
      ↓
Dashboard Access
```

---

# 🔑 Admin Access Control

Admin access is restricted using:

```txt
ADMIN_EMAILS
```

Located in:

```txt
lib/constants/admin-emails.ts
```

Flow:

```txt
Login
   ↓
Profile Fetch
   ↓
Email Validation
   ↓
Dashboard Access
```

Only approved email addresses may access the admin panel.

---

# 📦 API Routes

Current API Routes:

```txt
/api/auth/signin
/api/auth/logout
/api/auth/google
/api/user/profile
```

Purpose:

### signin

* Authenticate user
* Create session cookie

### logout

* Destroy session cookie

### google

* Authenticate Google users
* Create session cookie

### profile

* Return authenticated user profile

---

# 🗄️ Firebase Structure

## Client SDK

Location:

```txt
lib/firebase/config.ts
```

Purpose:

* Firebase Authentication
* Firestore
* Storage
* Functions

---

## Admin SDK

Location:

```txt
lib/firebase/admin.ts
```

Purpose:

* Verify Tokens
* Create Session Cookies
* Firestore Admin Access

---

# 🧠 State Management

Current Store:

```txt
lib/stores/authStore.ts
```

Responsibilities:

* Login
* Logout
* Fetch Profile
* Session Handling
* Authentication State

---

# 📊 Data Layer

Current Structure:

```txt
lib/data
├── dashboard.ts
├── users.ts
├── restaurants.ts
└── orders.ts
```

Purpose:

Temporary mock data.

Future:

```txt
MongoDB
     ↓
API
     ↓
Services
     ↓
Pages
```

---

# ⚙️ Service Layer

Current Structure:

```txt
lib/services
├── dashboard.service.ts
├── user.service.ts
├── restaurant.service.ts
└── order.service.ts
```

Purpose:

Act as the middle layer between:

```txt
Pages
   ↓
Services
   ↓
Data/API
```

Benefits:

* Easier migration to real APIs
* Cleaner codebase
* Better scalability

---

# 🏷️ Type System

Current Types:

```txt
types
├── admin-user.ts
├── dashboard.ts
├── user.ts
├── restaurant.ts
└── order.ts
```

Purpose:

Provide strongly typed contracts throughout the application.

---

# 📜 Development History

## Phase 1 — Foundation

Completed:

* Next.js Setup
* Tailwind Setup
* Theme System
* Dashboard Layout
* Sidebar Navigation
* Header Navigation

---

## Phase 2 — Authentication

Completed:

* Firebase Client SDK
* Firebase Admin SDK
* Email Login
* Google Login Backend
* Session Cookies
* Protected Routes
* Admin Email Whitelist
* Logout System

---

## Phase 3 — Core Architecture

Completed:

* Type System
* Data Layer
* Service Layer
* Folder Structure Standardization

---

# 🚀 Upcoming Modules

## Dashboard

* Metrics
* Revenue Tracking
* Platform Insights

## Users

* User Management
* Suspension System
* User Analytics

## Restaurants

* Restaurant Approval
* Verification
* Moderation

## Orders

* Order Monitoring
* Refund Investigation

## Analytics

* Revenue Analytics
* Platform Analytics

## Support

* Ticket System
* Escalation Workflows

---

# 📝 Important Development Decisions

## Why Service Layer?

To allow migration from:

```txt
Mock Data
```

to

```txt
MongoDB APIs
```

without changing page logic.

---

## Why Firebase Session Cookies?

More secure than storing authentication state in local storage.

---

## Why Admin Email Whitelist?

Provides an additional security layer beyond Firebase Authentication.

---

# 🔥 Project Status

Current Phase:

```txt
Foundation Complete ✅
Authentication Complete ✅
Architecture Complete ✅

Dashboard Development 🚧
User Management 🚧
Restaurant Management 🚧
Order Management 🚧
Analytics 🚧
```
