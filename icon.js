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
  pie: '<path d="M12 3v9h9A9 9 0 1 1 12 3Z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15Z"/>',
  arrowLeft: '<path d="m15 18-6-6 6-6"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  document: '<path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 11h6M9 15h6"/>',
  shield: '<path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  logout: '<path d="M10 4H5v16h5M14 8l4 4-4 4M8 12h10"/>',
  rotate: '<path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a8 8 0 0 0 13-6M18.5 9a8 8 0 0 0-13 6"/>'
};

export function sprite() {
  return `<svg class="svg-sprite" aria-hidden="true"><defs>${Object.entries(icons)
    .map(([name, paths]) => `<symbol id="icon-${name}" viewBox="0 0 24 24">${paths}</symbol>`)
    .join('')}</defs></svg>`;
}

export function icon(name, className = '') {
  return `<svg class="icon ${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}
