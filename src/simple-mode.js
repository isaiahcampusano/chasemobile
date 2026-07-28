import { icon } from './icons.js';
import { formatCurrency } from './data.js';

export const simpleNavItems = [
  { id: 'pay', label: 'Pay', icon: 'transfer' },
  { id: 'account', label: 'Account', icon: 'wallet' },
  { id: 'assistant', label: 'Assistant', icon: 'chat' },
  { id: 'track', label: 'Track', icon: 'chart' },
  { id: 'more', label: 'More', icon: 'dots' }
];

function statusBar() {
  return `<div class="status-bar status-dark" aria-hidden="true">
    <span class="status-time">9:41</span>
    <div class="status-icons"><span class="signal"><i></i><i></i><i></i><i></i></span><span class="wifi">Wi-Fi</span><span class="battery">84</span></div>
  </div>`;
}

function simpleHeader() {
  return `<header class="simple-header sticky-header">
    ${statusBar()}
    <div class="simple-global-row">
      <button class="simple-header-button" type="button" data-action="view-more" aria-label="Open menu">${icon('menu')}</button>
      <span class="simple-chase-logo" role="img" aria-label="Chase"><span class="chase-mark" aria-hidden="true"></span></span>
      <button class="simple-avatar" type="button" data-action="view-more" aria-label="Open profile">${icon('user')}</button>
    </div>
  </header>`;
}

function pageHeading(eyebrow, title, description = '') {
  return `<div class="simple-page-heading">
    ${eyebrow ? `<p class="simple-page-eyebrow">${eyebrow}</p>` : ''}
    <h1>${title}</h1>
    ${description ? `<p>${description}</p>` : ''}
  </div>`;
}

function transactionRows(data, limit = data.transactions.length) {
  return data.transactions.slice(0, limit).map((transaction) => `<button class="transaction-row" type="button" data-transaction-id="${transaction.id}">
    <span class="transaction-mark">${transaction.merchant.slice(0, 1)}</span>
    <span><strong>${transaction.merchant}</strong><small>${transaction.date}</small></span>
    <b class="${transaction.amount > 0 ? 'positive' : ''}">${formatCurrency(transaction.amount)}</b>
    ${icon('chevron')}
  </button>`).join('');
}

function accountScreen(data) {
  const total = data.accounts.reduce((sum, account) => sum + account.balance, 0);
  const frequentRecipient = data.recipients[0];
  const nextBill = data.bills[0];

  return `<section class="screen simple-screen simple-account" data-screen="account" aria-label="Account">
    ${simpleHeader()}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content simple-account-content">
        ${pageHeading('Simple Mode', 'Account', 'Your balances and the actions you use most.')}

        <section class="simple-overview-card" aria-labelledby="simple-account-balance">
          <div class="simple-balance-hero">
            <span>Available balance</span>
            <h2 id="simple-account-balance">${formatCurrency(total)}</h2>
            <p>Across ${data.accounts.length} accounts</p>
          </div>

          <div class="simple-account-list" aria-label="Bank accounts">
            ${data.accounts.map((account) => `<article class="simple-account-row">
              <span class="simple-account-icon">${icon(account.id === 'checking' ? 'wallet' : 'pig')}</span>
              <span><strong>${account.name}</strong><small>Ending in ${account.lastFour}</small></span>
              <b>${formatCurrency(account.balance)}</b>
            </article>`).join('')}
          </div>
        </section>

        <section class="simple-section simple-shortcuts-section" aria-labelledby="shortcut-title">
          <div class="simple-section-heading"><h2 id="shortcut-title">Shortcuts</h2><span class="simple-section-note">Based on your activity</span></div>
          <div class="simple-shortcuts">
            <button class="simple-shortcut" type="button" data-flow="send" data-recipient="${frequentRecipient.id}">
              <span class="simple-shortcut-icon">${icon('cash')}</span>
              <span><strong>Send to ${frequentRecipient.name}</strong><small>Last sent ${frequentRecipient.lastSent}</small></span>
              ${icon('chevron')}
            </button>
            <button class="simple-shortcut" type="button" data-flow="bill" data-bill="${nextBill.id}">
              <span class="simple-shortcut-icon">${icon('receipt')}</span>
              <span><strong>Pay ${nextBill.payee}</strong><small>Due ${nextBill.due} &middot; ${formatCurrency(nextBill.amount)}</small></span>
              ${icon('chevron')}
            </button>
          </div>
        </section>

        <section class="simple-section latest-activity-section" aria-labelledby="latest-activity-title">
          <div class="simple-section-heading"><h2 id="latest-activity-title">Latest activity</h2><button type="button" data-action="view-all-transactions" aria-label="View all activity">See all</button></div>
          <div class="transaction-list">${transactionRows(data, 1)}</div>
        </section>
      </div>
    </div>
  </section>`;
}

function payScreen() {
  return `<section class="screen simple-screen simple-pay" data-screen="pay" aria-label="Pay">
    ${simpleHeader()}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content">
        ${pageHeading('Money movement', 'Pay', 'Choose one task. We will show the details before anything moves.')}
        <div class="simple-task-stack">
          <button type="button" data-flow="send">${icon('cash')}<span><strong>Send money</strong><small>Send money to someone you know</small></span>${icon('chevron')}</button>
          <button type="button" data-flow="bill">${icon('receipt')}<span><strong>Pay a bill</strong><small>Choose a bill and review the amount</small></span>${icon('chevron')}</button>
          <button type="button" data-flow="transfer">${icon('transfer')}<span><strong>Transfer</strong><small>Move money between your accounts</small></span>${icon('chevron')}</button>
        </div>
      </div>
    </div>
  </section>`;
}

function assistantScreen(data) {
  const latestCharge = data.transactions.find((transaction) => transaction.amount < 0);
  return `<section class="screen simple-screen simple-assistant" data-screen="assistant" aria-label="Assistant">
    ${simpleHeader()}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content">
        ${pageHeading('Support', 'Assistant', 'Get a plain-language explanation before you act.')}
        <article class="assistant-callout">
          <span>${icon('chat')}</span>
          <div><strong>Need help with a charge?</strong><p>${latestCharge ? `${latestCharge.merchant} is your latest charge for ${formatCurrency(Math.abs(latestCharge.amount))}.` : 'Review a recent charge with a little more context.'}</p></div>
        </article>
        <div class="simple-settings-list detail-action-list">
          <button type="button" data-action="get-help" aria-label="Explain a recent charge">${icon('receipt')}<span>Explain a recent charge</span>${icon('chevron')}</button>
          <button type="button" data-action="share-with-helper" aria-label="Share with trusted helper">${icon('user')}<span>Share with trusted helper</span>${icon('chevron')}</button>
          <button type="button" data-action="contact-support" aria-label="Contact Chase support">${icon('chat')}<span>Contact Chase support</span>${icon('chevron')}</button>
        </div>
      </div>
    </div>
  </section>`;
}

function trackScreen(data) {
  const upcomingBills = `${data.bills.length} bills due by ${data.bills[data.bills.length - 1]?.due}`;
  return `<section class="screen simple-screen simple-track" data-screen="track" aria-label="Track">
    ${simpleHeader()}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content">
        ${pageHeading('Account overview', 'Track', 'See what has happened and what is coming up.')}
        <section class="simple-safety-grid" aria-label="Upcoming bills">
          <article>
            <span class="simple-safety-icon">${icon('receipt')}</span>
            <div><strong>Upcoming bills</strong><span>${upcomingBills}</span></div>
            <button type="button" data-action="open-pay-tab">Pay a bill</button>
          </article>
        </section>
        <section class="simple-section track-activity-section" aria-labelledby="track-activity-title">
          <div class="simple-section-heading"><h2 id="track-activity-title">Recent activity</h2><span class="simple-section-note">${data.transactions.length} items</span></div>
          <div class="transaction-list">${transactionRows(data)}</div>
        </section>
      </div>
    </div>
  </section>`;
}

const settingsSections = [
  {
    icon: 'shield',
    label: 'Simple Mode controls',
    description: 'Adjust how the prototype simplifies language, buttons, and review steps before money moves.',
    items: [['Large text and buttons', 'On'], ['Plain-language reviews', 'On'], ['Extra payment review', 'On']]
  },
  {
    icon: 'bell',
    label: 'Notifications',
    description: 'Choose which reminders stay visible in Simple Mode so important updates stand out.',
    items: [['Bill reminders', 'On'], ['Payment confirmations', 'On'], ['Low balance alerts', 'On']]
  },
  {
    icon: 'user',
    label: 'Trusted helper',
    description: 'Manage who can review a transfer with you and when the app should ask for another set of eyes.',
    items: [['Primary helper', 'Ready'], ['New payee reviews', 'On'], ['Large amount checks', 'On']]
  },
  {
    icon: 'shield',
    label: 'Card controls',
    description: 'Keep everyday card actions in one place with simple labels and clear next steps.',
    items: [['Card lock', 'Available'], ['Travel notices', 'Available'], ['Merchant alerts', 'On']]
  },
  {
    icon: 'document',
    label: 'Statements & documents',
    description: 'Find saved paperwork with shorter labels and fewer steps to open the right document.',
    items: [['Monthly statements', 'Ready'], ['Tax documents', 'Ready'], ['Shared copies', 'Available']]
  }
];

function aboutSimpleMode() {
  return `<article class="simple-about-panel">
    <span class="simple-about-icon">${icon('shield')}</span>
    <div>
      <p class="detail-kicker">About this feature</p>
      <h2>Simple Mode</h2>
      <p>Fewer choices, clearer details, and one extra review before money moves.</p>
    </div>
    <ul>
      <li>Large buttons and plain-language labels</li>
      <li>Essential account details stay easy to find</li>
      <li>A trusted helper can review an unusual payment</li>
    </ul>
  </article>`;
}

function moreScreen(data) {
  const total = data.accounts.reduce((sum, account) => sum + account.balance, 0);
  return `<section class="screen simple-screen simple-more" data-screen="more" aria-label="More">
    ${simpleHeader()}
    <div class="screen-scroll" tabindex="0">
      <div class="simple-content">
        ${pageHeading('Account menu', 'More', 'Preferences and lower-frequency account tools.')}
        <div class="settings-profile"><span class="simple-avatar large">${icon('user')}</span><span><strong>Demo customer</strong><small>Available balance ${formatCurrency(total)}</small></span></div>
        ${aboutSimpleMode()}
        <div class="simple-settings-list">
          ${settingsSections.map(({ icon: iconName, label }, index) => `<button type="button" data-settings-section="${index}" aria-label="Open ${label}">${icon(iconName)}<span>${label}</span>${icon('chevron')}</button>`).join('')}
          <button class="sign-out-row" type="button" data-action="sign-out" aria-label="Sign out">${icon('logout')}<span>Sign out</span>${icon('chevron')}</button>
        </div>
        <p class="settings-note">Prototype only. Simple Mode shows how Chase could support seniors, kids, and caregivers without changing the underlying account.</p>
      </div>
    </div>
  </section>`;
}

export function simpleScreens(data) {
  return `${payScreen()}${accountScreen(data)}${assistantScreen(data)}${trackScreen(data)}${moreScreen(data)}`;
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
  return `<div class="flow-review"><div class="review-amount"><span>Review amount</span><strong>${amount}</strong></div><dl>${rows.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('')}</dl><div class="demo-warning"><strong>Simple Mode check</strong><span>We show the recipient, account, and amount one more time. For a new person or unusual amount, Chase could ask a trusted helper to review.</span></div><button class="simple-continue" type="button" data-confirm-flow>Confirm demo</button><button class="simple-secondary" type="button" data-action="trusted-helper-review">Ask trusted helper</button></div>`;
}

function flowComplete(route) {
  const labels = { send: 'Send money', bill: 'Bill payment', transfer: 'Transfer' };
  return `<div class="flow-complete"><span class="complete-mark">${icon('check')}</span><p>Demo complete</p><h2>${labels[route.type]} reviewed</h2><p>No money moved and no banking activity was created.</p><button class="simple-continue" type="button" data-flow-done>Return to Account</button></div>`;
}

function transactionDetail(route, data) {
  const transaction = data.transactions.find((item) => item.id === route.transactionId);
  const account = data.accounts.find((item) => item.id === transaction?.accountId);
  if (!transaction) return '<p class="empty-state">Transaction not found.</p>';
  return `<div class="transaction-detail"><span class="transaction-mark large">${transaction.merchant.slice(0, 1)}</span><h2>${transaction.merchant}</h2><strong class="detail-amount ${transaction.amount > 0 ? 'positive' : ''}">${formatCurrency(transaction.amount)}</strong><dl><div><dt>Date</dt><dd>${transaction.date}</dd></div><div><dt>Account</dt><dd>${account?.name} &middot; ${account?.lastFour}</dd></div><div><dt>Status</dt><dd>Completed</dd></div></dl><button class="simple-secondary" type="button" data-flow-back>Go back</button></div>`;
}

function helpScreen(data) {
  const latestCharge = data.transactions.find((transaction) => transaction.amount < 0);
  return `<div class="detail-stack">
    <article class="detail-hero">
      <p class="detail-kicker">Charge support</p>
      <h2>Get help before you act</h2>
      <p>Simple Mode keeps the next step clear when a recent charge looks unfamiliar.</p>
    </article>
    <article class="detail-card">
      <strong>Latest charge to review</strong>
      <p>${latestCharge ? `${latestCharge.merchant} for ${formatCurrency(Math.abs(latestCharge.amount))} on ${latestCharge.date}` : 'No recent charges need review right now.'}</p>
    </article>
    <div class="simple-settings-list detail-action-list">
      <button type="button" data-action="view-all-transactions" aria-label="Review recent activity">${icon('receipt')}<span>Review recent activity</span>${icon('chevron')}</button>
      <button type="button" data-action="share-with-helper" aria-label="Share with trusted helper">${icon('user')}<span>Share with trusted helper</span>${icon('chevron')}</button>
      <button type="button" data-action="contact-support" aria-label="Contact Chase support">${icon('chat')}<span>Contact Chase support</span>${icon('chevron')}</button>
    </div>
  </div>`;
}

function settingsDetailScreen(route) {
  const section = settingsSections[route.sectionIndex] || settingsSections[0];
  return `<div class="detail-stack">
    <article class="detail-hero">
      <p class="detail-kicker">Settings</p>
      <h2>${section.label}</h2>
      <p>${section.description}</p>
    </article>
    <div class="simple-controls-card">
      ${section.items.map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`).join('')}
    </div>
  </div>`;
}

export function simpleFlowScreen(route, data) {
  const titles = {
    send: 'Send money',
    bill: 'Pay a bill',
    transfer: 'Transfer',
    transaction: 'Transaction details',
    help: 'Assistant',
    settings: settingsSections[route.sectionIndex]?.label || 'Settings'
  };
  const content = route.type === 'transaction'
    ? transactionDetail(route, data)
    : route.type === 'help'
      ? helpScreen(data)
      : route.type === 'settings'
        ? settingsDetailScreen(route)
        : route.step === 'review'
          ? flowReview(route, data)
          : route.step === 'complete'
            ? flowComplete(route)
            : route.type === 'send'
              ? sendForm(data, route.presetId, route.payload)
              : route.type === 'bill'
                ? billForm(data, route.presetId, route.payload)
                : transferForm(data, route.payload);
  const stepLabel = route.type === 'transaction'
    ? 'Track'
    : route.type === 'help'
      ? 'Assistant'
      : route.type === 'settings'
        ? 'More'
        : route.step === 'review'
          ? 'Step 2 of 2'
          : route.step === 'complete'
            ? 'Finished'
            : 'Step 1 of 2';
  return `<section class="flow-screen" data-flow-screen="${route.type}">${flowHeader(titles[route.type], stepLabel)}<div class="flow-scroll" tabindex="0">${content}</div></section>`;
}
