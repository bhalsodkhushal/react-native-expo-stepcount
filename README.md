<!-- Title -->
<p align="center">
  <a href="https://github.com/expo/examples">
    <h1 align="center">StepCount - React Native Expo App</h1>
  </a>
</p>

<!-- Body -->

## Project Setup Steps

- Setting up the react native development environment
- Clone the project repo
- Run npm install and move to your project root directory
- `npm run ios` -- Build the iOS App (requires a MacOS computer).
- `npm run android` -- Build the Android App.
- `npm run web` -- Run the website in your browser.

## Features

- Track walking steps and displaying
- Display burnt calories

## App built with

- React Native - Expo
- ESLint for code syntax
- Expo EAS Build

## Generate Build

- `eas build --profile preview --platform ios`
- `eas build --profile preview --platform android`

- `eas build --profile test-flight --platform ios`
- `eas submit --platform ios --wait --id $buildId --profile test-flight --non-interactive`

- `eas build --profile production --platform ios --non-interactive --json > output.json && buildId=$(cat output.json |   jq --raw-output '.[0].id')`
- `eas submit --platform ios --wait --id $buildId --profile production --non-interactive`

### Authors

- Khushal Bhalsod
- Vikas Pandey
