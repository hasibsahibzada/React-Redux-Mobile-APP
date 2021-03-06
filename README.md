# Template of Mobile App based on React Redux.

This is a basic React-redux framework to created super fast mobile applications.
This app was built using [Onsen UI](https://onsen.io/), a hybrid app framework that provides both Material Design and iOS flat design. 

## How to run it

To run it simply do:

```bash
npm install
npm start
```

The app will run at [http://localhost:9000](http://localhost:9000).

## How to build it

You can build it using Cordova.

- [Install Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#installing-the-cordova-cli):

```
npm install -g cordova
```

You need to build the project:

```
npm run build
```

Add a platform to run it on a device or emulator. For Android:

```
cordova platform add android
cordova run android
```

This assumes that you have the Android SDK installed.
