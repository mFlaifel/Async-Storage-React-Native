# Async-Storage-React-Native

AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.

It is recommended that you use an abstraction on top of AsyncStorage instead of AsyncStorage directly for anything more than light usage since it operates globally.

On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.

The AsyncStorage JavaScript code is a facade that provides a clear JavaScript API, real Error objects, and non-multi functions. Each method in the API returns a Promise object.

# Installation:

```js
npm i @react-native-community/async-storage

or

yarn add @react-native-community/async-storage

```

# Usage:

- Usage: https://react-native-community.github.io/async-storage/docs/usage

- API: https://react-native-community.github.io/async-storage/docs/api

# exercise:

- Save login details (username , password ) in local storage.
- Remove the login details from local storage when the user press on log off button.

# resources:

- documentation :
  https://react-native-community.github.io/async-storage/,
