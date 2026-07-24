import { icon } from './icons.js';
import { formatCurrency } from './data.js';

export const simpleNavItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'pay', label: 'Pay & transfer', icon: 'transfer' },
  { id: 'settings', label: 'Settings', icon: 'gear' }
];

function statusBar() {
  return `<div class="status-bar status-dark" aria-hidden="true">
    <span class="status-time">9:41</span>
    <div class="status-icons"><span class="signal"><i></i><i></i><i></i><i></i></span><span class="wifi">Wi-Fi</span><span class="battery">84</span></div>
  </div>`;
}

function simpleHeader(title, subtitle = '') {
  return `<header class="simple-header sticky-header">
    ${statusBar()}
    <div class="simple-title-row">
      <div class="simple-brand-lockup"><span class="chase-mark" aria-hidden="true"></span><b>CHASE</b></div>
      <div class="simple-title-copy"><span>${subtitle}</span><h1>${title}</h1></div>
      <button class="simple-avatar demo-action" type="button" aria-label="Profile">${icon('user')}</button>
    </div>
  </header>`;
}

function modeBanner(compact = false) {
  return `<section class="simple-mode-banner ${compact ? 'compact' : ''}" aria-label="Simple Mode">
    <span>${icon('shield')}</span>
    <div><strong>${compact ? 'Review step added' : 'Simple mode'}</strong><p>${compact ? 'New payees and larger amounts pause for one more check before money moves.' : 'Payments use bigger buttons, clearer labels, and an extra review before money moves.'}</p></div>
  </section>`;
}

function homeScreen(data) {
  const total = data.accounts.reduce((sum, account) => sum + account.balance, 0);
  const upcomingBills = `${data.bills.length} due by ${data.bills[data.bills.length - 1]?.due}`;
  return `<section class="screen simple-screen simple-home" data-screen="home" aria-labelledby="simple-home-title">
    ${simpleHeader('Accounts', 'Simple mode')}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content simple-home-content">
        <section class="simple-overview-card" aria-labelledby="simple-home-title">
          <div class="simple-balance-hero">
            <span>Total available</span>
            <h2 id="simple-home-title">${formatCurrency(total)}</h2>
            <p>Across checking and savings</p>
          </div>

          <div class="simple-account-list" aria-label="Bank accounts">
            <div class="simple-account-list-header">Bank accounts (${data.accounts.length})</div>
            ${data.accounts.map((account) => `<article class="simple-account-row">
              <span class="simple-account-icon">${icon(account.id === 'checking' ? 'wallet' : 'pig')}</span>
              <span><strong>${account.name}</strong><small>Account ending in ${account.lastFour}</small></span>
              <b>${formatCurrency(account.balance)}</b>
            </article>`).join('')}
          </div>
        </section>

        <div class="simple-quick-actions" aria-label="Quick actions">
          <button class="simple-quick-pill" type="button" data-flow="send"><span class="simple-pill-icon">${icon('cash')}</span><span>Send money</span></button>
          <button class="simple-quick-pill" type="button" data-flow="bill"><span class="simple-pill-icon">${icon('receipt')}</span><span>Pay a bill</span></button>
          <button class="simple-quick-pill" type="button" data-flow="transfer"><span class="simple-pill-icon">${icon('transfer')}</span><span>Transfer</span></button>
        </div>

        <section class="simple-safety-grid" aria-label="Helpful reminders">
          <article><strong>Upcoming bills</strong><span>${upcomingBills}</span></article>
          <article><strong>Family alerts</strong><span>On for new payees</span></article>
        </section>

        <section class="simple-section recent-section" aria-labelledby="recent-title">
          <div class="simple-section-heading"><h2 id="recent-title">Recent activity</h2><button class="demo-action" type="button">See all</button></div>
          <div class="transaction-list">
            ${data.transactions.slice(0, 4).map((transaction) => `<button class="transaction-row" type="button" data-transaction-id="${transaction.id}">
              <span class="transaction-mark">${transaction.merchant.slice(0, 1)}</span>
              <span><strong>${transaction.merchant}</strong><small>${transaction.date}</small></span>
              <b class="${transaction.amount > 0 ? 'positive' : ''}">${formatCurrency(transaction.amount)}</b>
              ${icon('chevron')}
            </button>`).join('')}
          </div>
        </section>

        <section class="simple-section simple-help-panel" aria-labelledby="help-title">
          <span>${icon('chat')}</span>
          <div><h2 id="help-title">Questions about a charge?</h2><p>Get a plain-language explanation or share it with a trusted helper before you act.</p></div>
          <button class="demo-action" type="button">Get help</button>
        </section>
      </div>
    </div>
  </section>`;
}

function payScreen(data) {
  return `<section class="screen simple-screen simple-pay" data-screen="pay" aria-labelledby="simple-pay-title">
    ${simpleHeader('Pay & transfer', 'Simple mode')}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content">
        <h2 class="simple-page-title" id="simple-pay-title">Choose a task</h2>
        ${modeBanner(true)}
        <div class="simple-task-stack">
          <button type="button" data-flow="send">${icon('cash')}<span><strong>Send money</strong><small>To people you know</small></span>${icon('chevron')}</button>
          <button type="button" data-flow="bill">${icon('receipt')}<span><strong>Pay a bill</strong><small>Review what is due</small></span>${icon('chevron')}</button>
          <button type="button" data-flow="transfer">${icon('transfer')}<span><strong>Transfer</strong><small>Between your accounts</small></span>${icon('chevron')}</button>
        </div>

        <section class="simple-section compact-section" aria-labelledby="recipients-title">
          <h2 id="recipients-title">Recent recipients</h2>
          <div class="recipient-strip">
            ${data.recipients.map((recipient) => `<button type="button" data-flow="send" data-recipient="${recipient.id}"><span>${recipient.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><strong>${recipient.name}</strong><small>${recipient.lastSent}</small></button>`).join('')}
          </div>
        </section>

        <section class="simple-section compact-section" aria-labelledby="bills-title">
          <h2 id="bills-title">Bills coming up</h2>
          <div class="simple-bill-list">
            ${data.bills.map((bill) => `<button type="button" data-flow="bill" data-bill="${bill.id}"><span>${icon('receipt')}<strong>${bill.payee}</strong><small>Due ${bill.due}</small></span><b>${formatCurrency(bill.amount)}</b>${icon('chevron')}</button>`).join('')}
          </div>
        </section>
      </div>
    </div>
  </section>`;
}

function settingsScreen() {
  const settings = [
    ['shield', 'Simple Mode controls'],
    ['bell', 'Notifications'],
    ['user', 'Trusted helper'],
    ['shield', 'Card controls'],
    ['document', 'Statements & documents']
  ];
  return `<section class="screen simple-screen simple-settings" data-screen="settings" aria-labelledby="simple-settings-title">
    ${simpleHeader('Settings', 'Simple mode')}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content">
        <h2 class="simple-page-title" id="simple-settings-title">Simple Mode settings</h2>
        <div class="settings-profile"><span class="simple-avatar large">${icon('user')}</span><span><strong>Demo customer</strong><small>Fictional profile</small></span></div>
        <div class="simple-controls-card">
          <div><strong>Large text and buttons</strong><span>On</span></div>
          <div><strong>Plain-language reviews</strong><span>On</span></div>
          <div><strong>Trusted helper alerts</strong><span>On</span></div>
        </div>
        <div class="simple-settings-list">
          ${settings.map(([iconName, label]) => `<button class="demo-action" type="button">${icon(iconName)}<span>${label}</span>${icon('chevron')}</button>`).join('')}
          <button class="demo-action sign-out-row" type="button">${icon('logout')}<span>Sign out</span>${icon('chevron')}</button>
        </div>
        <p class="settings-note">Prototype only. Simple Mode settings show how Chase could support seniors, kids, and caregivers without changing the underlying account.</p>
      </div>
    </div>
  </section>`;
}

export function simpleScreens(data) {
  return `${homeScreen(data)}${payScreen(data)}${settingsScreen()}`;
}

function flowHeader(title, stepLabel = '') {
  return `<header class="flow-header sticky-header">
    ${statusBar()}
    <div><button type="button" data-flow-back aria-label="Go back">${icon('arrowLeft')}</button><span><small>${stepLabel}</small><h1>${title}</h1></span><i aria-hidden="true"></i></div>
  </header>`;
}

function radioCards(name, items, selectedId, labelFor) {
  return `<div class="choice-list">${items.map((item, index) => {
    const selected = selectedId ? selectedId === item.id : index === 0;
    return `<label><input type="radio" name="${name}" value="${item.id}" ${selected ? 'checked' : ''} required><span>${labelFor(item)}</span></label>`;
  }).join('')}</div>`;
}

function sendForm(data, presetId, draft = {}) {
  return `<form class="flow-form" data-flow-form="send">
    <fieldset><legend>Who are you sending money to?</legend>${radioCards('recipientId', data.recipients, draft.recipientId || presetId, (recipient) => `<strong>${recipient.name}</strong><small>Last sent ${recipient.lastSent}</small>`)}</fieldset>
    <label class="amount-field"><span>Amount</span><span><b>$</b><input name="amount" type="number" inputmode="decimal" min="0.01" max="5000" step="0.01" placeholder="0.00" value="${draft.amount || ''}" required></span><small>Demo limit: $5,000.00</small></label>
    <button class="simple-continue" type="button" data-continue-flow>Review</button>
  </form>`;
}

function billForm(data, presetId, draft = {}) {
  return `<form class="flow-form" data-flow-form="bill">
    <fieldset><legend>Choose a bill</legend>${radioCards('billId', data.bills, draft.billId || presetId, (bill) => `<strong>${bill.payee}</strong><small>Due ${bill.due} &middot; ${formatCurrency(bill.amount)}</small>`)}</fieldset>
    <label class="amount-field"><span>Payment amount</span><span><b>$</b><input name="amount" type="number" inputmode="decimal" min="0.01" max="5000" step="0.01" placeholder="0.00" value="${draft.amount || ''}" required></span></label>
    <button class="simple-continue" type="button" data-continue-flow>Review payment</button>
  </form>`;
}

function transferForm(data, draft = {}) {
  return `<form class="flow-form" data-flow-form="transfer">
    <label class="select-field"><span>From</span><select name="fromAccount" required>${data.accounts.map((account) => `<option value="${account.id}" ${draft.fromAccount === account.id ? 'selected' : ''}>${account.name} &middot; ${formatCurrency(account.balance)}</option>`).join('')}</select></label>
    <label class="select-field"><span>To</span><select name="toAccount" required>${[...data.accounts].reverse().map((account) => `<option value="${account.id}" ${draft.toAccount === account.id ? 'selected' : ''}>${account.name} &middot; ${formatCurrency(account.balance)}</option>`).join('')}</select></label>
    <label class="amount-field"><span>Amount</span><span><b>$</b><input name="amount" type="number" inputmode="decimal" min="0.01" max="5000" step="0.01" placeholder="0.00" value="${draft.amount || ''}" required></span></label>
    <button class="simple-continue" type="button" data-continue-flow>Review transfer</button>
  </form>`;
}

function flowReview(route, data) {
  const amount = formatCurrency(Number(route.payload.amount));
  let rows;
  if (route.type === 'send') {
    const recipient = data.recipients.find((item) => item.id === route.payload.recipientId);
    rows = [['To', recipient?.name], ['From', data.accounts[0].name], ['Amount', amount]];
  } else if (route.type === 'bill') {
    const bill = data.bills.find((item) => item.id === route.payload.billId);
    rows = [['Payee', bill?.payee], ['From', data.accounts[0].name], ['Amount', amount]];
  } else {
    const from = data.accounts.find((item) => item.id === route.payload.fromAccount);
    const to = data.accounts.find((item) => item.id === route.payload.toAccount);
    rows = [['From', from?.name], ['To', to?.name], ['Amount', amount]];
  }
  return `<div class="flow-review"><div class="review-amount"><span>Review amount</span><strong>${amount}</strong></div><dl>${rows.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('')}</dl><div class="demo-warning"><strong>Simple Mode check</strong><span>We show the recipient, account, and amount one more time. For a new person or unusual amount, Chase could ask a trusted helper to review.</span></div><button class="simple-continue" type="button" data-confirm-flow>Confirm demo</button><button class="simple-secondary demo-action" type="button">Ask trusted helper</button></div>`;
}

function flowComplete(route) {
  const labels = { send: 'Send money', bill: 'Bill payment', transfer: 'Transfer' };
  return `<div class="flow-complete"><span class="complete-mark">${icon('check')}</span><p>Demo complete</p><h2>${labels[route.type]} reviewed</h2><p>No money moved and no banking activity was created.</p><button class="simple-continue" type="button" data-flow-done>Return home</button></div>`;
}

function transactionDetail(route, data) {
  const transaction = data.transactions.find((item) => item.id === route.transactionId);
  const account = data.accounts.find((item) => item.id === transaction?.accountId);
  if (!transaction) return '<p class="empty-state">Transaction not found.</p>';
  return `<div class="transaction-detail"><span class="transaction-mark large">${transaction.merchant.slice(0, 1)}</span><h2>${transaction.merchant}</h2><strong class="detail-amount ${transaction.amount > 0 ? 'positive' : ''}">${formatCurrency(transaction.amount)}</strong><dl><div><dt>Date</dt><dd>${transaction.date}</dd></div><div><dt>Account</dt><dd>${account?.name} &middot; ${account?.lastFour}</dd></div><div><dt>Status</dt><dd>Completed</dd></div></dl><button class="simple-secondary" type="button" data-flow-back>Back to activity</button></div>`;
}

export function simpleFlowScreen(route, data) {
  const titles = { send: 'Send money', bill: 'Pay a bill', transfer: 'Transfer', transaction: 'Transaction details' };
  const content = route.type === 'transaction'
    ? transactionDetail(route, data)
    : route.step === 'review'
      ? flowReview(route, data)
      : route.step === 'complete'
        ? flowComplete(route)
        : route.type === 'send'
          ? sendForm(data, route.presetId, route.payload)
          : route.type === 'bill'
            ? billForm(data, route.presetId, route.payload)
            : transferForm(data, route.payload);
  const stepLabel = route.type === 'transaction' ? 'Recent activity' : route.step === 'review' ? 'Step 2 of 2' : route.step === 'complete' ? 'Finished' : 'Step 1 of 2';
  return `<section class="flow-screen" data-flow-screen="${route.type}">${flowHeader(titles[route.type], stepLabel)}<div class="flow-scroll" tabindex="0">${content}</div></section>`;
}
