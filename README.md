# Vue 3 Starter With Vite

This project built with Vue, TypeScript.

## Major Dependencies

- Ant design
- Tailwind
- Pinia with persist
- i18n
- jest for testing
- cypress for e2e testing
- axios

## Intro

This application use:

- node : >= 16 (Recommended for using LTS version)

---

## Starter Introduction

This application use DDD pattern. Here you can learn a little about DDD pattern, [Visit me](https://www.geeksforgeeks.org/domain-driven-design-ddd)

---

## Installation

1; Install dependencies using yarn

```shell
yarn
```

2; Change **.env.local.example** to **.env.local**

You must change the .env.local.example to .env.local and match it with you local machine.

3; Run project for development

```shell
yarn dev
```

---

## Build The App

1. Build the app

```shell
yarn build
```

2. (Optional) If you want to check the preview of build

```shell
yarn preview
```

---

## Test

Run test across all files

```shell
yarn test:unit
```

---

## E2E Test

Run End to End Test across all files

```shell
yarn test:e2e
```

## Folder Structure

Project structure for this react starter

```javascript

public                    
|   |_______favicon.ico
src                                         // Entry point for the app.
|___modules                                 // Base Modules for the app.
|   |_______app                             // Core of feature in the project.
|   |   |________assets                     // Contain all assets for the app.
|   |   |________composable                 // Contain all composable for the app.
|   |   |________constants                  // Contain all constants for the app.
|   |   |________router                     // Config base router
|   |   |________store                      // Config base store
|   |   |________ui                         // Base UI for the app.
|   |   |   |________components             // Base Components for the app.
|   |   |   |   |_______________base        // Contain all base components for the app.
|   |   |   |   |_______________common      // Config base entry point and not found page.
|   |   |   |   |_______________layouts     // Base Dynamic Layouts for the app.
|   |______auth                             // Auth feature in the project.
|   |   |________locale                     // Base file locale auth feature in the project.
|   |   |________models                     // Base models typescript interface for the app.
|   |   |________routes                     // List of route for auth feature in the project.
|   |   |________store                      // Config store for auth feature in the project.
|   |   |________ui                         // Base UI for auth feature in the project.
|   |   |   |________components             // Contain Components for auth feature in the project.
|   |______{feature}                        // Other feature in the project.
|___plugins                                 // All plugins for the app.
|   |______axios                            // Axios plugin for the app.
|   |______i18n                             // i18n plugin for the app.
|   |______{another}                        // Another plugin for the app.
tests                                       // All test for the app.
|   |______cypress                          // All cypress test for the app.
|   |______jest                             // All jest test for the app.
```

If you want to create folder outside declared above, you can create, but, don't forget to update this docs.

---

## Rules

1. Common Rules, for better versioning, file naming or another things. e.g:

Folder / File Rules (we using kebab case for this)

```javascript
|__feature-folder
|____feature-folder-item
```

What happen if you have nested folder? I must write the prefix of the parent folder? no, do this instead

```javascript
|__parent-folder
|____children
|_______children-item
```

You need to use the prefix folder if there's any children inside it and no related to parent of another parent folder.

---

Import Rules

```javascript
// Don't do this when use import
import { ahhMyFileHere } from "../../../../components/ahhMyFileHere.tsx"; // ❌
import { ahhMyFileHere } from "../components"; // ❌, Bad when start to refactoring

// Instead, do this when use import
import { ahhMyFileHere } from "@/components"; // ✅ good for global importing, not causing any trouble
import { ahhMyFileHere } from "./components"; // ✅, it's okay if inside current folder
```

Comment & Function Rules

```javascript
// Just some function that void ❌
const func = (): void => {
  console.log("Hi!");
};

/**
 * @description Function that void, just for fetching data ✅
 *
 * @param {Object|SomeInterface} payload
 *
 * @return {void} void
 */
const func = useCallback((payload: SomeInterface): void => {
  console.log("Hi!");
}, []);

/**
 * @description Function for load data to API ✅
 *
 * @method GET
 * @access private (only user that logged in)
 *
 * @return {void} void
 */
const loadData = useCallback((): void => {
  console.log("Loading data...");
}, []);
```

Variable naming (We using snake_case and camelCase)

Note: snake_case, we use for just namespace.

```javascript
const someVariable = 'Hello' ✅
const someNamespace_someVariable = 'There!' ✅

const namespace_another_namespace_someVariable = 'Hello There'❌
```

---

## Update History

**7 September 2021**

- First initial documentation

**30 October 2022**

- Create new base component
- Update documentation

---

## Credits

Thanks for reading this documentation, MIT License.
****