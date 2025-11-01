# Dipnomics - Premium Trading Platform

A modern, full-stack subscription-based trading platform built with Next.js 14, TypeScript, and Tailwind CSS. Features auto trading, manual trading, portfolio management, and real-time market data.

## ?? Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Charts**: Chart.js with react-chartjs-2
- **State Management**: Zustand, React Query
- **Authentication**: NextAuth.js (ready for integration)
- **Database**: Prisma (ready for integration)
- **Deployment**: Vercel

## ? Features

### Core Features

1. **Auto Trading**
   - Create and manage multiple trading strategies
   - DCA, Momentum, Mean Reversion, and AI Signal strategies
   - Risk management with stop loss and take profit
   - Real-time strategy performance tracking

2. **Manual Trading**
   - Advanced order types (Market, Limit, Stop Loss, Stop Limit)
   - Real-time price charts with multiple timeframes
   - Order management and history
   - Market depth information

3. **Market Data**
   - Real-time cryptocurrency prices
   - Comprehensive market data for thousands of assets
   - Interactive charts and visualizations
   - Market filters and sorting

4. **Portfolio Management**
   - Portfolio overview with balance and P/L
   - Holdings tracking
   - Performance charts and analytics
   - Real-time updates

5. **Subscription Plans**
   - Monthly, Quarterly, and Yearly billing
   - Three tiers: Starter, Professional, Enterprise
   - Feature-based pricing with savings on longer commitments

### UI/UX Features

- ? Fully responsive (mobile, tablet, desktop)
- ? Dark mode by default
- ? Modern, clean interface
- ? Smooth animations and transitions
- ? Accessible components
- ? Fast page loads

## ?? Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dipnomics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## ??? Project Structure

```
/
??? app/                    # Next.js App Router
?   ??? api/               # API routes
?   ??? market/            # Market page
?   ??? auto-trade/        # Auto trading page
?   ??? manual-trade/      # Manual trading page
?   ??? portfolio/         # Portfolio page
?   ??? pricing/           # Pricing page
?   ??? layout.tsx         # Root layout
?   ??? page.tsx           # Home page
??? components/            # React components
?   ??? ui/               # UI components
?   ??? layout/           # Layout components
?   ??? trading/          # Trading components
?   ??? portfolio/        # Portfolio components
??? lib/                  # Utilities and helpers
??? types/                # TypeScript types
??? public/               # Static assets
```

## ?? Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Database (when using Prisma)
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# API Keys (for market data)
BINANCE_API_KEY=""
COINGECKO_API_KEY=""
```

### Database Setup (Optional)

If using Prisma:

```bash
npx prisma init
npx prisma migrate dev
```

## ?? Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Add environment variables in Vercel dashboard
   - Deploy!

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## ?? Mobile Responsiveness

The platform is fully responsive and optimized for:
- ?? Mobile phones (320px+)
- ?? Tablets (768px+)
- ?? Desktop (1024px+)
- ??? Large screens (1440px+)

## ?? Authentication (Next Steps)

To implement authentication:

1. Set up NextAuth.js:
   ```bash
   npm install next-auth
   ```

2. Create `app/api/auth/[...nextauth]/route.ts`

3. Configure providers (Google, Email, etc.)

4. Add authentication middleware

## ?? Database Integration (Next Steps)

To add database support:

1. Choose a database (PostgreSQL recommended)
2. Set up Prisma schema
3. Run migrations
4. Update API routes to use database

## ?? API Integration

Current API routes use mock data. To integrate real APIs:

1. **Market Data**: Integrate with Binance, CoinGecko, or your preferred provider
2. **Trading**: Connect to exchange APIs (Binance, Kraken, etc.)
3. **WebSocket**: Set up real-time price updates
4. **Payments**: Integrate Stripe or PayPal for subscriptions

## ?? Subscription Plans

### Starter - ?29/month
- Basic Auto Trading
- Manual Trading
- Real-time Market Data
- Portfolio Tracking
- Email Support

### Professional - ?79/month (Most Popular)
- Advanced Auto Trading
- Multiple Strategies
- Manual Trading
- Real-time Market Data
- AI Predictions (7-day)
- Portfolio Analytics
- Priority Support
- API Access

### Enterprise - ?199/month
- Unlimited Auto Trading
- Custom Strategies
- All Manual Trading Features
- Full Market Data Access
- AI Predictions (30-day)
- Advanced Analytics
- Dedicated Support
- Full API Access
- White-label Options

## ??? Development

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Type check
npm run type-check
```

## ?? License

? 2024 Dipnomics? | All Rights Reserved

## ?? Contributing

This is a private project. For questions or support, please contact the team.

---

Built with ?? using Next.js, TypeScript, and Tailwind CSS
