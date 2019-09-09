const baseURL = 'https://api.github.com';
const user = 'cyantis';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'c92937c6d1b15f2d31c054ce7d84e91dff6d02e2';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  console.log(`${baseURL}/repos/${repo}/forks`);
  //use fetch to fork it!
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`,
      }
    }
  ).then(res => console.log(res));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
