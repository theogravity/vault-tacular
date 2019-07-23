# UNRELEASED

Fix `getTokenUsingIam` refresh helper, add unit tests for `IamTokenManager`

# 0.3.3 - Mon Jul 22 2019 20:17:35

Fix `getTokenUsingIam` helper, where the token refresh callback was improperly defined

# 0.3.2 - Mon Jul 15 2019 22:03:13

- Add new type, `AuthTokenHelperFunc`, for defining Token Helpers
- Update all token helpers and `IBaseClient` accordingly to reflect the new type

# 0.3.1 - Sat Jul 13 2019 20:16:18

- [Breaking] `getTokenFromFile` moved into `AuthTokenHelpers.getTokenFromFile`
- Add IAM token helper, `AuthTokenHelpers.getTokenUsingIam`
- `AwsAuth` now has required dependency `aws4`, is an optional install
- Add easier IAM auth via `AwsAuth.getTokenUsingIamLogin`

# 0.2.1 - Fri May 31 2019 19:31:51

[Breaking] Rename `authTokenFn` -> `authToken`, allow for a string value
along with a fuction

# 0.1.6 - Fri May 31 2019 02:28:10

Fix default exports, add interfaces to exports

# 0.1.5 - Mon May 20 2019 07:35:32

Add helper function, `getTokenFromFile` to load a token from a file.

# 0.1.4 - Mon May 20 2019 07:11:56

Update docs

# 0.1.3 - Mon May 20 2019 06:44:33

First release.
