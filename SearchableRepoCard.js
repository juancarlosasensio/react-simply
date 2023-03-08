import { React, ReactDOM, html } from "./deps.js";
import { RepoSearchForm } from './RepoSearchForm.js';
import { RepoCard } from './RepoCard.js'


export const SearchableRepoCard = ({ repo, url, fetchNewRepo, index, isWinner }) => {
  return html`
    <article 
      className="col-md-5 shadow p-5 mx-3 mb-4 rounded bg-white d-flex flex-column">
      <${RepoSearchForm} 
        url=${url} 
        fetchNewRepo=${fetchNewRepo} 
        index=${index} 
      />
      <${RepoCard} 
        repo=${repo} 
        isWinner=${isWinner} 
      />
    </article>
  `
}