if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/learn-german/sw.js', { scope: '/learn-german/' })})}