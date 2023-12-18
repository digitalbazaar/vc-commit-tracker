/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import {
  fetchLatestCommitDate, parseRepositoryUrl,
} from './helpers.js';
import fs from 'node:fs';
import Handlebars from 'handlebars';
import {repoPairs} from './repo-data.js';

const readmeTemplate = fs.readFileSync('./templates/readme.hbs');
const template = Handlebars.compile(readmeTemplate.toString());

/**
 * Retrieves the most recent commit dates from a list of public VC specs and
 * test suites and displays them within a table in the README file.
 *
 * @param {Array.<object>} repoPairs - An array of objects of pairs of VC spec
 *   and test suites.
 *
 * @returns {undefined} - No return value.
 */
async function getLatestCommits(repoPairs) {
  const result = [];
  for(const repoPair of repoPairs) {
    const {spec, testSuite} = repoPair;
    const [specLatestCommitDate, testSuiteLatestCommitDate] =
      await Promise.all([
        fetchLatestCommitDate(spec),
        fetchLatestCommitDate(testSuite),
      ]);
    const {owner: specOwner, name: specName} = parseRepositoryUrl(spec);
    const {
      owner: testSuiteOwner, name: testSuiteName,
    } = parseRepositoryUrl(testSuite);
    const repoPairWithLatestCommitDates = [{
      name: `${specOwner}/${specName}`,
      latestCommitDate: specLatestCommitDate,
    }, {
      name: `${testSuiteOwner}/${testSuiteName}`,
      latestCommitDate: testSuiteLatestCommitDate,
    }];
    result.push(repoPairWithLatestCommitDates);
  }
  const readmeContent = template({repoPairs: result});
  fs.writeFileSync('./README.md', readmeContent);
}

getLatestCommits(repoPairs);
