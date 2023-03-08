import { React, ReactDOM, html } from "./deps.js";

export const RepoSearchForm = ({ fetchNewRepo, index, url }) => {
  const searchInputRef = React.createRef(null)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const searchText = searchInputRef.current.value;
    fetchNewRepo(index, searchText);
  }
  
  // Look into vanity URL component from Bootstrap: https://getbootstrap.com/docs/5.0/forms/input-group/
    return html`
      <form onSubmit=${handleSubmit}>
        <div className="d-flex justify-content-between mb-3">
          <div className="flex-fill">
            <label htmlFor="repo-url" 
              className="col-sm-2 col-form-label visually-hidden">    
            </label>
            <input 
              type="text" 
              className="form-control"
              defaultValue=${url}
              id="repo-url"  
              ref=${searchInputRef}
            />
          </div>
          <div className="flex-grow-1">
            <button type="submit" className="btn btn-primary w-100">Go</button>
          </div>
        </div>
      </form>
    `
}