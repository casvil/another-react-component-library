import React from "react";
import ReactDOM from "react-dom";
import "../public/index.css";
import "tailwindcss/dist/tailwind.css";

import Button from "./Button.jsx";

ReactDOM.render(
  <React.Fragment>
    <React.StrictMode>
      <div className="p-2">
        <h1>Another React Component Library</h1>
        <h1 className="mb-2">Buttons</h1>
        <h2 className="mb-2">Container Buttons</h2>
        <React.Fragment>
          <h3 className="mb-1 mt-1">Default</h3>
          <Button
            kind="default"
            value="Button"
            onClick={() => alert("Button clicked")}
          />
        </React.Fragment>
        <React.Fragment>
          <h3 className="mb-1 mt-1">Primary</h3>
          <Button
            kind="primary"
            value="Button"
            onClick={() => alert("Button clicked")}
          />
        </React.Fragment>
        <React.Fragment>
          <h3 className="mb-1 mt-1">Success</h3>
          <Button
            kind="success"
            value="Button"
            onClick={() => alert("Button clicked")}
          />
        </React.Fragment>
        <React.Fragment>
          <h3 className="mb-1 mt-1">Warning</h3>
          <Button
            kind="warning"
            value="Button"
            onClick={() => alert("Button clicked")}
          />
        </React.Fragment>
        <React.Fragment>
          <h3 className="mb-1 mt-1">Danger</h3>
          <Button
            kind="danger"
            value="Button"
            onClick={() => alert("Button clicked")}
          />
        </React.Fragment>
      </div>
    </React.StrictMode>
  </React.Fragment>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
