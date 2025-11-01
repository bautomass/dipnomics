# Dipnomics - Premium Trading Platform

A comprehensive subscription-based trading platform with auto trading, manual trading, and advanced analytics.

## Features

### ?? Core Features

1. **Auto Trading**
   - Multiple trading strategies (DCA, Momentum, Mean Reversion, AI Signal Based)
   - Strategy configuration with risk management
   - Performance tracking and analytics
   - Real-time strategy monitoring

2. **Manual Trading**
   - Advanced order types (Market, Limit, Stop Loss, Stop Limit)
   - Real-time price charts with multiple timeframes
   - Order management (open orders, order history)
   - Market depth and trading information

3. **Market Data**
   - Real-time cryptocurrency prices via WebSocket
   - Comprehensive market data for 63,000+ assets
   - Interactive charts and visualizations
   - Market filters and sorting

4. **Portfolio Management**
   - Portfolio overview and analytics
   - Holdings tracking
   - Profit/Loss calculations
   - Performance charts

5. **Subscription Plans**
   - Monthly, Quarterly, and Yearly billing options
   - Three tiers: Starter, Professional, Enterprise
   - Feature-based pricing
   - Automatic savings on longer commitments

### ?? User Experience

- Modern, responsive design
- Intuitive navigation
- Clear data visualization
- Real-time updates
- Mobile-friendly interface

## Setup

1. **Clone or download the repository**

2. **Open `index.html` in a web browser**

   The platform works as a static website. For full functionality:
   - WebSocket connections require a server (or use live server extension)
   - Backend API integration needed for authentication and trading
   - Payment gateway integration needed for subscriptions

3. **Development Setup**

   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server
   ```

   Then open `http://localhost:8000` in your browser.

## File Structure

```
/
??? index.html          # Main HTML file
??? index.css           # Stylesheet
??? app.js              # Main application logic
??? getdata.js          # WebSocket data fetching (BTC/ETH)
??? cdt.js              # Countdown timer
??? modal.js            # Modal utilities
??? img/                # Image assets
```

## Technologies Used

- **HTML5/CSS3** - Structure and styling
- **JavaScript (ES6+)** - Application logic
- **Chart.js** - Data visualization
- **Font Awesome** - Icons
- **WebSocket API** - Real-time price updates

## Subscription Plans

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

**Savings available on quarterly (14-16%) and yearly (28-33%) plans**

## Next Steps for Production

1. **Backend Integration**
   - User authentication API
   - Trading API integration
   - Database for storing strategies, orders, and portfolio data
   - WebSocket server for real-time updates

2. **Payment Integration**
   - Stripe/PayPal integration for subscriptions
   - Secure payment processing
   - Subscription management

3. **Security**
   - HTTPS implementation
   - API key management
   - Secure authentication tokens
   - Rate limiting

4. **Additional Features**
   - Email notifications
   - Mobile app
   - Advanced charting tools
   - Social trading features
   - Backtesting tools

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

? 2024 Dipnomics? | All Rights Reserved
