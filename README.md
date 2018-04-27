# commitlint-config-conventional-system

[![Greenkeeper badge](https://badges.greenkeeper.io/blackxored/commitlint-config-conventional-system.svg)](https://greenkeeper.io/)

> Commitlint config for conventional system extensions for scopes and more

[![Semantically Released][semantic-release-badge]][semantic-release]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![Styled with Prettier][prettier-badge]][prettier]
[![AirBnB style guide][airbnb-style-badge]][airbnb-style]

[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

commitlint configuration for system and apps with defined scopes, commit types and more.
By defining standard components of a system or app and using them as scopes, plus adding a few
related to commit types, we ensure consistency across our projects.

These are scopes that should be common in most systems, we call these components:

* **auth:** Authentication, login, OAuth, etc.
* **forms:** General user input, forms, etc.
* **navigation:** Navigation, history and routing.
* **networking":** Network-related code, connectivity checks, offline persistence, etc.
* **notifications:** Notification code, in-app notifications, push notifications, etc.
* **profile:** User profile, friends, followers, etc.
* **settings:** Settings and preferences.
* **system**: A general catch-all, for changes that impact many areas of the system.

We define 4 scopes you can use if you're interested in highlighted which platform
is affected by the changes:

* **core**: Shared code.
* **native**: Mobile platforms.
* **desktop**: Desktop platforms.
* **web**: Web platforms.

And finally, we define general scopes that refer to the nature of the change:

* build
* deps
* packaging
* release

But more importantly, we allow you to customize these.
`system` refers to the above. You can include your packages in the `packages`
section, and you can customize your `components`, along with descriptions.


## Installing / Getting Started

Create a `.commitlint-patterns.json` at the root of your respository.
See `examples/commitlint-pattern.json`.

Extend your config with this one. In `commitlint.config.js`:

```javascript
module.exports = {
  extends: ['config-conventional-system']
}
```

### Prerequisites

* commitlint

## Developing

### Built With

* Ramda

### Setting up Dev

Here's a brief intro about what a developer must do in order to start 
developing the project further:

```shell
git clone https://github.com/blackxored/commitlint-config-conventional-system
cd commitlint-config-conventional-system
yarn
```

And state what happens step-by-step. If there is any virtual environment, 
local server or database feeder needed, explain here.

## Versioning

We use [SemVer][semver] for versioning. In addition, it's automatic via
[semantic-release][semantic-release], and our [commit convention][commit-convention].

For the versions available, see the [Releases][releases] on this repository.

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

```shell
yarn test
```

## Style guide

We base our code style on [AirBnB's style guide][airbnb-style] and we check with 
[ESLint][eslint] and automatically format our code with [Prettier][prettier].

## License

This project is licensed under the MIT License - see the 
[license] file for details.

## Contributing

If you're interested in contributing to this project in any form, please read
our [Contribution Guidelines][contributing].

### Code of Conduct

We've adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][coc] so that you can understand what actions 
will and will not be tolerated.

### Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/133308?v=4" width="100px;"/><br /><sub><b>Adrian Perez</b></sub>](https://adrianperez.codes)<br />[💻](https://github.com/blackxored/commitlint-config-conventional-system/commits?author=blackxored "Code") [📖](https://github.com/blackxored/commitlint-config-conventional-system/commits?author=blackxored "Documentation") [🚇](#infra-blackxored "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/blackxored/commitlint-config-conventional-system/commits?author=blackxored "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/blackxored/commitlint-config-conventional-system.svg?style=flat-square
[build]: https://travis-ci.org/blackxored/commitlint-config-conventional-system
[coverage-badge]: https://img.shields.io/codecov/c/github/blackxored/commitlint-config-conventional-system.svg?style=flat-square
[coverage]: https://codecov.io/github/blackxored/commitlint-config-conventional-system
[version-badge]: https://img.shields.io/npm/v/commitlint-config-conventional-system.svg?style=flat-square
[package]: https://www.npmjs.com/package/commitlint-config-conventional-system
[downloads-badge]: https://img.shields.io/npm/dm/commitlint-config-conventional-system.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/commitlint-config-conventional-system
[license-badge]: https://img.shields.io/npm/l/commitlint-config-conventional-system.svg?style=flat-square
[license]: https://github.com/blackxored/commitlint-config-conventional-system/blob/master/LICENSE.md
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier 
[airbnb-style-badge]: https://img.shields.io/badge/code%20style-airbnb-green.svg?style=flat-square
[airbnb-style]: https://github.com/airbnb/javascript
[eslint]: http://eslint.org 
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[contributing]: https://github.com/blackxored/commitlint-config-conventional-system/blob/master/CONTRIBUTING.md
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/blackxored/commitlint-config-conventional-system/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/blackxored/commitlint-config-conventional-system.svg?style=social
[github-watch]: https://github.com/blackxored/commitlint-config-conventional-system/watchers
[github-star-badge]: https://img.shields.io/github/stars/blackxored/commitlint-config-conventional-system.svg?style=social
[github-star]: https://github.com/blackxored/commitlint-config-conventional-system/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20commitlint-config-conventional-system%20by%20%40blackxored%20https%3A%2F%2Fgithub.com%2Fblackxored%2Fcommitlint-config-conventional-system%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/blackxored/commitlint-config-conventional-system.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[semver]: http://semver.org/
[releases]: https://github.com/blackxored/commitlint-config-conventional-system/releases
[commit-convention]: https://www.npmjs.com/package/@commitlint/config-conventional

