const baseURL = 'https://api.github.com';
const user = 'cyantis';

function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  const result = document.createElement('p');
  result.innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`;
  document.getElementById('results').appendChild(result);
}

function createIssue() {
  const obj = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(
    `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      method: 'POST',
      title: obj.title,
      body: obj.body,
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  );
}

function getIssues() {
  const fetchData = fetch(
    `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(json => json);

  const result = document.createElement('p');
  result.innerHTML = fetchData;
  document.getElementById('issues').appendChild(result);
}
