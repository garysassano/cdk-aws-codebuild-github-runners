# cdk-aws-codebuild-github-runners

CDK app that deploys a CodeBuild project with a webhook attached to an existing GitHub repository so that it can be used to trigger a workflow that makes use of [self-hosted runners in AWS](https://docs.aws.amazon.com/codebuild/latest/userguide/action-runner.html).

## Prerequisites

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli_auth) in your local environment.
  - Must have completed the [CDK bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) process for the AWS environment where you intend to deploy the app.
- **_GitHub:_**
  - Must have set the `GITHUB_TOKEN` variable in your local environment.
  - Must have created a GitHub repository and set the `GITHUB_REPO` and `GITHUB_OWNER` variables in your local environment.
- **_Node.js + npm:_**
  - Must be [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in your system.

## Installation

```sh
npx projen install
```

## Deployment

```sh
npx projen deploy
```

## Cleanup

```sh
npx projen destroy
```
