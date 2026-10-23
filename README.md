# WorkshopApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Installation

Use Node.js 20.19 or a newer Angular 21-supported release. From the repository root,
run `npm ci` to install the exact dependency versions in `package-lock.json`.

Vitest requires version 4.1.12 or newer to include the fixes for
CVE-2026-112949 and CVE-2026-112950 in `@vitest/mocker`. The
`@modelcontextprotocol/sdk` override keeps Angular CLI's pinned transitive
dependency on a patched release for CVE-2026-111771. Keep these constraints when
refreshing the lockfile.

The SockJS-scoped `uuid` override pins 11.1.1, the first release fixing
GHSA-w5hq-g745-h8pq. It retains the CommonJS `require('uuid').v4()` API used by
SockJS; UUID 12 and newer are ESM-only. This fixes the Angular build tooling's
webpack-dev-server dependency chain without upgrading Angular or changing
builders. Keep the override until SockJS updates its UUID dependency or the
legacy webpack tooling is removed. The lockfile also keeps `ip-address` at
10.7.4 or newer to fix GHSA-rxp7-6hxx-x8q5.

Validate dependency updates with `npm ci`, `npm run build`,
`npm test -- --watch=false`, and `npm audit`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
