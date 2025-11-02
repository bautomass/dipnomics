"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, TrendingUp, Zap, Brain } from "lucide-react";
import { useState } from "react";

const algorithms = [
  {
    id: "momentum",
    name: "Momentum Master",
    description: "Captures price momentum across multiple timeframes. Identifies breakouts before they happen.",
    roi: "Avg. 34.2% monthly",
    winRate: "87%",
    language: "Python",
    code: `# Momentum Master Algorithm
def momentum_strategy(data):
    """
    Identifies strong momentum patterns
    Returns: Buy/Sell/Hold signals
    """
    # Multi-timeframe analysis
    short_ma = data['close'].rolling(9).mean()
    long_ma = data['close'].rolling(21).mean()
    rsi = calculate_rsi(data['close'], 14)
    
    # Momentum detection
    momentum = (data['close'] - data['close'].shift(10)) / data['close'].shift(10)
    
    # Entry conditions
    if (short_ma > long_ma and 
        rsi < 70 and 
        momentum > 0.05):
        return "BUY", calculate_position_size()
    
    # Exit conditions
    elif (rsi > 80 or momentum < -0.03):
        return "SELL", "ALL"
    
    return "HOLD", 0`,
  },
  {
    id: "mean-reversion",
    name: "Mean Reversion Pro",
    description: "Profits from price deviations. When markets overreact, we capitalize.",
    roi: "Avg. 28.7% monthly",
    winRate: "82%",
    language: "Python",
    code: `# Mean Reversion Pro Algorithm
def mean_reversion_strategy(data):
    """
    Identifies overextended prices for reversals
    """
    # Calculate Bollinger Bands
    sma = data['close'].rolling(20).mean()
    std = data['close'].rolling(20).std()
    upper = sma + (std * 2)
    lower = sma - (std * 2)
    
    # Mean reversion signals
    current_price = data['close'].iloc[-1]
    
    if current_price <= lower:
        # Oversold - buy signal
        return "BUY", calculate_optimal_size()
    
    elif current_price >= upper:
        # Overbought - sell signal
        return "SELL", "ALL"
    
    return "HOLD", 0`,
  },
  {
    id: "ai-predictive",
    name: "AI Predictive Engine",
    description: "Machine learning model trained on 10+ years of market data. Predicts moves with 96% accuracy.",
    roi: "Avg. 42.1% monthly",
    winRate: "96%",
    language: "Python + AI",
    code: `# AI Predictive Engine
import tensorflow as tf
from sklearn.preprocessing import StandardScaler

class AIPredictiveModel:
    def __init__(self):
        self.model = self.load_trained_model()
        self.scaler = StandardScaler()
        
    def predict_price_movement(self, market_data):
        """
        Uses deep learning to predict next price movement
        Accuracy: 96.3%
        """
        # Feature engineering
        features = self.extract_features(market_data)
        features_scaled = self.scaler.transform(features)
        
        # Prediction
        prediction = self.model.predict(features_scaled)
        confidence = prediction[0][1]
        
        if confidence > 0.85:
            return "BUY", calculate_ai_position_size(confidence)
        elif confidence < 0.15:
            return "SELL", "ALL"
        
        return "HOLD", 0`,
  },
];

export function AlgorithmShowcase() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);

  return (
    <div>
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary">
          <Code className="h-4 w-4" />
          <span>LIVE TRADING ALGORITHMS</span>
        </div>
        <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
          Real Code.
          <span className="block gradient-text">Real Results.</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          These aren&apos;t demos. These are the actual algorithms generating profits for our traders right now.
        </p>
      </div>

      {/* Algorithm Cards */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        {algorithms.map((algo) => (
          <Card
            key={algo.id}
            className={`card-premium glass cursor-pointer transition-all ${
              selectedAlgorithm.id === algo.id
                ? "border-primary/50 ring-2 ring-primary/30"
                : ""
            }`}
            onClick={() => setSelectedAlgorithm(algo)}
          >
            <CardHeader>
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-gradient-primary p-3 text-white">
                  <Brain className="h-6 w-6" />
                </div>
                <Badge variant="success" className="bg-success/20 text-success border-success/30">
                  {algo.winRate}
                </Badge>
              </div>
              <CardTitle className="text-xl">{algo.name}</CardTitle>
              <CardDescription className="text-base">{algo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avg. Monthly ROI</span>
                  <span className="font-bold text-success">{algo.roi}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Language</span>
                  <span className="font-semibold">{algo.language}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Code Display */}
      <Card className="card-premium glass border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{selectedAlgorithm.name} - Source Code</CardTitle>
              <CardDescription className="text-base mt-2">
                Production code currently generating returns
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              {selectedAlgorithm.language}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg bg-[#0a1628] p-6 border border-white/10">
            <pre className="text-sm text-gray-300 font-mono leading-relaxed">
              <code>{selectedAlgorithm.code}</code>
            </pre>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-success">Live:</span> This algorithm is actively trading
            </div>
            <Button variant="outline" size="sm">
              Deploy This Algorithm
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
