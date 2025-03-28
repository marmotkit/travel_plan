import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './theme.css'; // 引入主題樣式
import './styles/popconfirm-fix.css'; 
import './styles/settings-fix.css'; // 添加系統設定頁面的樣式修復
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
