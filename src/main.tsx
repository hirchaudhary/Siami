import { App } from './components/App.js';

declare const React: any;
declare const ReactDOM: any;

const { createRoot } = ReactDOM;

createRoot(document.getElementById('root')!).render(
  React.createElement(App)
);
