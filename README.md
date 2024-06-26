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
          <td>w3c/vc-di-ecdsa</td>
          <td>2024-06-21T17:04:24Z</td>
        </tr>
        <tr>
          <td>w3c/vc-di-ecdsa-test-suite</td>
          <td>2024-06-18T20:55:05Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c/vc-di-eddsa</td>
          <td>2024-06-21T17:38:00Z</td>
        </tr>
        <tr>
          <td>w3c/vc-di-eddsa-test-suite</td>
          <td>2024-06-18T20:54:39Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c/vc-data-model</td>
          <td>2024-06-24T23:30:26Z</td>
        </tr>
        <tr>
          <td>w3c/vc-data-model-2.0-test-suite</td>
          <td>2024-06-12T14:48:01Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c/vc-di-bbs</td>
          <td>2024-06-25T14:31:36Z</td>
        </tr>
        <tr>
          <td>w3c-ccg/vc-di-bbs-test-suite</td>
          <td>2024-06-25T17:51:46Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c/vc-bitstring-status-list</td>
          <td>2024-06-10T15:51:40Z</td>
        </tr>
        <tr>
          <td>w3c-ccg/status-list-2021-test-suite</td>
          <td>2024-01-10T18:21:44Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c-ccg/vc-api</td>
          <td>2024-06-25T18:33:41Z</td>
        </tr>
        <tr>
          <td>w3c-ccg/vc-api-issuer-test-suite</td>
          <td>2024-01-09T16:31:39Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c-ccg/vc-api</td>
          <td>2024-06-25T18:33:41Z</td>
        </tr>
        <tr>
          <td>w3c-ccg/vc-api-verifier-test-suite</td>
          <td>2024-01-09T16:47:15Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c-ccg/did-method-key</td>
          <td>2022-06-21T17:45:51Z</td>
        </tr>
        <tr>
          <td>w3c-ccg/did-key-test-suite</td>
          <td>2024-01-09T16:53:52Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c/vc-data-integrity</td>
          <td>2024-06-22T19:49:22Z</td>
        </tr>
        <tr>
          <td>w3c-ccg/data-integrity-test-suite-assertion</td>
          <td>2024-06-18T20:57:02Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c-ccg/vc-refresh-2021</td>
          <td>2022-06-15T20:18:03Z</td>
        </tr>
        <tr>
          <td>w3c-ccg/vc-refresh-2021-test-suite</td>
          <td>2023-11-10T17:40:50Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
        <tr>
          <td>w3c/vc-di-eddsa</td>
          <td>2024-06-21T17:38:00Z</td>
        </tr>
        <tr>
          <td>w3c/vc-di-ed25519signature2020-test-suite</td>
          <td>2024-01-12T14:29:18Z</td>
        </tr>
      <tr><td> </td> <td> </td></tr>
    </tbody>
</table>

## License
[BSD-3-Clause](LICENSE) (c) Digital Bazaar, Inc.
