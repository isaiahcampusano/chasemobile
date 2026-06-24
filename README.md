# Mobile Banking UI Prototype

An unofficial, front-end-only mobile banking prototype built with Vite, vanilla JavaScript, and CSS. All account information is fictional, no credentials are collected, and no banking services are connected.

The prototype contains two usability-test conditions:

- **Current** recreates the existing four-tab mobile experience as the control condition.
- **Simple** provides a focused three-tab experience with representative send-money, bill-payment, transfer, and transaction-detail flows.

Use the prototype controls outside the simulated app to switch modes or reset the selected test session. Modes can also be opened directly with `?mode=current` or `?mode=simple`.

## Run locally

```powershell
npm install
npm run dev
```

If `npm` is not recognized in PowerShell on Windows, expose the installed Node runtime for that terminal first:

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
npm install
npm run dev
```

## Production build

```powershell
npm run build
```

This project is for design demonstration purposes only and is not affiliated with or endorsed by JPMorgan Chase & Co.

Simple Mode's current layout is provisional. Forthcoming Figma wireframes remain the source of truth for its final visual design.
