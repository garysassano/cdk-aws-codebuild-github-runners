import { awscdk, javascript } from "projen";

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.149.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  eslint: true,
  minNodeVersion: "20.15.0",
  name: "cdk-aws-codebuild-github-runners",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9.5.0",
  prettier: true,
  projenrcTs: true,
});

project.synth();
