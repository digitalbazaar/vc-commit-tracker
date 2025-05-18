# @digitalbazaar/vc-commit-tracker

> `@digitalbazaar/vc-commit-tracker` retrieves the most recent commit dates from
> a list of public VC specs and test suites on Github and displays them within
> a table in the README.

## GitHub Workflow

The configured GitHub workflow runs at 10 AM UTC every Sunday, refreshing the
`README.md` file. You can also manually run the workflow on main branch.

## Install

Requires:
- Node.js 20+

To install locally (for development):
```bash
git clone https://github.com/digitalbazaar/vc-commit-tracker.git
cd vc-commit-tracker
npm install
```
To update the README with the most recent commit dates for VC specifications
and test suite repositories:

```bash
GH_ACCESS_TOKEN="YOUR_GH_ACCESS_TOKEN" npm run update-readme
```
Note: GitHub imposes restrictions on the number of REST API requests
within a given timeframe. To bypass these limitations, authentication via a
GitHub access token is necessary. Ensure you pass this access token through an
environment variable when executing the script to generate the table.

## Latest Commit Dates by Repository
<table>
    <thead>
    <tr>
      <th>repository name</th>
      <th>latest commit date</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-ecdsa">w3c/vc-di-ecdsa</a></td>
          <td style="color: red">2025-05-15T21:16:32Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-ecdsa-test-suite">w3c/vc-di-ecdsa-test-suite</a></td>
          <td>2025-02-26T04:37:58Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-eddsa">w3c/vc-di-eddsa</a></td>
          <td style="color: red">2025-05-15T21:18:11Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-eddsa-test-suite">w3c/vc-di-eddsa-test-suite</a></td>
          <td>2025-02-26T04:37:01Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-data-model">w3c/vc-data-model</a></td>
          <td style="color: red">2025-05-15T21:05:38Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-data-model-2.0-test-suite">w3c/vc-data-model-2.0-test-suite</a></td>
          <td>2025-02-26T16:41:34Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-bbs">w3c/vc-di-bbs</a></td>
          <td style="color: red">2025-04-03T16:29:55Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-di-bbs-test-suite">w3c-ccg/vc-di-bbs-test-suite</a></td>
          <td>2025-03-04T19:01:39Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-bitstring-status-list">w3c/vc-bitstring-status-list</a></td>
          <td style="color: red">2025-05-15T21:10:12Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/status-list-2021-test-suite">w3c-ccg/status-list-2021-test-suite</a></td>
          <td>2025-03-11T18:54:16Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api">w3c-ccg/vc-api</a></td>
          <td style="color: red">2025-05-13T22:08:06Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api-issuer-test-suite">w3c-ccg/vc-api-issuer-test-suite</a></td>
          <td>2024-12-16T16:46:30Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api">w3c-ccg/vc-api</a></td>
          <td style="color: red">2025-05-13T22:08:06Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api-verifier-test-suite">w3c-ccg/vc-api-verifier-test-suite</a></td>
          <td>2024-12-16T16:38:35Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/did-method-key">w3c-ccg/did-method-key</a></td>
          <td style="color: red">2025-03-26T14:20:09Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/did-key-test-suite">w3c-ccg/did-key-test-suite</a></td>
          <td>2024-09-24T16:19:02Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-data-integrity">w3c/vc-data-integrity</a></td>
          <td style="color: red">2025-05-15T21:07:21Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/data-integrity-test-suite-assertion">w3c-ccg/data-integrity-test-suite-assertion</a></td>
          <td>2025-01-27T17:32:28Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-refresh-2021">w3c-ccg/vc-refresh-2021</a></td>
          <td>2022-06-15T20:18:03Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-refresh-2021-test-suite">w3c-ccg/vc-refresh-2021-test-suite</a></td>
          <td style="color: green">2023-11-10T17:40:50Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-eddsa">w3c/vc-di-eddsa</a></td>
          <td style="color: red">2025-05-15T21:18:11Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-ed25519signature2020-test-suite">w3c/vc-di-ed25519signature2020-test-suite</a></td>
          <td>2025-02-24T17:48:21Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
    </tbody>
</table>

## License
[BSD-3-Clause](LICENSE) (c) Digital Bazaar, Inc.
