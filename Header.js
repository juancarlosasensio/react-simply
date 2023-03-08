 import { React, ReactDOM, html } from "./deps.js";
 
export const Header = () => {
  return html`
    <header className="text-md-center my-5 px-4">
      <h1 className="center font-weight-bolder mt-4 mb-3">GitHub Repo Comparison</h1>
      <h5 className="mb-0">
        Take your favourite repositories head-to-head!
      </h5>
    </header>
  `
}