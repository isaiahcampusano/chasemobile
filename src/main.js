import './styles.css';
import './simple-mode.css';
import { icon, sprite } from './icons.js';
import { createDemoData } from './data.js';
import { simpleNavItems, simpleScreens, simpleFlowScreen } from './simple-mode.js';

function statusBar(theme = 'dark') {
  return `<div class="status-bar status-${theme}" aria-hidden="true">
    <span class="status-time">9:41</span>
    <div class="status-icons"><span class="signal"><i></i><i></i><i></i><i></i></span><span class="wifi">Wi-Fi</span><span class="battery">84</span></div>
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
          <button class="quick-pill demo-action" type="button">Send | Zelle&reg;</button>
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
            ${[['pig', 'Savings & CDs'], ['card', 'Checking'], ['wallet', 'Credit cards'], ['chart', 'Invest on your own'], ['car', 'Auto']].map(([i, l]) => `<button class="product-tile demo-action" type="button">${icon(i)}<span>${l}</span></button>`).join('')}
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
            <div><h3>See your free credit score</h3><p>Get credit and identity monitoring with Credit Journey&reg;.</p></div>
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
    ['card', 'Pay bills'], ['cash', 'Send money'], ['bank', 'Wires & global transfers'],
    ['transfer', 'Transfer'], ['receipt', 'Request or split'], ['check', 'Deposit checks']
  ];
  return `<section class="screen transfer-screen" data-screen="transfer" aria-labelledby="transfer-title">
    <header class="blue-header sticky-header">${statusBar('light')}<h1 id="transfer-title">Pay &amp; Transfer</h1></header>
    <div class="screen-scroll" tabindex="0">
      <div class="transfer-content">
        <div class="transfer-grid">${actions.map(([i, l]) => actionButton(l, i)).join('')}</div>
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
          <article class="credit-card-panel white-panel"><div><h3>See your free credit score</h3><p>Get credit and identity monitoring with Credit Journey&reg;.</p></div><span class="gauge-art colorful">${icon('gauge')}</span><button class="soft-button demo-action" type="button">Get free score</button></article>
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
  const products = [['card', 'Credit card'], ['wallet', 'Checking account'], ['pig', 'Savings/CD account'], ['briefcase', 'Business account'], ['home', 'Mortgage & Equity'], ['car', 'Auto'], ['dots', 'All products'], ['receipt', 'Application status']];
  const support = [['atm', 'Find ATM & branch'], ['calendar', 'Schedule a meeting'], ['chat', 'Contact us']];
  return `<section class="screen more-screen" data-screen="more" aria-labelledby="more-title">
    <header class="more-header sticky-header">${statusBar('light')}<div><span aria-hidden="true"></span><h1 id="more-title">More</h1><button class="header-link demo-action" type="button">Sign out</button></div></header>
    <div class="screen-scroll" tabindex="0">
      <div class="more-content">
        <section class="more-section"><h2>Open an account</h2><div class="more-grid">${products.map(([i, l]) => actionButton(l, i)).join('')}</div></section>
        <section class="more-section support-section"><h2>Support</h2><div class="more-grid support-grid">${support.map(([i, l]) => actionButton(l, i)).join('')}</div></section>
        <section class="feedback-section"><h2>How do you like the new experience?</h2><button class="feedback-button demo-action" type="button">Share your feedback</button></section>
        <div class="prototype-note"><strong>Unofficial prototype</strong><span>No accounts can be opened and no personal information is collected.</span></div>
      </div>
    </div>
  </section>`;
}

const currentNavItems = [
  { id: 'accounts', label: 'Accounts', icon: 'wallet' },
  { id: 'transfer', label: 'Pay & transfer', icon: 'transfer' },
  { id: 'plan', label: 'Plan & track', icon: 'plan' },
  { id: 'more', label: 'More', icon: 'menu' }
];

const app = document.querySelector('#app');
const requestedMode = new URLSearchParams(window.location.search).get('mode');
let currentMode = requestedMode === 'simple' ? 'simple' : 'current';
let demoData = createDemoData();
let toastTimer;

const modeStates = {
  current: {
    activeTab: 'accounts',
    scrollPositions: Object.fromEntries(currentNavItems.map(({ id }) => [id, 0])),
    flowStack: [],
    chartTab: 'spending'
  },
  simple: {
    activeTab: 'account',
    scrollPositions: Object.fromEntries(simpleNavItems.map(({ id }) => [id, 0])),
    flowStack: []
  }
};

function phoneShellMarkup(mode, role, label) {
  return `<section class="comparison-phone ${role === 'primary' ? 'comparison-active' : 'comparison-preview'}" data-phone-mode="${mode}" data-phone-role="${role}">
    <header class="comparison-phone-header">
      <span>${mode === 'current' ? 'Current' : 'Simple'}</span>
      <strong>${label}</strong>
    </header>
    <div class="comparison-phone-frame">
      <main class="app-shell" data-mode="${mode}" data-shell-role="${role}">
        <div class="screens" ${role === 'primary' ? 'aria-live="polite"' : ''}></div>
        <nav class="bottom-nav" aria-label="Primary navigation"></nav>
        <div class="toast" role="status" aria-live="polite" aria-hidden="true">Demo action only</div>
      </main>
    </div>
  </section>`;
}

function comparisonDesktopHeaderMarkup() {
  return `<header class="comparison-topbar" aria-label="Current versus Simple prototype controls">
    <div class="comparison-intro">
      <p class="comparison-kicker">Usability prototype</p>
      <h1>Current vs. Simple</h1>
    </div>
    <div class="comparison-controls" aria-label="Prototype controls">
      <span class="comparison-controls-label">Active demo</span>
      <div class="mode-switch" role="group" aria-label="Choose experience">
        <button type="button" data-mode="current">Current</button>
        <button type="button" data-mode="simple">Simple</button>
      </div>
      <button class="reset-session" type="button" data-reset-session aria-label="Reset session">${icon('rotate')}<span>Reset</span></button>
    </div>
  </header>`;
}

app.innerHTML = `${sprite()}<div class="prototype-layout">
  <section class="prototype-mobile">
    <aside class="prototype-toolbar" aria-label="Prototype controls">
      <div class="prototype-identity"><strong>Current vs. Simple</strong><span>Usability prototype</span></div>
      <div class="mode-switch" role="group" aria-label="Choose experience">
        <button type="button" data-mode="current">Current</button>
        <button type="button" data-mode="simple">Simple</button>
      </div>
      <button class="reset-session" type="button" data-reset-session aria-label="Reset session">${icon('rotate')}<span>Reset</span></button>
    </aside>
    ${phoneShellMarkup(currentMode, 'primary', 'Active demo')}
  </section>
  <section class="comparison-desktop" aria-label="Desktop comparison view">
    ${comparisonDesktopHeaderMarkup()}
    <div class="comparison-stage">
      ${phoneShellMarkup('current', 'desktop-current', 'Full app')}
      ${phoneShellMarkup('simple', 'desktop-simple', 'Simple mode')}
    </div>
  </section>
</div>`;

const shell = app.querySelector('[data-shell-role="primary"]');
const screensRoot = shell.querySelector('.screens');
const navRoot = shell.querySelector('.bottom-nav');

function currentScreens() {
  return `${accountScreen()}${transferScreen()}${planScreen()}${moreScreen()}`;
}

function activeState() {
  return modeStates[currentMode];
}

function navItemsForMode() {
  return currentMode === 'current' ? currentNavItems : simpleNavItems;
}

function saveActiveScroll() {
  const state = activeState();
  const activeScroll = screensRoot.querySelector('.screen.is-active .screen-scroll');
  if (activeScroll) state.scrollPositions[state.activeTab] = activeScroll.scrollTop;
}

function restoreActiveScroll() {
  const state = activeState();
  requestAnimationFrame(() => {
    const activeScroll = screensRoot.querySelector('.screen.is-active .screen-scroll');
    if (activeScroll) activeScroll.scrollTop = state.scrollPositions[state.activeTab] || 0;
  });
}

function applyChartState(root, chartTab = 'spending') {
  const worth = chartTab === 'worth';
  const card = root.querySelector('.chart-card');
  if (!card) return;
  card.querySelectorAll('[data-chart-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.chartTab === chartTab)));
  card.querySelector('[data-chart-value]').textContent = worth ? '$11,178.62' : '$642.18';
  card.querySelector('[data-chart-label]').textContent = worth ? 'Your estimated net worth as of June 24, 2026' : 'Your spending as of June 24, 2026';
  card.classList.toggle('show-worth', worth);
}

function updateToolbar() {
  app.querySelectorAll('[data-mode]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.mode === currentMode)));
  app.querySelectorAll('.comparison-phone').forEach((phone) => {
    phone.classList.toggle('is-highlighted', phone.dataset.phoneMode === currentMode);
  });
}

function previewTabForMode(mode) {
  return mode === 'current' ? 'accounts' : 'account';
}

function renderScreensInto(root, mode, { flowRoute = null, activeTab = previewTabForMode(mode), chartTab = 'spending', interactive = false } = {}) {
  const screens = root.querySelector('.screens');
  const nav = root.querySelector('.bottom-nav');
  const items = mode === 'current' ? currentNavItems : simpleNavItems;
  root.dataset.mode = mode;
  root.classList.toggle('has-flow', Boolean(flowRoute));

  if (flowRoute) {
    screens.innerHTML = simpleFlowScreen(flowRoute, demoData);
    nav.innerHTML = '';
    nav.hidden = true;
    return;
  }

  screens.innerHTML = mode === 'current' ? currentScreens() : simpleScreens(demoData);
  nav.hidden = false;
  nav.dataset.count = String(items.length);
  nav.innerHTML = items.map((item) => `<button type="button" ${interactive ? `data-tab="${item.id}"` : ''} aria-label="${item.label}" aria-current="${item.id === activeTab ? 'page' : 'false'}">${icon(item.icon)}<span>${item.label}</span></button>`).join('');
  screens.querySelector(`[data-screen="${activeTab}"]`)?.classList.add('is-active');

  if (mode === 'current') {
    applyChartState(screens, chartTab);
  }
}

function renderDesktopComparison() {
  const currentShell = app.querySelector('[data-shell-role="desktop-current"]');
  const simpleShell = app.querySelector('[data-shell-role="desktop-simple"]');
  const primaryMode = currentMode;
  const secondaryMode = currentMode === 'current' ? 'simple' : 'current';
  const primaryShell = primaryMode === 'current' ? currentShell : simpleShell;
  const secondaryShell = primaryMode === 'current' ? simpleShell : currentShell;

  renderScreensInto(primaryShell, primaryMode, {
    flowRoute: primaryMode === 'simple' ? activeState().flowStack.at(-1) || null : null,
    activeTab: activeState().activeTab,
    chartTab: modeStates.current.chartTab,
    interactive: true
  });

  renderScreensInto(secondaryShell, secondaryMode, {
    activeTab: previewTabForMode(secondaryMode),
    chartTab: 'spending'
  });
}

function renderMode() {
  const state = activeState();
  const route = state.flowStack[state.flowStack.length - 1];

  renderScreensInto(shell, currentMode, {
    flowRoute: route,
    activeTab: state.activeTab,
    chartTab: modeStates.current.chartTab,
    interactive: true
  });

  if (!route) {
    restoreActiveScroll();
  }

  renderDesktopComparison();
  updateToolbar();
}

function switchTab(nextTab) {
  const state = activeState();
  const nextScreen = screensRoot.querySelector(`[data-screen="${nextTab}"]`);
  if (!nextScreen || nextTab === state.activeTab) return;
  saveActiveScroll();
  screensRoot.querySelector('.screen.is-active')?.classList.remove('is-active');
  nextScreen.classList.add('is-active');
  state.activeTab = nextTab;
  state.flowStack = [];
  navRoot.querySelectorAll('[data-tab]').forEach((button) => button.setAttribute('aria-current', button.dataset.tab === nextTab ? 'page' : 'false'));
  restoreActiveScroll();
  renderDesktopComparison();
}

function setMode(nextMode) {
  if (!modeStates[nextMode] || nextMode === currentMode) return;
  saveActiveScroll();
  currentMode = nextMode;
  const state = activeState();
  state.activeTab = nextMode === 'current' ? 'accounts' : 'account';
  state.flowStack = [];
  const url = new URL(window.location.href);
  url.searchParams.set('mode', nextMode);
  window.history.replaceState({}, '', url);
  renderMode();
}

function resetSession(message = `${currentMode === 'current' ? 'Current' : 'Simple'} session reset.`) {
  demoData = createDemoData();
  const state = activeState();
  state.activeTab = currentMode === 'current' ? 'accounts' : 'account';
  state.scrollPositions = Object.fromEntries(navItemsForMode().map(({ id }) => [id, 0]));
  state.flowStack = [];
  if (currentMode === 'current') state.chartTab = 'spending';
  renderMode();
  showToast(message);
}

function openSimpleRoute(route, { replace = true } = {}) {
  if (currentMode !== 'simple') return;
  saveActiveScroll();
  if (replace) {
    modeStates.simple.flowStack = [route];
  } else {
    modeStates.simple.flowStack.push(route);
  }
  renderMode();
}

function openSimpleTab(nextTab) {
  if (currentMode !== 'simple') return;
  modeStates.simple.activeTab = nextTab;
  modeStates.simple.scrollPositions[nextTab] = 0;
  modeStates.simple.flowStack = [];
  renderMode();
}

function openFlow(button) {
  if (currentMode !== 'simple') return;
  const route = button.dataset.transactionId
    ? { type: 'transaction', step: 'detail', transactionId: button.dataset.transactionId }
    : { type: button.dataset.flow, step: 'form', presetId: button.dataset.recipient || button.dataset.bill || '' };
  const replace = !button.dataset.transactionId || modeStates.simple.flowStack.length === 0;
  openSimpleRoute(route, { replace });
}

function openSettingsSection(button) {
  const sectionIndex = Number(button.dataset.settingsSection);
  openSimpleRoute({ type: 'settings', sectionIndex: Number.isNaN(sectionIndex) ? 0 : sectionIndex });
}

function handleSimpleAction(button) {
  if (currentMode !== 'simple') return false;
  const action = button.dataset.action;
  if (!action) return false;
  if (action === 'view-profile' || action === 'view-more') {
    openSimpleTab('more');
    return true;
  }
  if (action === 'get-help') {
    openSimpleRoute({ type: 'help' });
    return true;
  }
  if (action === 'view-all-transactions') {
    openSimpleTab('track');
    return true;
  }
  if (action === 'open-settings-tab' || action === 'open-more-tab') {
    openSimpleTab('more');
    return true;
  }
  if (action === 'open-pay-tab') {
    openSimpleTab('pay');
    return true;
  }
  if (action === 'open-assistant-tab') {
    openSimpleTab('assistant');
    return true;
  }
  if (action === 'share-with-helper' || action === 'trusted-helper-review') {
    showToast('A trusted helper review would start here in the full app.');
    return true;
  }
  if (action === 'contact-support') {
    showToast('Chase support would open here in the full app.');
    return true;
  }
  if (action === 'sign-out') {
    if (window.confirm('Are you sure you want to sign out?')) {
      resetSession('Signed out of the demo.');
    }
    return true;
  }
  return false;
}

function flowBack() {
  const stack = modeStates.simple.flowStack;
  stack.pop();
  renderMode();
}

function continueFlow(button) {
  const form = button.closest('.flow-screen')?.querySelector('form');
  if (!form || !form.reportValidity()) return;
  const payload = Object.fromEntries(new FormData(form));
  if (form.dataset.flowForm === 'transfer' && payload.fromAccount === payload.toAccount) {
    showToast('Choose two different accounts.');
    return;
  }
  const amount = Number(payload.amount);
  if (!Number.isFinite(amount) || amount <= 0 || amount > 5000) return;
  const formRoute = modeStates.simple.flowStack.at(-1);
  formRoute.payload = payload;
  modeStates.simple.flowStack.push({ type: form.dataset.flowForm, step: 'review', payload });
  renderMode();
}

function confirmFlow() {
  const route = modeStates.simple.flowStack.at(-1);
  modeStates.simple.flowStack.push({ ...route, step: 'complete' });
  renderMode();
}

function finishFlow() {
  modeStates.simple.activeTab = 'account';
  modeStates.simple.scrollPositions.account = 0;
  modeStates.simple.flowStack = [];
  renderMode();
}

function showToast(message = 'This control is visual only in the prototype.') {
  const toast = app.querySelector('.comparison-phone.is-highlighted .toast') || shell.querySelector('.toast');
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.setAttribute('aria-hidden', 'false');
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.setAttribute('aria-hidden', 'true');
  }, 2200);
}

app.addEventListener('submit', (event) => event.preventDefault());

app.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.mode) return setMode(button.dataset.mode);
  if (button.hasAttribute('data-reset-session')) return resetSession();
  if (button.dataset.tab) return switchTab(button.dataset.tab);
  if (button.dataset.settingsSection) return openSettingsSection(button);
  if (button.dataset.flow || button.dataset.transactionId) return openFlow(button);
  if (button.hasAttribute('data-flow-back')) return flowBack();
  if (button.hasAttribute('data-continue-flow')) return continueFlow(button);
  if (button.hasAttribute('data-confirm-flow')) return confirmFlow();
  if (button.hasAttribute('data-flow-done')) return finishFlow();
  if (button.dataset.action && handleSimpleAction(button)) return;
  if (button.dataset.chartTab) {
    const card = button.closest('.chart-card');
    const chartRoot = button.closest('.screens') || screensRoot;
    card.querySelectorAll('[data-chart-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === button)));
    modeStates.current.chartTab = button.dataset.chartTab;
    applyChartState(chartRoot, modeStates.current.chartTab);
    renderDesktopComparison();
    return;
  }
  if (button.classList.contains('demo-action')) showToast();
});

renderMode();
