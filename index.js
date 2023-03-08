import { React, ReactDOM, html } from "./deps.js";
import { SEED_REPOS } from "./constants.js";
import { Header } from "./Header.js";
import { RepoComparator } from "./RepoComparator.js";

const App = () => {
  return html`
    <div className="container vh-100 d-flex flex-column">
      <${Header} />
      <${RepoComparator} repos=${SEED_REPOS} />  
    </div>  
    `;
}

ReactDOM.render(
  html`<${App} foo=${"bar"} />`,
  document.getElementById("root")
);
