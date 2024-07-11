/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc.
 */
import NodeFetchCache, {FileSystemCache} from 'node-fetch-cache';

const fetch = NodeFetchCache.create({
  cache: new FileSystemCache()
});

/**
 * Parses a GitHub repository URL to extract owner and repo name.
 *
 * @param {string} url - The GitHub repository URL.
 *
 * @returns {object} An object containing the owner and repo name.
 */
export function parseRepositoryUrl(url) {
  const urlPattern =
    /^https?:\/\/github\.com\/(?<owner>[^/]+)\/(?<name>[^/]+)\/?$/;
  const match = url.match(urlPattern);
  if(!match) {
    throw new Error('Invalid GitHub repository URL');
  }
  const {owner, name} = match.groups;
  return {owner, name};
}

/**
 * Fetches the latest commit date for a GitHub repository URL.
 *
 * @param {string} url - The GitHub repository URL.
 *
 * @returns {Date} - The latest commit date.
 */
export const fetchLatestCommitDate = async url => {
  const {owner, name} = parseRepositoryUrl(url);
  const apiUrl = `https://api.github.com/repos/${owner}/${name}/commits`;
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}`,
    },
  });
  if(!response.ok) {
    if(response.status === 401) {
      throw new Error('Unauthorized. Please provide a Github access token.');
    } else {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }
  }
  const commitData = await response.json();
  const latestCommitDate = commitData[0]?.commit?.author?.date;
  return latestCommitDate;
};
