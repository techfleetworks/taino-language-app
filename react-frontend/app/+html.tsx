import type { PropsWithChildren } from 'react';
import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="manifest" href="/manifest.json" />
        
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
              }).catch(error => {
                console.error('Service Worker registration failed:', error);
              });
            });
          }
        `}} />
        
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
