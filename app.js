// Main Application JavaScript for Dipnomics Trading Platform

// Application State
const appState = {
    currentUser: null,
    currentPage: 'home',
    subscriptionPeriod: 'monthly',
    selectedStrategy: null,
    strategies: [],
    portfolio: {
        balance: 0,
        holdings: [],
        totalPL: 0
    },
    marketData: []
};

// Pricing Plans
const pricingPlans = {
    monthly: [
        {
            name: 'Starter',
            price: 29,
            period: 'month',
            features: [
                'Basic Auto Trading',
                'Manual Trading',
                'Real-time Market Data',
                'Portfolio Tracking',
                'Email Support'
            ]
        },
        {
            name: 'Professional',
            price: 79,
            period: 'month',
            featured: true,
            features: [
                'Advanced Auto Trading',
                'Multiple Strategies',
                'Manual Trading',
                'Real-time Market Data',
                'AI Predictions (7-day)',
                'Portfolio Analytics',
                'Priority Support',
                'API Access'
            ]
        },
        {
            name: 'Enterprise',
            price: 199,
            period: 'month',
            features: [
                'Unlimited Auto Trading',
                'Custom Strategies',
                'All Manual Trading Features',
                'Full Market Data Access',
                'AI Predictions (30-day)',
                'Advanced Analytics',
                'Dedicated Support',
                'Full API Access',
                'White-label Options'
            ]
        }
    ],
    quarterly: [
        {
            name: 'Starter',
            price: 75,
            period: 'quarter',
            savings: 'Save 14%',
            features: [
                'Basic Auto Trading',
                'Manual Trading',
                'Real-time Market Data',
                'Portfolio Tracking',
                'Email Support'
            ]
        },
        {
            name: 'Professional',
            price: 200,
            period: 'quarter',
            featured: true,
            savings: 'Save 16%',
            features: [
                'Advanced Auto Trading',
                'Multiple Strategies',
                'Manual Trading',
                'Real-time Market Data',
                'AI Predictions (7-day)',
                'Portfolio Analytics',
                'Priority Support',
                'API Access'
            ]
        },
        {
            name: 'Enterprise',
            price: 500,
            period: 'quarter',
            savings: 'Save 16%',
            features: [
                'Unlimited Auto Trading',
                'Custom Strategies',
                'All Manual Trading Features',
                'Full Market Data Access',
                'AI Predictions (30-day)',
                'Advanced Analytics',
                'Dedicated Support',
                'Full API Access',
                'White-label Options'
            ]
        }
    ],
    yearly: [
        {
            name: 'Starter',
            price: 250,
            period: 'year',
            savings: 'Save 28%',
            features: [
                'Basic Auto Trading',
                'Manual Trading',
                'Real-time Market Data',
                'Portfolio Tracking',
                'Email Support'
            ]
        },
        {
            name: 'Professional',
            price: 650,
            period: 'year',
            featured: true,
            savings: 'Save 31%',
            features: [
                'Advanced Auto Trading',
                'Multiple Strategies',
                'Manual Trading',
                'Real-time Market Data',
                'AI Predictions (7-day)',
                'Portfolio Analytics',
                'Priority Support',
                'API Access'
            ]
        },
        {
            name: 'Enterprise',
            price: 1600,
            period: 'year',
            savings: 'Save 33%',
            features: [
                'Unlimited Auto Trading',
                'Custom Strategies',
                'All Manual Trading Features',
                'Full Market Data Access',
                'AI Predictions (30-day)',
                'Advanced Analytics',
                'Dedicated Support',
                'Full API Access',
                'White-label Options'
            ]
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadMarketData();
    renderPricing();
    checkAuthentication();
});

// Initialize App
function initializeApp() {
    // Set default page
    showPage('home');
    
    // Load saved user data
    const savedUser = localStorage.getItem('dipnomics_user');
    if (savedUser) {
        appState.currentUser = JSON.parse(savedUser);
        updateUIForUser();
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.menu li').forEach(item => {
        item.addEventListener('click', (e) => {
            const page = e.target.getAttribute('data-page');
            if (page) {
                showPage(page);
                // Update active nav item
                document.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    });

    // Authentication
    document.getElementById('userLogin')?.addEventListener('click', () => openAuthModal('login'));
    document.getElementById('userRegister')?.addEventListener('click', () => openAuthModal('register'));
    document.getElementById('userDashboard')?.addEventListener('click', () => {
        if (appState.currentUser) {
            showPage('portfolio');
        } else {
            openAuthModal('login');
        }
    });
    document.getElementById('userSubscription')?.addEventListener('click', () => showPage('subscription'));

    // Auth tabs
    document.querySelectorAll('.auth-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const authType = e.target.getAttribute('data-auth');
            switchAuthTab(authType);
        });
    });

    // Auth forms
    document.getElementById('loginBtn')?.addEventListener('click', handleLogin);
    document.getElementById('registerBtn')?.addEventListener('click', handleRegister);

    // Subscription
    document.getElementById('viewPricingBtn')?.addEventListener('click', () => showPage('subscription'));
    document.getElementById('startTradingBtn')?.addEventListener('click', () => {
        if (appState.currentUser) {
            showPage('auto-trade');
        } else {
            openAuthModal('login');
        }
    });

    // Period tabs
    document.querySelectorAll('.period-tab').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const period = e.target.getAttribute('data-period');
            switchPricingPeriod(period);
        });
    });

    // Auto Trading
    document.getElementById('createStrategyBtn')?.addEventListener('click', () => {
        document.getElementById('strategyConfig').style.display = 'block';
        document.getElementById('deleteStrategyBtn').style.display = 'none';
        resetStrategyForm();
    });
    document.getElementById('saveStrategyBtn')?.addEventListener('click', saveStrategy);
    document.getElementById('orderType')?.addEventListener('change', (e) => {
        const limitGroup = document.getElementById('limitPriceGroup');
        if (e.target.value === 'limit' || e.target.value === 'stop-limit') {
            limitGroup.style.display = 'block';
        } else {
            limitGroup.style.display = 'none';
        }
    });

    // Manual Trading
    document.getElementById('submitOrderBtn')?.addEventListener('click', submitOrder);
    document.querySelectorAll('.order-tab').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.order-tab').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Modal close buttons
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });

    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const pageMap = {
        'home': 'homePage',
        'market': 'marketPage',
        'auto-trade': 'autoTradePage',
        'manual-trade': 'manualTradePage',
        'portfolio': 'portfolioPage',
        'subscription': 'subscriptionPage'
    };

    const pageElement = document.getElementById(pageMap[pageId] || 'homePage');
    if (pageElement) {
        pageElement.classList.add('active');
        appState.currentPage = pageId;

        // Initialize page-specific functionality
        if (pageId === 'auto-trade') {
            initializeAutoTrading();
        } else if (pageId === 'manual-trade') {
            initializeManualTrading();
        } else if (pageId === 'portfolio') {
            initializePortfolio();
        }
    }
}

// Authentication
function openAuthModal(type) {
    const modal = document.getElementById('authModal');
    modal.classList.add('active');
    switchAuthTab(type);
}

function switchAuthTab(type) {
    document.querySelectorAll('.auth-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-auth') === type) {
            btn.classList.add('active');
        }
    });

    if (type === 'login') {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    } else {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    }
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate login (in production, use actual API)
    appState.currentUser = {
        email: email,
        name: email.split('@')[0],
        subscription: null
    };

    localStorage.setItem('dipnomics_user', JSON.stringify(appState.currentUser));
    updateUIForUser();
    document.getElementById('authModal').classList.remove('active');
    alert('Login successful!');
}

function handleRegister() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;

    if (!name || !email || !password || !confirm) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }

    // Simulate registration (in production, use actual API)
    appState.currentUser = {
        email: email,
        name: name,
        subscription: null
    };

    localStorage.setItem('dipnomics_user', JSON.stringify(appState.currentUser));
    updateUIForUser();
    document.getElementById('authModal').classList.remove('active');
    alert('Registration successful!');
}

function updateUIForUser() {
    if (appState.currentUser) {
        document.getElementById('userLogout').style.display = 'block';
        document.getElementById('userLogin').style.display = 'none';
        document.getElementById('userRegister').style.display = 'none';
    } else {
        document.getElementById('userLogout').style.display = 'none';
        document.getElementById('userLogin').style.display = 'block';
        document.getElementById('userRegister').style.display = 'block';
    }
}

function checkAuthentication() {
    if (!appState.currentUser && (appState.currentPage === 'auto-trade' || appState.currentPage === 'manual-trade')) {
        openAuthModal('login');
        showPage('home');
    }
}

// Pricing
function renderPricing() {
    const plans = pricingPlans[appState.subscriptionPeriod];
    const container = document.getElementById('pricingGrid');
    
    if (!container) return;

    container.innerHTML = plans.map(plan => `
        <div class="pricing-card ${plan.featured ? 'featured' : ''}">
            <h3>${plan.name}</h3>
            <div class="price">?${plan.price}</div>
            <div class="price-period">/${plan.period}${plan.savings ? ` ? ${plan.savings}` : ''}</div>
            <ul class="features-list">
                ${plan.features.map(feature => `<li><i class="fa-solid fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <button class="btn-subscribe" onclick="subscribeToPlan('${plan.name}', ${plan.price}, '${appState.subscriptionPeriod}')">
                Subscribe Now
            </button>
        </div>
    `).join('');
}

function switchPricingPeriod(period) {
    appState.subscriptionPeriod = period;
    document.querySelectorAll('.period-tab').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-period') === period) {
            btn.classList.add('active');
        }
    });
    renderPricing();
}

function subscribeToPlan(planName, price, period) {
    if (!appState.currentUser) {
        openAuthModal('register');
        return;
    }

    // In production, integrate with payment gateway (Stripe, PayPal, etc.)
    alert(`Subscribing to ${planName} (?${price}/${period}). In production, this would redirect to payment.`);
    
    // Simulate subscription
    appState.currentUser.subscription = {
        plan: planName,
        price: price,
        period: period,
        startDate: new Date().toISOString()
    };
    
    localStorage.setItem('dipnomics_user', JSON.stringify(appState.currentUser));
    alert('Subscription activated!');
}

// Market Data
function loadMarketData() {
    // In production, fetch from API
    // For now, using the existing table structure
    const table = document.getElementById('marketTable');
    if (!table) return;

    // Keep existing table rows or populate dynamically
    // The existing getdata.js handles BTC/ETH via WebSocket
}

// Auto Trading
function initializeAutoTrading() {
    loadStrategies();
    initializePerformanceChart();
}

function loadStrategies() {
    const container = document.getElementById('strategiesList');
    if (!container) return;

    if (appState.strategies.length === 0) {
        container.innerHTML = '<div class="empty-state">No strategies yet. Create your first strategy!</div>';
        return;
    }

    container.innerHTML = appState.strategies.map((strategy, index) => `
        <div class="strategy-item ${strategy === appState.selectedStrategy ? 'active' : ''}" onclick="selectStrategy(${index})">
            <h4>${strategy.name}</h4>
            <p>${strategy.type} ? ${strategy.coin}/${strategy.pair} ? ?${strategy.amount}</p>
        </div>
    `).join('');
}

function selectStrategy(index) {
    appState.selectedStrategy = appState.strategies[index];
    loadStrategyForm(appState.selectedStrategy);
    loadStrategies(); // Re-render to show active state
}

function loadStrategyForm(strategy) {
    document.getElementById('strategyName').value = strategy.name;
    document.getElementById('strategyCoin').value = strategy.coin;
    document.getElementById('strategyPair').value = strategy.pair;
    document.getElementById('strategyType').value = strategy.type;
    document.getElementById('investmentAmount').value = strategy.amount;
    document.getElementById('stopLoss').value = strategy.stopLoss;
    document.getElementById('takeProfit').value = strategy.takeProfit;
    document.querySelectorAll('.risk-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-risk') === strategy.risk) {
            btn.classList.add('active');
        }
    });
    document.getElementById('deleteStrategyBtn').style.display = 'block';
}

function resetStrategyForm() {
    document.getElementById('strategyName').value = '';
    document.getElementById('strategyCoin').value = 'BTC';
    document.getElementById('strategyPair').value = 'EUR';
    document.getElementById('strategyType').value = 'dca';
    document.getElementById('investmentAmount').value = '';
    document.getElementById('stopLoss').value = '';
    document.getElementById('takeProfit').value = '';
    document.querySelectorAll('.risk-btn').forEach(btn => {
        if (btn.getAttribute('data-risk') === 'medium') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function saveStrategy() {
    const name = document.getElementById('strategyName').value;
    const coin = document.getElementById('strategyCoin').value;
    const pair = document.getElementById('strategyPair').value;
    const type = document.getElementById('strategyType').value;
    const amount = parseFloat(document.getElementById('investmentAmount').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value);
    const takeProfit = parseFloat(document.getElementById('takeProfit').value);
    const riskBtn = document.querySelector('.risk-btn.active');
    const risk = riskBtn ? riskBtn.getAttribute('data-risk') : 'medium';

    if (!name || !amount || !stopLoss || !takeProfit) {
        alert('Please fill in all required fields');
        return;
    }

    const strategy = {
        id: appState.selectedStrategy ? appState.selectedStrategy.id : Date.now(),
        name,
        coin,
        pair,
        type,
        amount,
        stopLoss,
        takeProfit,
        risk,
        active: true,
        createdAt: appState.selectedStrategy ? appState.selectedStrategy.createdAt : new Date().toISOString()
    };

    if (appState.selectedStrategy) {
        const index = appState.strategies.findIndex(s => s.id === appState.selectedStrategy.id);
        appState.strategies[index] = strategy;
    } else {
        appState.strategies.push(strategy);
    }

    appState.selectedStrategy = null;
    resetStrategyForm();
    loadStrategies();
    alert('Strategy saved!');
}

function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Profit/Loss',
                data: [],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#334155'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                },
                x: {
                    grid: {
                        color: '#334155'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

// Manual Trading
function initializeManualTrading() {
    initializeTradingChart();
    updateTradingInfo();
}

function initializeTradingChart() {
    const ctx = document.getElementById('tradingChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 30 }, (_, i) => i + 1),
            datasets: [{
                label: 'Price',
                data: Array.from({ length: 30 }, () => Math.random() * 1000 + 40000),
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    grid: {
                        color: '#334155'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                },
                x: {
                    grid: {
                        color: '#334155'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

function updateTradingInfo() {
    // In production, fetch real-time data
    document.getElementById('currentPrice').textContent = '?42,000.00';
    const change = document.getElementById('priceChange');
    change.textContent = '+2.34%';
    change.className = 'positive';
}

function submitOrder() {
    const orderType = document.querySelector('.order-tab.active').getAttribute('data-order-type');
    const type = document.getElementById('orderType').value;
    const amount = parseFloat(document.getElementById('orderAmount').value);

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    // In production, submit to trading API
    alert(`${orderType.toUpperCase()} order placed: ${type} order for ${amount}`);
    
    // Update order history
    const history = document.getElementById('orderHistoryList');
    if (history && !history.querySelector('.empty-state')) {
        history.innerHTML = '';
    }
    if (history) {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-item';
        orderDiv.innerHTML = `
            <div>${orderType.toUpperCase()} ? ${type} ? ${amount}</div>
            <div>Pending</div>
        `;
        history.insertBefore(orderDiv, history.firstChild);
    }
}

// Portfolio
function initializePortfolio() {
    loadPortfolio();
    initializePortfolioChart();
}

function loadPortfolio() {
    // In production, fetch from API
    document.querySelector('.portfolio-value').textContent = '?0.00';
}

function initializePortfolioChart() {
    const ctx = document.getElementById('portfolioChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
            datasets: [{
                label: 'Portfolio Value',
                data: Array.from({ length: 30 }, () => Math.random() * 1000 + 10000),
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    grid: {
                        color: '#334155'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                },
                x: {
                    grid: {
                        color: '#334155'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

// Make functions available globally for onclick handlers
window.subscribeToPlan = subscribeToPlan;
window.selectStrategy = selectStrategy;
