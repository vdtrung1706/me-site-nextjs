import { Endpoints } from '@octokit/types';

export type ListUserReposResponse =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
