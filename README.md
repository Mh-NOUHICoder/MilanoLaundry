# Milano Laundry App

A modern full-stack web application for managing laundry services, providing a seamless experience for both customers and administrators.

## ✨ Features

### 👥 Customer Features

- **Service Browsing** - View available services (`/service-selection`) with detailed descriptions and pricing.
- **Online Booking** - Schedule services with preferred pickup and delivery times (`/[serviceSlug]`).
- **Order Tracking** - Real-time tracking from pickup to delivery.
- **User Profiles** - Manage personal information, addresses, and order history (`/(auth)`).
- **Cart & Checkout** - Easy-to-use shopping cart and secure checkout process (`/checkout`).
- **Secure Authentication** - Protected user accounts and data via Clerk (`/sign-in`, `/sign-up`).

### ⚙️ Admin Features

- **Dashboard** - Comprehensive business metrics and operations overview.
- **Order Management** - Track and manage all customer orders.
- **Service Management** - Add, edit, or remove laundry services.
- **Customer Management** - View and manage customer information.
- **Analytics** - Track business performance and customer trends.

## 🛠 Tech Stack

**Frontend:**

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **State Management:** React Hooks & Context

**Backend:**

- **Runtime:** Next.js API Routes / Server Actions
- **Database:** MongoDB
- **Authentication:** Clerk

**Additional Technologies:**

- MongoDB Atlas for cloud database
- Vercel for deployment
- Responsive design for all devices

## 📂 Project Structure

A brief overview of the key folders in the project:

```bash
milano_laundry/
│
├── app/
│ ├── (auth)/                           # Route group for authentication (Clerk)
│ │ ├── sign-in/
│ │ └── sign-up/
│ ├── (book)/                           # Route group for the service booking flow
│ │ ├── checkout/
│ │ ├── service-selection/
│ │ └── [serviceSlug]/
│ └── layout.tsx                        # Root layout
│
├── components/                         # Reusable React components
├── hooks/                              # Custom React hooks
├── lib/                                # Utility functions and shared libraries
├── public/                             # Static assets (images, fonts, etc.)
│
├── next.config.ts                      # Next.js configuration
├── package.json                        # Project dependencies
└── tailwind.config.ts                  # Tailwind CSS configuration

```



## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- A MongoDB Atlas connection string
- Clerk API Keys

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/YOUR_USERNAME/milano_laundry.git
cd milano_laundry

```

