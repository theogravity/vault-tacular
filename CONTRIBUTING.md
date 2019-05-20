# Contributing

Contributions of all kind are welcomed!

[TOC]: #

# Table of Contents
- [When implementing a new API](#when-implementing-a-new-api)
    - [Ask questions](#ask-questions)
    - [Type everything](#type-everything)
    - [Creating interfaces](#creating-interfaces)
    - [Parameter lists](#parameter-lists)
    - [Document your API](#document-your-api)
    - [Tests](#tests)
- [Submitting a PR](#submitting-a-pr)


## When implementing a new API

### Ask questions

If you are adding something that does not fit into the existing code
infrastructure, create an issue asking how to approach the problem.

### Type everything

This project uses Typescript, and everything must be typed.

- Using `any` should generally not be used.

### Creating interfaces

Interfaces are defined in `interfaces`

  * Interfaces and types that are shared between everything is defined
in `IBaseClient`
  * Look at the existing interface examples to understand how they should
be designed

### Parameter lists

  * I have defined url parameters, eg `/secrets/:path`
to be an actual parameter in the function list as opposed to being in the
payload object, ex `function (path: string, payload: object)`
  * If an API call has less than three params, it might make sense to
make them into function parameters instead of pulling them into a payload
object.
    * An example would be user creation, where it is defined as
`function (username: string, password: string)`, as opposed to
`function (username, payload: object)`, even though `password` is fed
through the request body

### Document your API

- Document parameters and add descriptions to the API methods.
- Always add a `@link` in the comments to the Vault API section you are
implementing.
- Be aware of the Vault API marking a parameter as required when building
your interfaces

### Tests

Please add a unit or integration test for the new feature you are adding.

The tests are written in `jest`. If you need to simulate API calls,
mocks or `nock` should be used.

Tests should always go into a `__test__` directory.

- Unit test files should end in a `.test.ts` extension
- Integration test files should end in `.test-int.ts`

## Submitting a PR

- Describe it is your feature does in the PR comments
- Do *not* version bump `package.json`.
- Use `npm run changelog:prepare` to stamp the `CHANGELOG.md` file.
Add your release comments below the stamp.

When your PR is accepted, it will be merged in and the CI should
auto-bump the version and publish a new npm version.
