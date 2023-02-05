<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/develop/docs/assets/github-header.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Conventions guide

Conventions as a safe way to interpret and talk to the team. When working with the conventions
will be sure that all they may understand each iteration of the developer with the application.

### Conventional Commits

We have very precise rules over how our git commit messages can be formatted.
This leads to more readable messages that are easy to follow when looking through
the project history. But also, we use the git commit messages to generate changelog.

- [Why Use Conventional Commits?](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)
- [How to use?](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)

**Rules**

| Type                     | Description                                  | Example                 |
| ------------------------ | -------------------------------------------- | ----------------------- |
| Features                 | A new feature                                | feat: your message      |
| Bug Fixes                | A bug fix                                    | fix: your message       |
| Tests                    | Adding or correcting tests                   | test: your message      |
| Builds                   | Changes that affect the build or deps        | build: your message     |
| Styles                   | White-space, formatting, semi-colons, etc    | style: your message     |
| Documentation            | Documentation only changes                   | docs: your message      |
| Performance Improvements | Change that improves performance             | perf: your message      |
| Code Refactoring         | Refactor code base                           | refactor: your message  |
| Continuous Widgets  | Changes to our CI configuration              | ci: your message        |
| Chores                   | Other changes that don't modify src or tests | chore: your message     |
| Reverts                  | Reverts a previous commit                    | revert: your message    |

**Subject**

The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Don't capitalize first letter
* No dot (.) at the end

**Body**

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

* Run the full application test suite, and ensure that all tests pass.
* Create your own branch, including appropriate test cases.
* Commit your changes using a descriptive commit message that follows our commit message conventions.
* Search [GitHub](https://github.com/turnly/turnly/pulls) for an open or closed PR, and copy the PR template.
* Adding the appropriate [labels](https://github.com/turnly/configs/blob/main/github/PULL_REQUEST_LABELS.md) **(🕐 Peer Review Pending)**

**After your pull request is merged**

After your pull request is merged, you can safely delete your branch and pull the changes from the develop (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

```sh
git push origin --delete my-branch
```

* Check out the develop branch:

```sh
git checkout develop -f
```

* Delete the local branch:

```sh
git branch -D my-branch
```

* Update your develop with the latest upstream version:

```sh
git pull --ff upstream develop
```
