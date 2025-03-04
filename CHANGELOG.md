# [6.4.0](https://github.com/alampros/react-confetti/compare/v6.3.0...v6.4.0) (2025-03-04)


### Bug Fixes

* clamp tweenProgress between 0 and tweenDuration ([f988305](https://github.com/alampros/react-confetti/commit/f988305151150522111c7b846303ba2263fa85e9))


### Features

* adding tweenFrom property to allow smooth transition when parameters change ([dde31e0](https://github.com/alampros/react-confetti/commit/dde31e0e28da164f7b9f3909e73baa6ffe24cf68))

# [6.3.0](https://github.com/alampros/react-confetti/compare/v6.2.3...v6.3.0) (2025-03-01)


### Bug Fixes

* prevent particle flicker on removal ([5cb5bd8](https://github.com/alampros/react-confetti/commit/5cb5bd87032705b90a8d85588d931b985a4127e5))


### Features

* using elapsed time in physics updates ([d1626dc](https://github.com/alampros/react-confetti/commit/d1626dcd16758f627749a30794075663c5fce15f))

## [6.2.3](https://github.com/alampros/react-confetti/compare/v6.2.2...v6.2.3) (2025-02-22)


### Bug Fixes

* export IConfettiOptions ([73dffe8](https://github.com/alampros/react-confetti/commit/73dffe8f87cb87ed7aed42effdc056ac6fe8ffde)), closes [#165](https://github.com/alampros/react-confetti/issues/165)

## [6.2.2](https://github.com/alampros/react-confetti/compare/v6.2.1...v6.2.2) (2024-12-28)


### Bug Fixes

* build multiple module types ([3be757d](https://github.com/alampros/react-confetti/commit/3be757d656a833966370d0fd5ee0c9fa6a1efe75)), closes [#162](https://github.com/alampros/react-confetti/issues/162) [#158](https://github.com/alampros/react-confetti/issues/158)

## [6.2.1](https://github.com/alampros/react-confetti/compare/v6.2.0...v6.2.1) (2024-12-27)


### Bug Fixes

* specify commonjs module ([aa99153](https://github.com/alampros/react-confetti/commit/aa99153ccb42c25f596ddbc956a68b52c53512f3))

# [6.2.0](https://github.com/alampros/react-confetti/compare/v6.1.0...v6.2.0) (2024-12-27)


### Features

* update `peerDependencies` to support React 19 ([ce2d40a](https://github.com/alampros/react-confetti/commit/ce2d40a65cfbb0fc491df550bd5a9caea149d82b))
* upgrade tooling ([9c84a99](https://github.com/alampros/react-confetti/commit/9c84a9941b5efeec2082ee9d54f8e2655f990d2f))

# [6.1.0](https://github.com/alampros/react-confetti/compare/v6.0.1...v6.1.0) (2022-05-20)


### Bug Fixes

* **ci:** add gh and npm tokens ([ecc2d87](https://github.com/alampros/react-confetti/commit/ecc2d87a29e01ec0a00151480619535784a35575))
* **ci:** explicitly add npm token ([fb14930](https://github.com/alampros/react-confetti/commit/fb149307b8a172a98ec3697ae190a65d40d69622))
* Allow react 18 in peer dependency ([6598781](https://github.com/alampros/react-confetti/commit/65987818ebc384891e60874998904ec5056f42b2))


### Features

* **ci:** travis => gh actions ([7af7f03](https://github.com/alampros/react-confetti/commit/7af7f0335d68838a62a75c9631ff58245fe8e00c))

## [6.0.1](https://github.com/alampros/react-confetti/compare/v6.0.0...v6.0.1) (2021-02-22)


### Bug Fixes

* Allow react 17 in peer dependency ([266a3dd](https://github.com/alampros/react-confetti/commit/266a3dd68c37312dc63d5597695de4491cdc1623))

# [6.0.0](https://github.com/alampros/react-confetti/compare/v5.1.0...v6.0.0) (2020-07-17)


### chore

* **deps:** upgrade deps ([25d75da](https://github.com/alampros/react-confetti/commit/25d75dafa9700d3e6a93db72f5b847bf601b374a))


### BREAKING CHANGES

* **deps:** Requires node >= 10.18

# [5.1.0](https://github.com/alampros/react-confetti/compare/v5.0.1...v5.1.0) (2020-06-17)


### Features

* initial velocity range options\ ([929bc50](https://github.com/alampros/react-confetti/commit/929bc50a323703f7178e787e4297f04433510412))

## [5.0.1](https://github.com/alampros/react-confetti/compare/v5.0.0...v5.0.1) (2019-10-18)


### Bug Fixes

* use componentDidUpdate instead ([1ad95f9](https://github.com/alampros/react-confetti/commit/1ad95f9c36de70d3149caf11ca8c90cd8491aacc)), closes [#73](https://github.com/alampros/react-confetti/issues/73)
* **types:** make canvasRef optional ([607068a](https://github.com/alampros/react-confetti/commit/607068a1845f4713ef6d5d13e24b8344df11985d)), closes [#72](https://github.com/alampros/react-confetti/issues/72)

# [5.0.0](https://github.com/alampros/react-confetti/compare/v4.0.1...v5.0.0) (2019-10-18)


* Merge pull request #70 from wheeler/mw-r169 ([8e7ec50](https://github.com/alampros/react-confetti/commit/8e7ec50520c2fab4df3d7d5bd5f24d86e5b2f159)), closes [#70](https://github.com/alampros/react-confetti/issues/70)


### Bug Fixes

* **deps:** upgrade deps ([902da73](https://github.com/alampros/react-confetti/commit/902da739e496a2d16fb42f5596674a255d4c8de1))


### BREAKING CHANGES

* Requires at least React version 16.3 - that version adds the new lifecycle method used to replace the unsafe one.

## [4.0.1](https://github.com/alampros/react-confetti/compare/v4.0.0...v4.0.1) (2019-08-09)


### Bug Fixes

* **types:** remove NamedExoticComponent ([b6dec94](https://github.com/alampros/react-confetti/commit/b6dec94)), closes [#65](https://github.com/alampros/react-confetti/issues/65)

# [4.0.0](https://github.com/alampros/react-confetti/compare/v3.1.2...v4.0.0) (2019-08-06)


### Bug Fixes

* disable pointer events again ([a28a426](https://github.com/alampros/react-confetti/commit/a28a426)), closes [#63](https://github.com/alampros/react-confetti/issues/63)
* Export the same class as the default export ([385f981](https://github.com/alampros/react-confetti/commit/385f981))


### BREAKING CHANGES

* changes module exports

## [3.1.2](https://github.com/alampros/react-confetti/compare/v3.1.1...v3.1.2) (2019-07-11)


### Bug Fixes

* **deps:** upgrade deps ([41c7dd0](https://github.com/alampros/react-confetti/commit/41c7dd0))

## [3.1.1](https://github.com/alampros/react-confetti/compare/v3.1.0...v3.1.1) (2019-07-05)


### Bug Fixes

* **deps:** upgrade deps ([34385dc](https://github.com/alampros/react-confetti/commit/34385dc))

# [3.1.0](https://github.com/alampros/react-confetti/compare/v3.0.0...v3.1.0) (2019-04-25)


### Features

* add `initialVelocityX` and `initialVelocityY` props ([bfc2ff5](https://github.com/alampros/react-confetti/commit/bfc2ff5))

# [3.0.0](https://github.com/alampros/react-confetti/compare/v2.8.0...v3.0.0) (2019-04-25)


### Features

* forward ref to inner canvas ([091b055](https://github.com/alampros/react-confetti/commit/091b055))


### BREAKING CHANGES

* wrap default export in forwardRef

# [2.8.0](https://github.com/alampros/react-confetti/compare/v2.7.3...v2.8.0) (2019-04-17)


### Features

* Add onConfettiComplete param ([8af89f2](https://github.com/alampros/react-confetti/commit/8af89f2))

## [2.7.3](https://github.com/alampros/react-confetti/compare/v2.7.2...v2.7.3) (2019-04-03)


### Bug Fixes

* **Performance:** stop raf loop before unmounting ([fc2b48f](https://github.com/alampros/react-confetti/commit/fc2b48f)), closes [#47](https://github.com/alampros/react-confetti/issues/47)

## [2.7.2](https://github.com/alampros/react-confetti/compare/v2.7.1...v2.7.2) (2019-04-02)


### Bug Fixes

* Destroy confetti instance on unmount ([6965e37](https://github.com/alampros/react-confetti/commit/6965e37)), closes [#47](https://github.com/alampros/react-confetti/issues/47)

## [2.7.1](https://github.com/alampros/react-confetti/compare/v2.7.0...v2.7.1) (2019-04-02)


### Bug Fixes

* trigger release to fix typescript typings ([817b7c0](https://github.com/alampros/react-confetti/commit/817b7c0)), closes [#45](https://github.com/alampros/react-confetti/issues/45)

# [2.7.0](https://github.com/alampros/react-confetti/compare/v2.6.1...v2.7.0) (2019-03-18)


### Bug Fixes

* point to entire types dir ([3c3184c](https://github.com/alampros/react-confetti/commit/3c3184c))


### Features

* **build:** storybook ([462f682](https://github.com/alampros/react-confetti/commit/462f682))

## [2.6.1](https://github.com/alampros/react-confetti/compare/v2.6.0...v2.6.1) (2019-03-13)


### Bug Fixes

* add rotation direction to fix jump visible when rendering asymetrical shapes ([ca2b22b](https://github.com/alampros/react-confetti/commit/ca2b22b))

# [2.6.0](https://github.com/alampros/react-confetti/compare/v2.5.0...v2.6.0) (2019-03-10)


### Features

* Add prop to draw custom confetti ([992376b](https://github.com/alampros/react-confetti/commit/992376b))

# [2.5.0](https://github.com/alampros/react-confetti/compare/v2.4.1...v2.5.0) (2019-03-08)


### Features

* **build:** output and add types to package ([1349e1d](https://github.com/alampros/react-confetti/commit/1349e1d))
* **ParticleGenerator:** Bulk particle addition ([3c9e108](https://github.com/alampros/react-confetti/commit/3c9e108))
* use easing function for adding confetti ([829a560](https://github.com/alampros/react-confetti/commit/829a560))

## [2.4.1](https://github.com/alampros/react-confetti/compare/v2.4.0...v2.4.1) (2019-02-28)


### Bug Fixes

* **test:** testing semantic-release ([ef3dfa8](https://github.com/alampros/react-confetti/commit/ef3dfa8))
