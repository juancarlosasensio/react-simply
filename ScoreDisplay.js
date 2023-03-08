import { React, ReactDOM, html } from "./deps.js";

export const ScoreDisplay = ({ scoresToDisplay }) => {
  return html`
    <div className="col-md-5 text-center">
       ${scoresToDisplay.map(score => `<p>${score}</p>`)}
    </div>
  `
}
