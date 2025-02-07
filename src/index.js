import React from "react";
import ReactDOM from "react-dom/client"; // لاحظ استخدام ReactDOM من الحزمة الجديدة
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// حدد الجذر (root) الخاص بالتطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));

// قم بعملية التجسيد باستخدام createRoot بدلاً من render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
