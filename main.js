import './styles.css';

const icons = {
  wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 9h15V5H6a3 3 0 0 0-3 3v1Z"/><path d="M16 13h5v4h-5a2 2 0 0 1 0-4Z"/>',
  transfer: '<path d="M7 7h11l-3-3m3 3-3 3"/><path d="M17 17H6l3 3m-3-3 3-3"/><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5c-.5-.8-1.3-1.2-2.5-1.2-1.5 0-2.5.7-2.5 1.8 0 2.8 5.2 1.1 5.2 3.8 0 1.1-1 1.8-2.7 1.8-1.2 0-2.2-.5-2.8-1.4M12 6.8v10.4"/>',
  plan: '<path d="M5 3h11l3 3v15H5z"/><path d="M15 3v4h4M8 11h7M8 15h4"/><path d="m13 18 6-6 2 2-6 6-3 1z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  plus: '<path d="M12 4v16M4 12h16"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
  chat: '<path d="M4 5h13a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5l-4 3v-3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"/><path d="M8 9h7M8 12h5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  dots: '<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 14h4"/>',
  pig: '<path d="M5 11c.8-3.2 3.6-5 7-5 1.5 0 2.8.3 4 .9l3-1-.6 3.2A6 6 0 0 1 20 13c0 2-1.2 3.7-3 4.7V21h-3v-2H9v2H6v-3.3A7 7 0 0 1 3 12H1v-3h3"/><circle cx="15.5" cy="10.5" r=".8" fill="currentColor" stroke="none"/><path d="M8 6V3h3"/>',
  chart: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 16v-3M11 16V9M15 16v-5M19 16V7M6 10l4-3 4 2 5-4"/>',
  car: '<path d="m5 11 2-5h10l2 5"/><path d="M3 12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M6 13h2M16 13h2"/>',
  cash: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 8h.01M18 16h.01"/>',
  bank: '<path d="m3 10 9-6 9 6M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M4 20h16"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  check: '<rect x="3" y="6" width="16" height="12" rx="2"/><path d="M7 10h5M7 14h3"/><circle cx="18" cy="17" r="3"/><path d="M18 15v4m-2-2h4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  users: '<circle cx="9" cy="9" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 7a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  atm: '<path d="M5 4h14v5H5zM7 9h10v11H7z"/><circle cx="12" cy="14" r="2"/><path d="M12 12v4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M7 14h2M11 14h2M15 14h2M7 18h2M11 18h2"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v3h4v-3"/>',
  home: '<path d="m3 11 9-8 9 8v10h-6v-7H9v7H3z"/>',
  gauge: '<path d="M4 17a8 8 0 1 1 16 0"/><path d="m12 14 4-5M8 17h8"/>',
  flower: '<path d="M12 21v-8M12 17c-4 0-6-2-6-5 4 0 6 2 6 5ZM12 15c4 0 6-2 6-5-4 0-6 2-6 5Z"/><circle cx="12" cy="7" r="3"/>',
  pie: '<path d="M12 3v9h9A9 9 0 1 1 12 3Z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15Z"/>'
};

function sprite() {
  return `<svg class="svg-sprite" aria-hidden="true"><defs>${Object.entries(icons)
    .map(([name, paths]) => `<symbol id="icon-${name}" viewBox="0 0 24 24">${paths}</symbol>`)
    .join('')}</defs></svg>`;
}

function icon(name, className = '') {
  return `<svg class="icon ${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function statusBar(theme = 'dark') {
  return `<div class="status-bar status-${theme}" aria-hidden="true">
    <span class="status-time">9:41</span>
    <div class="status-icons"><span class="signal"><i></i><i></i><i></i><i></i></span><span class="wifi">◒</span><span class="battery">84</span></div>
  </div>`;
}

function actionButton(label, iconName, extra = '') {
  return `<button class="action-button demo-action ${extra}" type="button">${icon(iconName)}<span>${label}</span></button>`;
}

function chevronRow(label, iconName) {
  return `<button class="list-row demo-action" type="button">${icon(iconName)}<span>${label}</span>${icon('chevron', 'row-chevron')}</button>`;
}

function accountScreen() {
  return `<section class="screen account-screen" data-screen="accounts" aria-labelledby="accounts-title">
    <header class="account-header sticky-header">
      ${statusBar()}
      <div class="search-row">
        <button class="round-icon demo-action" type="button" aria-label="Add account">${icon('wallet')}<span class="tiny-plus">+</span></button>
        <button class="search-box demo-action" type="button">${icon('search')}<span>What are you looking for?</span></button>
        <button class="round-icon demo-action" type="button" aria-label="Messages">${icon('chat')}</button>
        <button class="round-icon demo-action" type="button" aria-label="Profile">${icon('user')}</button>
      </div>
    </header>
    <div class="screen-scroll" tabindex="0">
      <div class="account-content">
        <div class="quick-actions horizontal-scroll" aria-label="Quick actions">
          <button class="quick-pill demo-action plus-pill" type="button" aria-label="More actions">${icon('plus')}</button>
          <button class="quick-pill demo-action" type="button">Send | Zelle®</button>
          <button class="quick-pill demo-action" type="button">Deposit checks</button>
          <button class="quick-pill demo-action" type="button">Pay bills</button>
        </div>

        <div class="section-heading heading-with-action"><h1 id="accounts-title">Accounts</h1><button class="circle-menu demo-action" type="button" aria-label="Account options">${icon('dots')}</button></div>
        <article class="account-card">
          <div class="account-card-title">Bank accounts (2)</div>
          <button class="balance-row demo-action" type="button"><span><strong>EVERYDAY CHECKING (...4821)</strong></span><span class="balance"><b>$2,418.62</b><small>Available balance</small></span></button>
          <button class="balance-row demo-action" type="button"><span><strong>PERSONAL SAVINGS (...7304)</strong></span><span class="balance"><b>$8,760.00</b><small>Available balance</small></span></button>
          <button class="account-link demo-action" type="button"><span>Link external accounts</span>${icon('chevron')}</button>
        </article>

        <button class="snapshot-card demo-action" type="button">
          <span class="soft-icon">${icon('card')}</span>
          <span><strong>Snapshot <em>1 min read</em></strong><small>Your card usage is $142 this week.</small></span>
          ${icon('chevron')}
        </button>

        <section class="content-section">
          <h2>Explore more products</h2>
          <div class="product-strip horizontal-scroll">
            ${[['pig','Savings & CDs'],['card','Checking'],['wallet','Credit cards'],['chart','Invest on your own'],['car','Auto']].map(([i,l]) => `<button class="product-tile demo-action" type="button">${icon(i)}<span>${l}</span></button>`).join('')}
          </div>
          <div class="align-right"><button class="soft-button demo-action" type="button">Explore products</button></div>
        </section>

        <section class="feature-stack">
          <article class="feature-card">
            <div><h3>Track your spending habits</h3><p>See where your money is going and budget so you can save more.</p></div>
            ${icon('cash', 'feature-art')}
            <button class="soft-button demo-action" type="button">Manage spending</button>
          </article>
          <article class="feature-card">
            <div><h3>Save automatically</h3><p>Build a savings habit with repeat transfers.</p></div>
            ${icon('pig', 'feature-art')}
            <button class="soft-button demo-action" type="button">Go to Autosave</button>
          </article>
          <article class="credit-card-panel">
            <div><h3>See your free credit score</h3><p>Get credit and identity monitoring with Credit Journey®.</p></div>
            <span class="gauge-art">${icon('gauge')}</span>
            <button class="soft-button demo-action" type="button">Get free score</button>
          </article>
        </section>

        <article class="offer-card">
          <div class="shopping-art" role="img" aria-label="Colorful shopping bags"><i></i><i></i><i></i><i></i></div>
          <div><h3>Get ready for cardmember offers</h3><p>Check back for offers from brands you love.</p><button class="primary-button demo-action" type="button">Explore more</button></div>
        </article>

        <article class="invest-card">
          <p>Earn up to</p><strong>$1,000</strong><h3>when you open and fund an online investing account</h3>
          <div><p>Get started with Self-Directed Investing and put your goals in motion.</p><button class="primary-button demo-action" type="button">Learn more</button></div>
        </article>

        <article class="feature-card car-card">
          <div><h3>Auto marketplace</h3><p>Explore financing insights, useful tools, and offers for car owners.</p></div>
          ${icon('car', 'feature-art car-art')}
          <button class="soft-button demo-action" type="button">See details</button>
        </article>

        <section class="content-section visit-section">
          <h2>Visit us</h2>
          ${chevronRow('Schedule a meeting', 'calendar')}
          ${chevronRow('ATM & branch', 'bank')}
        </section>
        <section class="disclosure-section">
          <h2>Disclosures</h2>
          <button class="text-link demo-action" type="button">Read prototype disclosure ${icon('chevron')}</button>
          <p>Investment products and services shown are fictional and included for interface demonstration only.</p>
          <div class="legal-box">THIS IS AN UNOFFICIAL DESIGN PROTOTYPE. NO DEPOSITS, INVESTMENTS, OR BANKING SERVICES ARE PROVIDED.</div>
        </section>
      </div>
    </div>
  </section>`;
}

function transferScreen() {
  const actions = [
    ['card','Pay bills'], ['cash','Send money'], ['bank','Wires & global transfers'],
    ['transfer','Transfer'], ['receipt','Request or split'], ['check','Deposit checks']
  ];
  return `<section class="screen transfer-screen" data-screen="transfer" aria-labelledby="transfer-title">
    <header class="blue-header sticky-header">${statusBar('light')}<h1 id="transfer-title">Pay &amp; Transfer</h1></header>
    <div class="screen-scroll" tabindex="0">
      <div class="transfer-content">
        <div class="transfer-grid">${actions.map(([i,l]) => actionButton(l, i)).join('')}</div>
        <div class="menu-list">
          ${chevronRow('See activity', 'cash')}
          ${chevronRow('Manage recipients', 'users')}
          ${chevronRow('Manage external accounts', 'bank')}
          ${chevronRow('Settings', 'gear')}
        </div>
        <div class="prototype-note"><strong>Prototype only</strong><span>Payments and transfers are visual demonstrations and cannot be submitted.</span></div>
      </div>
    </div>
  </section>`;
}

function chartMarkup() {
  return `<div class="spending-chart" role="img" aria-label="Demo spending line chart comparing this month with last month">
    <svg viewBox="0 0 320 190" preserveAspectRatio="none" aria-hidden="true">
      <path class="chart-previous" d="M8 165 L30 142 L100 142 L118 134 L135 134 L145 120 L170 120 L183 109 L205 109 L214 88 L235 88 L244 56 L268 45 L290 45 L305 28 L316 28"/>
      <path class="chart-current" d="M8 166 L18 142 L36 130 L57 130 L68 112 L87 97 L103 92 L119 80 L139 58 L153 58 L165 44 L184 38 L195 20 L216 20 L226 2 L265 2"/>
      <line x1="266" y1="-4" x2="266" y2="168"/>
    </svg>
    <div class="chart-axis"><span>1</span><span>16</span><span>31</span></div>
  </div>`;
}

function planScreen() {
  return `<section class="screen plan-screen" data-screen="plan" aria-labelledby="plan-title">
    <header class="green-header sticky-header">${statusBar('light')}<h1 id="plan-title">Wealth Plan</h1></header>
    <div class="screen-scroll" tabindex="0">
      <div class="plan-content">
        <section class="goal-hero">
          <div class="landscape-art" aria-hidden="true"><i></i><i></i><i></i></div>
          <article class="goal-callout"><h2>Turn your dreams into goals</h2><p>Dreaming of retiring early? Or buying a home? Create a goal and start making it real.</p><button class="primary-button demo-action" type="button">Set up your first goal</button></article>
        </section>
        <div class="promo-pair">
          <article class="promo-card"><span class="soft-icon">${icon('home')}</span><h3>Save for retirement with an IRA</h3><p>Shape your strategy for the future with a tax-smart account.</p><button class="green-button demo-action" type="button">Learn more</button></article>
          <article class="promo-card"><span class="soft-icon">${icon('chart')}</span><h3>Earn up to $1,000 cash bonus</h3><p>Open and fund a self-directed investing account and get a cash bonus.</p><button class="green-button demo-action" type="button">Learn more</button></article>
        </div>

        <section class="content-section track-section">
          <h2>Track your money</h2>
          <article class="chart-card">
            <div class="chart-tabs" role="tablist" aria-label="Wealth chart">
              <button type="button" role="tab" aria-selected="true" data-chart-tab="spending">Monthly spending</button>
              <button type="button" role="tab" aria-selected="false" data-chart-tab="worth">Net worth history</button>
            </div>
            <div class="chart-copy"><strong data-chart-value>$642.18</strong><p data-chart-label>Your spending as of June 24, 2026</p></div>
            ${chartMarkup()}
            <div class="chart-legend"><span><i class="blue-dot"></i>Jun 24 <b>$642.18</b></span><span><i class="gray-dot"></i>May 24 <b>$518.44</b></span></div>
            <button class="text-link demo-action" type="button">${icon('menu')} See chart as table</button>
          </article>
        </section>

        <section class="content-section glance-section">
          <h2>At a glance</h2>
          <button class="metric-card demo-action" type="button">${icon('pie')}<span><strong>Income &amp; spend</strong><small>Spent so far this month</small></span><b>$642.18</b>${icon('chevron')}</button>
          <button class="metric-card demo-action" type="button">${icon('chart')}<span><strong>Net worth</strong><small>Latest available estimate</small></span><b>$11,178.62</b>${icon('chevron')}</button>
          <button class="checkup-card demo-action" type="button"><span><strong>Investment Checkup</strong><small>See your investment accounts in one place for portfolio insights.</small><em>New</em></span>${icon('flower')}</button>
        </section>

        <section class="content-section goal-list">
          <h2>Reaching your goals</h2>
          <button class="goal-card demo-action" type="button">${icon('home')}<span><strong>Let us make homebuying easier</strong><small>Go from planning your purchase to owning your home.</small></span>${icon('chevron')}</button>
          <button class="goal-card demo-action" type="button">${icon('car')}<span><strong>Ready to buy a car?</strong><small>Search for cars and explore prequalification tools.</small></span>${icon('chevron')}</button>
        </section>

        <section class="stand-section content-section">
          <h2>See where you stand</h2>
          <article class="credit-card-panel white-panel"><div><h3>See your free credit score</h3><p>Get credit and identity monitoring with Credit Journey®.</p></div><span class="gauge-art colorful">${icon('gauge')}</span><button class="soft-button demo-action" type="button">Get free score</button></article>
          <button class="text-link demo-action" type="button">What do you think about Wealth Plan? ${icon('chevron')}</button>
        </section>
        <section class="disclosure-section plan-disclosure">
          <h2>Disclosures</h2>
          <p><strong>IMPORTANT:</strong> All projections, balances, and account information in this prototype are hypothetical and are not guarantees of future results.</p>
          <button class="text-link demo-action" type="button">Read complete disclosures ${icon('chevron')}</button>
          <div class="legal-box">THIS IS AN UNOFFICIAL DESIGN PROTOTYPE. IT DOES NOT OFFER INVESTMENT OR INSURANCE PRODUCTS.</div>
        </section>
      </div>
    </div>
  </section>`;
}

function moreScreen() {
  const products = [['card','Credit card'],['wallet','Checking account'],['pig','Savings/CD account'],['briefcase','Business account'],['home','Mortgage & Equity'],['car','Auto'],['dots','All products'],['receipt','Application status']];
  const support = [['atm','Find ATM & branch'],['calendar','Schedule a meeting'],['chat','Contact us']];
  return `<section class="screen more-screen" data-screen="more" aria-labelledby="more-title">
    <header class="more-header sticky-header">${statusBar('light')}<div><span aria-hidden="true"></span><h1 id="more-title">More</h1><button class="header-link demo-action" type="button">Sign out</button></div></header>
    <div class="screen-scroll" tabindex="0">
      <div class="more-content">
        <section class="more-section"><h2>Open an account</h2><div class="more-grid">${products.map(([i,l]) => actionButton(l,i)).join('')}</div></section>
        <section class="more-section support-section"><h2>Support</h2><div class="more-grid support-grid">${support.map(([i,l]) => actionButton(l,i)).join('')}</div></section>
        <section class="feedback-section"><h2>How do you like the new experience?</h2><button class="feedback-button demo-action" type="button">Share your feedback</button></section>
        <div class="prototype-note"><strong>Unofficial prototype</strong><span>No accounts can be opened and no personal information is collected.</span></div>
      </div>
    </div>
  </section>`;
}

const navItems = [
  { id: 'accounts', label: 'Accounts', icon: 'wallet' },
  { id: 'transfer', label: 'Pay & transfer', icon: 'transfer' },
  { id: 'plan', label: 'Plan & track', icon: 'plan' },
  { id: 'more', label: 'More', icon: 'menu' }
];

const app = document.querySelector('#app');
app.innerHTML = `${sprite()}<main class="app-shell">
  <div class="screens" aria-live="polite">${accountScreen()}${transferScreen()}${planScreen()}${moreScreen()}</div>
  <nav class="bottom-nav" aria-label="Primary navigation">
    ${navItems.map((item) => `<button type="button" data-tab="${item.id}" aria-label="${item.label}" aria-current="${item.id === 'accounts' ? 'page' : 'false'}">${icon(item.icon)}<span>${item.label}</span></button>`).join('')}
  </nav>
  <div class="toast" role="status" aria-live="polite" aria-hidden="true">Demo action only</div>
</main>`;

let activeTab = 'accounts';
const scrollPositions = Object.fromEntries(navItems.map(({ id }) => [id, 0]));
const screenElements = Object.fromEntries([...document.querySelectorAll('[data-screen]')].map((el) => [el.dataset.screen, el]));
const navButtons = [...document.querySelectorAll('[data-tab]')];
let toastTimer;

function switchTab(nextTab) {
  if (!screenElements[nextTab] || nextTab === activeTab) return;
  const currentScroll = screenElements[activeTab].querySelector('.screen-scroll');
  scrollPositions[activeTab] = currentScroll.scrollTop;
  screenElements[activeTab].classList.remove('is-active');
  screenElements[nextTab].classList.add('is-active');
  navButtons.forEach((button) => button.setAttribute('aria-current', button.dataset.tab === nextTab ? 'page' : 'false'));
  activeTab = nextTab;
  requestAnimationFrame(() => {
    screenElements[nextTab].querySelector('.screen-scroll').scrollTop = scrollPositions[nextTab];
  });
}

function showToast(message = 'This control is visual only in the prototype.') {
  const toast = document.querySelector('.toast');
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.setAttribute('aria-hidden', 'false');
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.setAttribute('aria-hidden', 'true');
  }, 2200);
}

navButtons.forEach((button) => button.addEventListener('click', () => switchTab(button.dataset.tab)));
document.querySelectorAll('.demo-action').forEach((button) => button.addEventListener('click', () => showToast()));

document.querySelectorAll('[data-chart-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.chart-card');
    card.querySelectorAll('[data-chart-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === button)));
    const worth = button.dataset.chartTab === 'worth';
    card.querySelector('[data-chart-value]').textContent = worth ? '$11,178.62' : '$642.18';
    card.querySelector('[data-chart-label]').textContent = worth ? 'Your estimated net worth as of June 24, 2026' : 'Your spending as of June 24, 2026';
    card.classList.toggle('show-worth', worth);
  });
});

screenElements[activeTab].classList.add('is-active');
