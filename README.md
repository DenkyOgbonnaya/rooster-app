This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# How to install and run locally

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone this repository to your local system

1. Open your terminal and change directory to where you clone this project
2. On the root directory of cloned the project, install dependencies using the command npm install_
3. If change directory into the ios folder and run the command _pod install_ (only required for ios Build)

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# Using npm
npm start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
#  Using npm
npm android
```

### For iOS

```bash
# using Yarn
npm ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Executive Summary

### Project Overview
**Rooster App** is a React-Native implementation of a Rooster app. The platform shows shifts and shifts details for the current calendar week. It is built as a monolithic React-Native cli application using TypeScript and React-Navigation, designed for scalability and maintainability through a modular architecture.

### Key Capabilities
-   **Shifts**: track and monitor shifts for the week.
-   **View shifts**: View information about a shift, teams and notes.

This is a [**Video Demo**](https://www.loom.com/share/808ea154bc49462ea416759fb4dff4e6)

### Technology Stack
-   **Library**: React-Native CLI
-   **Language**: TypeScript
-   **Navigation**: React-Navigation (Native Stack and Bottom Tab)
-   **Styling**: Tailwind RN(Nativewind)

---

## 🏗 System Architecture

### Overview
The Rooster App follows a **Modular Monolith** architecture. The codebase is organized by Modules. This structure promotes separation of concern and makes the codebase easier to navigate and maintain.


```bash
├── src
│   ├── assest(images, svgs, fonts etc)
│   ├── components (reusable components, buttons, form inputs etc)
│   ├── constants (All constant app vairiables)
│   ├── hooks (custom reausable hooks)
│   │── libs (third party library configs)
│   ├── navigations (screens navigations  setup)
|   ├── screens (application screens)
|   ├── services (http api request services)
|   ├── styles (style guide and theming configs)
|   ├── types (types definitions)
|   ├── utils (utility helper functions)

```
