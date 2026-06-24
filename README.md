# Chase Mobile UI Prototype — Full Plan (Reconciled)

> Combines the Codex Phase 1 delivery spec with the Phase 2 Simple Mode redesign.

---

## Stack (set by Codex — do not change for either phase)

| | |
|---|---|
| Bundler | Vite |
| Language | Vanilla JS (ES modules) |
| Styling | Plain CSS with CSS custom properties (tokens) |
| Icons | Custom SVG — no external icon libraries |
| No auth, no banking APIs, no credentials | |
| Viewport targets | 390×844 (iPhone 14) and 430×932 (iPhone 14 Plus) |

---

## Phase 1 — High-Fidelity Chase App (Codex delivery)

### Tab Structure & Visual Sequences

Codex builds these four tabs in this exact order of screens within each:

| Tab | Visual Sequence (scroll order top→bottom) |
|-----|------------------------------------------|
| **Accounts** | 1a → 1d → 1c → 1b |
| **Pay & Transfer** | 2a |
| **Plan & Track** | 3c → 3a → 3d → 3b |
| **More** | 4a |

### Interaction Rules (Phase 1)
- Bottom nav switches views without page reload
- Each tab preserves its own independent scroll position
- Header + bottom nav stay fixed
- Secondary buttons show pressed/focus states but don't navigate unless needed for the 4-tab flow
- No authentication or routing outside the 4 tabs

### Token File (`src/tokens.css`)

```css
:root {
  /* Color */
  --color-primary:        #003087; /* Chase navy */
  --color-primary-hover:  #005EB8;
  --color-bg:             #FFFFFF;
  --color-bg-secondary:   #F6F6F6;
  --color-bg-card:        #FFFFFF;
  --color-text:           #111111;
  --color-text-secondary: #6B6B6B;
  --color-text-muted:     #9E9E9E;
  --color-border:         #E5E5E5;
  --color-success:        #2E7D32;
  --color-danger:         #C62828;
  --color-badge-bg:       #E8F0FE;

  /* Spacing */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;

  /* Radius */
  --radius-sm:   6px;
  --radius-md:  12px;
  --radius-lg:  16px;
  --radius-pill: 999px;

  /* Typography */
  --font-base: system-ui, -apple-system, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', monospace; /* balances, amounts */
  --text-xs:   12px;
  --text-sm:   14px;
  --text-base: 16px;
  --text-lg:   18px;
  --text-xl:   24px;
  --text-2xl:  32px;

  /* Safe areas */
  --safe-top:    env(safe-area-inset-top, 44px);
  --safe-bottom: env(safe-area-inset-bottom, 34px);
  --nav-height:  64px;
  --header-height: 56px;
}
```

### Mock Data (`src/data.js`)

```js
export const accounts = [
  { id: 'chk-001', type: 'checking', name: 'Chase Total Checking',    lastFour: '4821', balance: 4231.88 },
  { id: 'sav-001', type: 'savings',  name: 'Chase Savings',           lastFour: '3390', balance: 2615.34 },
  { id: 'cc-001',  type: 'credit',   name: 'Chase Sapphire Preferred',lastFour: '7701', balance: -892.44, creditLimit: 10000 },
];

export const transactions = [
  { id: 't1', accountId: 'chk-001', merchant: 'Amazon',        category: 'Shopping', amount: -38.99,  date: '2026-06-24' },
  { id: 't2', accountId: 'chk-001', merchant: 'Shell',          category: 'Gas',      amount: -62.00,  date: '2026-06-23' },
  { id: 't3', accountId: 'chk-001', merchant: 'Whole Foods',    category: 'Groceries',amount: -91.14,  date: '2026-06-22' },
  { id: 't4', accountId: 'chk-001', merchant: 'Direct Deposit', category: 'Income',   amount: 2100.00, date: '2026-06-21' },
  { id: 't5', accountId: 'chk-001', merchant: 'Netflix',        category: 'Bills',    amount: -17.99,  date: '2026-06-20' },
  { id: 't6', accountId: 'chk-001', merchant: 'Target',         category: 'Shopping', amount: -44.62,  date: '2026-06-19' },
  { id: 't7', accountId: 'chk-001', merchant: 'Zelle — Mike R.',category: 'Transfer', amount: -200.00, date: '2026-06-18' },
];

export const recipients = [
  { id: 'r1', name: 'Sarah K.',  initial: 'SK', lastSent: '2 days ago' },
  { id: 'r2', name: 'Mike R.',   initial: 'MR', lastSent: '1 week ago' },
  { id: 'r3', name: 'Mom',       initial: 'M',  lastSent: 'Jun 10' },
];

export const bills = [
  { id: 'b1', payee: 'Verizon',         due: 'Jun 28', amount: 85.00 },
  { id: 'b2', payee: 'Electric Company',due: 'Jul 2',  amount: 112.50 },
];
```

### File Structure (Phase 1)

```
/
├── index.html
├── vite.config.js
└── src/
    ├── main.js           ← bootstraps app, mounts tab router
    ├── tokens.css        ← all CSS custom properties
    ├── data.js           ← mock accounts, transactions, recipients, bills
    ├── router.js         ← tab switching, scroll position cache
    ├── components/
    │   ├── header.js         ← fixed header (title + notification bell)
    │   ├── bottomNav.js      ← 4-tab nav with active state
    │   ├── accountCard.js    ← checking/savings/credit card variants
    │   ├── transactionRow.js ← merchant · category · amount · date
    │   ├── actionButton.js   ← icon + label pill button
    │   ├── skeletonLoader.js ← shimmer placeholders
    │   └── offersCarousel.js ← horizontal promo card strip (Phase 1 only)
    └── tabs/
        ├── accounts.js       ← Tab 1: visual sequence 1a→1d→1c→1b
        ├── payTransfer.js    ← Tab 2: visual sequence 2a
        ├── planTrack.js      ← Tab 3: visual sequence 3c→3a→3d→3b
        └── more.js           ← Tab 4: visual sequence 4a
```

---

## Phase 2 — Simple Mode Redesign

### Design Philosophy

> Remove everything the user didn't come to do. Keep everything they did.

Usage hierarchy for a retail banking app (most → least frequent):
1. Check balance
2. Send money (Zelle)
3. Pay a bill
4. Transfer between own accounts
5. View recent transactions

Everything else — Plan & Track insights nudges, offers/promotions, cross-sell banners, rewards tickers — moves out of the primary flow.

---

### What Changes Between Phase 1 → Phase 2

| Element | Phase 1 (Current Chase) | Phase 2 (Simple Mode) |
|---------|------------------------|----------------------|
| Bottom nav tabs | 4: Accounts · Pay & Transfer · Plan & Track · More | 3: Home · Pay & Transfer · Settings |
| Plan & Track tab | Full tab with budgets, insights, goals | **Removed from nav** (link in Settings only) |
| Offers carousel | Prominent on Accounts tab | **Removed entirely** |
| Cross-sell banners | Scattered throughout | **Removed entirely** |
| Rewards points ticker | On account cards | Moved to Settings only |
| Account cards | Horizontal scroll strip | Vertical stacked list — no carousel |
| Quick action pills | 5 small icons in a row | 3 large tap targets (min 80px tall) |
| Transaction rows | Merchant · category chip · amount · date | Merchant · amount · date (no category chips) |
| Typography base | ~14px | **17px** — larger for readability |
| Spacing between sections | 16px padding | **24px** padding |
| Header | Logo + bell + avatar | Logo + avatar (bell only if alerts exist) |

---

### Simple Mode: File Structure

Simple Mode lives alongside Phase 1 in the same repo, toggled via a CSS class and JS flag. No separate build.

```
src/
├── simple-mode/
│   ├── simpleHome.js       ← new Home tab (replaces Accounts as landing)
│   ├── simplePayTransfer.js← same flow, simplified UI
│   └── simpleSettings.js   ← replaces More; includes SM toggle
├── simpleMode.js           ← toggle controller
└── simpleMode.css          ← overrides on top of tokens.css
```

Toggle in `simpleMode.js`:
```js
export function setSimpleMode(enabled) {
  document.documentElement.classList.toggle('simple-mode', enabled);
  localStorage.setItem('simpleMode', enabled);
}
export function getSimpleMode() {
  return localStorage.getItem('simpleMode') === 'true';
}
```

CSS overrides in `simpleMode.css` (all scoped to `.simple-mode`):
```css
.simple-mode {
  --text-base: 17px;
  --space-md:  20px;
  --space-lg:  28px;
}
.simple-mode .offers-carousel,
.simple-mode .cross-sell-banner,
.simple-mode .rewards-ticker,
.simple-mode .category-chip,
.simple-mode [data-tab="plan-track"] { display: none; }

.simple-mode .action-buttons { flex-direction: row; gap: 12px; }
.simple-mode .action-button   { min-height: 80px; flex: 1; font-size: 15px; }
.simple-mode .account-list    { flex-direction: column; }  /* kills carousel */
```

---

### Simple Mode Home Screen (ASCII wireframe)

```
┌─────────────────────────┐
│  Chase              👤  │  ← minimal header
├─────────────────────────┤
│                         │
│   Total available       │
│   $6,847.22             │  ← large, centered balance
│   Checking · Savings    │
│                         │
├─────────────────────────┤
│  ┌────────┐ ┌────────┐ ┌────────┐  │
│  │  Send  │ │  Pay   │ │Transfer│  │  ← 3 big buttons, min 80px tall
│  │ Money  │ │  Bill  │ │        │  │
│  └────────┘ └────────┘ └────────┘  │
├─────────────────────────┤
│  ── Recent ──           │
│  Amazon          -$38.99│
│  Shell           -$62.00│
│  Direct Deposit +$2,100 │
│  [See all activity]     │
├─────────────────────────┤
│   [ Home ] [ Pay ] [ Settings ]   │  ← 3-tab nav only
└─────────────────────────┘
```

---

### Simple Mode: Settings Screen

Replaces the current "More" tab. Contains:
- **Simple Mode toggle** (on/off with live switch — top of screen)
- Account management link
- Notifications preferences
- Card controls
- Statements & documents
- Sign out

The Simple Mode toggle calls `setSimpleMode()` and immediately re-renders the tab bar and active view.

---

### Accessibility & Quality Floor (both phases)

- [ ] All interactive elements reachable and operable by keyboard
- [ ] Focus rings visible (never `outline: none` without a custom replacement)
- [ ] `prefers-reduced-motion`: disable all CSS transitions and JS animations
- [ ] Contrast: all text ≥ 4.5:1 against its background
- [ ] Touch targets: minimum 44×44px (Phase 1), minimum 80px tall for primary actions (Phase 2)
- [ ] Safe area insets respected: `env(safe-area-inset-bottom)` on nav bar
- [ ] Text wraps gracefully at 320px width (smallest iPhone SE)
- [ ] `aria-current="page"` on active bottom nav item
- [ ] Prototype notice visible on every screen: `⚠ Unofficial prototype — not affiliated with Chase`

---

## Codex Execution Order

### Phase 1 (Codex handles this)
1. Scaffold Vite project, set up `tokens.css`, `data.js`
2. `router.js` + scroll position cache
3. Fixed `header.js` + `bottomNav.js` with active state
4. Build `accounts.js` tab (visual sequence 1a→1d→1c→1b)
5. Build `payTransfer.js` tab (2a)
6. Build `planTrack.js` tab (3c→3a→3d→3b)
7. Build `more.js` tab (4a)
8. Verify at 390×844 and 430×932, check a11y floor

### Phase 2 (hand off to me after Phase 1 is complete)
9. Add `simpleMode.js` toggle controller + `simpleMode.css`
10. Build `simpleHome.js` (new landing: balance + 3 buttons + transactions)
11. Build `simpleSettings.js` (with live toggle)
12. Wire simplified 3-tab nav into router
13. QA: toggle between modes in same session, verify scroll positions, verify hidden elements don't leave whitespace gaps
