import React from "react";
import ReactDOM from "react-dom";
import "../public/index.css";
import "tailwindcss/dist/tailwind.css";

import Button from "./Button.jsx";

ReactDOM.render(
  <React.Fragment>
    <React.StrictMode>
      <div className="p-5 bg-purple-500 text-white">
        <h1 className="mt-4 mb-4 text-5xl">Another React Component Library</h1>
      </div>
      <div className="m-5">
        <h1 className="mb-2 text-2xl">Buttons</h1>
        <h2 className="mb-1 mt-3 text-lg">Contained Buttons</h2>
        <div className="inline-block mr-3">
          <Button kind="default" value="Default" />
        </div>
        <div className="inline-block mr-3">
          <Button kind="primary" value="Primary" />
        </div>
        <div className="inline-block mr-3">
          <Button kind="success" value="Success" />
        </div>
        <div className="inline-block mr-3">
          <Button kind="warning" value="Warning" />
        </div>
        <div className="inline-block mr-3">
          <Button kind="danger" value="Danger" />
        </div>
        <h2 className="mb-1 mt-3 text-lg">Disabled</h2>
        <div className="inline-block mr-3">
          <Button disabled={true} kind="default" value="Default" />
        </div>
        <div className="inline-block mr-3">
          <Button disabled={true} kind="primary" value="Primary" />
        </div>
        <div className="inline-block mr-3">
          <Button disabled={true} kind="success" value="Success" />
        </div>
        <div className="inline-block mr-3">
          <Button disabled={true} kind="warning" value="Warning" />
        </div>
        <div className="inline-block mr-3">
          <Button disabled={true} n kind="danger" value="Danger" />
        </div>
      </div>
    </React.StrictMode>
  </React.Fragment>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
