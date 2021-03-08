import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(function(reg) {
      console.log('登録に成功しました。 Scope は ' + reg.scope);
    }).catch(function(error) {
      console.log('登録に失敗しました。' + error);
    });
}