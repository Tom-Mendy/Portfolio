import { environment } from '../environments/environment';
import { PinnedItems } from '../app/github/pinned-items';

import { Response } from 'express';

export function GithubFetchPinnedRepos(response: any, res: Response): PinnedItems {
  const GITHUB_TOKEN = process.env['GITHUB_TOKEN'] || '';

  const query = `
        query {
          user(login: "${environment.GITHUB_USER}") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  owner { login }
                  description
                  url
                  stargazerCount
                  primaryLanguage { name }
                  repositoryTopics(first: 5) {
                    nodes { topic { name } }
                  }
                }
              }
            }
          }
        }
      `;

  let pinnedItems: PinnedItems = { nodes: [] };

  fetch(environment.GITHUB_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => {
      pinnedItems = data.data.user.pinnedItems;
      res.send(pinnedItems);
    })
    .catch((error) => {
      res.status(500).send(error);
    });

  return pinnedItems;
}
