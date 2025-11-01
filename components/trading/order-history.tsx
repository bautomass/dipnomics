"use client";

export function OrderHistory() {
  // Mock order data - replace with real data
  const orders: any[] = [];

  return (
    <div className="mt-6">
      <h4 className="mb-3 font-semibold">Open Orders</h4>
      {orders.length === 0 ? (
        <div className="py-8 text-center text-sm text-muted-foreground">
          No open orders
        </div>
      ) : (
        <div className="space-y-2">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between rounded-lg border border-border p-3 text-sm"
            >
              <div>
                <p className="font-semibold">{order.side.toUpperCase()}</p>
                <p className="text-muted-foreground">{order.type}</p>
              </div>
              <div className="text-right">
                <p>{order.amount}</p>
                <p className="text-muted-foreground">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
