export const initialDemoData = Object.freeze({
  accounts: [
    { id: 'checking', name: 'Everyday Checking', lastFour: '4821', balance: 2418.62 },
    { id: 'savings', name: 'Personal Savings', lastFour: '7304', balance: 8760.00 }
  ],
  transactions: [
    { id: 'txn-1', merchant: 'Oak Street Market', date: 'Jun 24', amount: -46.28, accountId: 'checking' },
    { id: 'txn-2', merchant: 'Northline Energy', date: 'Jun 23', amount: -62.00, accountId: 'checking' },
    { id: 'txn-3', merchant: 'Direct deposit', date: 'Jun 21', amount: 2100.00, accountId: 'checking' },
    { id: 'txn-4', merchant: 'Metro Internet', date: 'Jun 20', amount: -74.99, accountId: 'checking' },
    { id: 'txn-5', merchant: 'Corner Pharmacy', date: 'Jun 18', amount: -18.41, accountId: 'checking' }
  ],
  recipients: [
    { id: 'recipient-1', name: 'Avery J.', lastSent: '2 days ago' },
    { id: 'recipient-2', name: 'Morgan R.', lastSent: '1 week ago' },
    { id: 'recipient-3', name: 'Family account', lastSent: 'Jun 10' }
  ],
  bills: [
    { id: 'bill-1', payee: 'Metro Internet', due: 'Jun 28', amount: 74.99 },
    { id: 'bill-2', payee: 'Northline Energy', due: 'Jul 2', amount: 112.50 }
  ]
});

export function createDemoData() {
  return JSON.parse(JSON.stringify(initialDemoData));
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}
