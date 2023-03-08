import { React, ReactDOM, html } from "./deps.js";

export const RepoCard = ({ repo, isWinner }) => {

    return html`
      <div className="d-flex flex-column h-100">
        <div className="d-flex align-items-center mt-3">
          <h3>
            <a href=${repo.html_url} target="_blank" 
               className="text-decoration-none">
              ${repo.full_name}
            </a>
          </h3>  
          <p className="mb-0 mr-2">${isWinner ? '🥇' : '🥈' }</p>
        </div>
        <p className="text-muted">${repo.description}</p>
        <ul className="mt-auto">
          <li>⭐️ <strong>${repo.stargazers_count}</strong></li>
          <li>👀 ${repo.watchers}</li>
          <li>🍴${repo.forks}</li>
          <li> ${repo.open_issues}</li>
        </ul>
      </div>
    `
}