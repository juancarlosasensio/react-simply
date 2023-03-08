import { React, ReactDOM, html } from "./deps.js";
import { BASE_URL } from "./constants.js";
import { SearchableRepoCard } from './SearchableRepoCard.js'
import { ScoreDisplay } from './ScoreDisplay.js'

export const RepoComparator = (props) => {
  const [repoLeft, setRepoLeft] = React.useState(props.repos[0]);
  const [repoRight, setRepoRight] = React.useState(props.repos[1]);
  const [fetchFailed, setFetchFailed] = React.useState(false);
  const [scoresToDisplay, setScoresToDisplay] = React.useState([]);
 
  const declareWinner = (repoLT, repoRT) =>  {
    const SCORE_CATEGORIES = [
       "stargazers_count", 
       "watchers", 
       "forks", 
       "open_issues"
     ];
    const scores = [];
    let tempLeftScore = 0;
    let tempRightScore = 0;
    
    for (let i = 0; i < SCORE_CATEGORIES.length; i++) {
      const category = SCORE_CATEGORIES[i];
      if (repoLT[category] > repoRT[category]) {
        tempLeftScore++;
        scores.push('1 – 0');

      } else if (repoLT[category] < repoRT[category]) {
        tempRightScore++;
        scores.push('0 – 1');
      } else {
        tempLeftScore++;
        tempRightScore++;
        scores.push('1 – 1');
      }
    }  
    setScoresToDisplay(scores);
      
    if (tempLeftScore > tempRightScore) {
      return 0;
    } else if (tempLeftScore < tempRightScore) {
      return 1
    } else {
      return null
    }
  }
  
  // https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns
  const [winnerRepo, setWinnerRepo] = React.useState(null);
  React.useEffect(() => {
    setWinnerRepo(declareWinner(repoLeft, repoRight))
  }, [repoLeft, repoRight])

  // TODO: can we be more defensive about the text in the input? So that we don't rely on users having to type https://api.github.com/repos/
  const fetchNewRepo = async (index, searchText) => {
      try {
        const res = await fetch(`${BASE_URL}${searchText}`);
        const repoData = await res.json();
        setFetchFailed(false)
        if (index === 0) {
          setRepoLeft(repoData)
        } else if (index === 1) {
          setRepoRight(repoData)
        }
      } catch {
        setFetchFailed(true)
        console.log(error.message)
      }
  }

   // TODO: is this the best way to go about conditional rendering?? How do we show something went wrong with the fetch?
    if (fetchFailed) {
      return html`
        <div>Bad</div>
      `
    } else {
      return html`
        <section className="container">
          <div className="row justify-content-around">
              <${SearchableRepoCard} 
                key=${repoLeft.full_name}-${repoLeft.html_url}
                index=${0}
                repo=${repoLeft} 
                fetchNewRepo=${fetchNewRepo}
                isWinner=${winnerRepo === 0 ? true : false}
              />
            <${SearchableRepoCard} 
                key=${repoRight.full_name}-${repoRight.html_url}
                index=${1}
                repo=${repoRight} 
                fetchNewRepo=${fetchNewRepo}
                isWinner=${winnerRepo === 1 ? true : false}
              />
            <${ScoreDisplay} scoresToDisplay=${scoresToDisplay} />  
          </div>
        </section>
      `
    }
}