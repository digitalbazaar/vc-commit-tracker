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
          <td style="color: red">2024-08-18T13:38:46Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-ecdsa-test-suite">w3c/vc-di-ecdsa-test-suite</a></td>
          <td>2024-08-05T16:22:51Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-eddsa">w3c/vc-di-eddsa</a></td>
          <td style="color: red">2024-08-16T16:00:00Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-eddsa-test-suite">w3c/vc-di-eddsa-test-suite</a></td>
          <td>2024-08-05T16:35:09Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-data-model">w3c/vc-data-model</a></td>
          <td style="color: red">2024-08-24T14:58:39Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-data-model-2.0-test-suite">w3c/vc-data-model-2.0-test-suite</a></td>
          <td>2024-08-14T18:44:07Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-bbs">w3c/vc-di-bbs</a></td>
          <td style="color: red">2024-08-19T15:37:21Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-di-bbs-test-suite">w3c-ccg/vc-di-bbs-test-suite</a></td>
          <td>2024-08-18T16:28:38Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-bitstring-status-list">w3c/vc-bitstring-status-list</a></td>
          <td>2024-06-10T15:51:40Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/status-list-2021-test-suite">w3c-ccg/status-list-2021-test-suite</a></td>
          <td style="color: green">2024-08-12T20:30:30Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api">w3c-ccg/vc-api</a></td>
          <td style="color: red">2024-08-20T19:21:11Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api-issuer-test-suite">w3c-ccg/vc-api-issuer-test-suite</a></td>
          <td>2024-07-03T20:16:13Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api">w3c-ccg/vc-api</a></td>
          <td style="color: red">2024-08-20T19:21:11Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/vc-api-verifier-test-suite">w3c-ccg/vc-api-verifier-test-suite</a></td>
          <td>2024-07-02T19:18:50Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/did-method-key">w3c-ccg/did-method-key</a></td>
          <td>2022-06-21T17:45:51Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/did-key-test-suite">w3c-ccg/did-key-test-suite</a></td>
          <td style="color: green">2024-01-09T16:53:52Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-data-integrity">w3c/vc-data-integrity</a></td>
          <td style="color: red">2024-08-24T19:02:06Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c-ccg/data-integrity-test-suite-assertion">w3c-ccg/data-integrity-test-suite-assertion</a></td>
          <td>2024-08-17T00:00:03Z</td>
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
          <td style="color: red">2024-08-16T16:00:00Z</td>
        </tr>
        <tr>
          <td><a href="https://github.com/w3c/vc-di-ed25519signature2020-test-suite">w3c/vc-di-ed25519signature2020-test-suite</a></td>
          <td>2024-07-02T19:20:11Z</td>
        </tr>
        <tr style="border: 3px solid black;"></tr>
    </tbody>
</table>

## License
[BSD-3-Clause](LICENSE) (c) Digital Bazaar, Inc.
