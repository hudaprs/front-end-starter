# React Starter With Vite

This project built with React, TypeScript.

## Major Dependencies

- Ant design
- Tailwind
- Redux toolkit with persist
- i18n
- jest for testing
- axios
- styled components

## Intro

This application use:

- node : >= 16 (Recommended for using LTS version)

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

## Build Tailwind

Build tailwind according class that used in component

```shell
yarn build:tailwind
```

---

## Test

Run test across all files

```shell
yarn test
```

---

## Starter Introduction

This application use DDD pattern. Here you can learn a little about DDD pattern, [Visit me](https://www.geeksforgeeks.org/domain-driven-design-ddd)

---

## Folder Structure

Project structure for this react starter

```javascript
config                         // Contain config of project, but not related to client (development only).
|___jest                      // All config about jest / testing of this project.
|
src                           // Entry point for the app.
|___assets                    // Assets, images, fonts, styles, etc.
|   |______images
|   |____________icon         // Contain icon for the project
|   |____________{another}
|   |______styles
|   |______fonts
|
|___features                  // Contain all of your features
|   |______app                // Core of feature in the project, usually contain reusable API.
|   |____________components   // Contain components
|   |____________constant     // Contain static value / constant
|   |____________hooks        // Contain custom hooks
|   |____________interfaces   // Contain interfaces
|   |____________locale       // Contain localization
|   |____________redux        // Contain redux / state management
|   |____________router       // Contain routing, according feature
|   |____________ui           // Contain UI / View for the app
|   |____________utils        // Contain utility that reusable for another component or it-self
|   |____________{another}    // Another folder for specific action
|   |
|   |______{another}          // Another features, the content same as above.
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
import { ahhMyFileHere } from '../../../../components/ahhMyFileHere.tsx' // ❌
import { ahhMyFileHere } from '../components' // ❌, Bad when start to refactoring

// Instead, do this when use import
import { ahhMyFileHere } from '@/components' // ✅ good for global importing, not causing any trouble
import { ahhMyFileHere } from './components' // ✅, it's okay if inside current folder
```

Export Rules

```javascript
// Just some usual component
const SomeComponent = () => <></>

// Export using named export ✅
export { SomeComponent }

// Don't do this ❌
export default SomeComponent
```

Comment & Function Rules

```javascript
// Just some function that void ❌
const func = (): void => {
  console.log('Hi!')
}

/**
 * @description Function that void, just for fetching data ✅
 *
 * @param {Object|SomeInterface} payload
 *
 * @return {void} void
 */
const func = useCallback((payload: SomeInterface): void => {
  console.log('Hi!')
}, [])

/**
 * @description Function for load data to API ✅
 *
 * @method GET
 * @access private (only user that logged in)
 *
 * @return {void} void
 */
const loadData = useCallback((): void => {
  console.log('Loading data...')
}, [])
```

Variable naming (We using snake_case and camelCase)

Note: snake_case, we use for just namespace.

```javascript
const someVariable = 'Hello' ✅
const someNamespace_someVariable = 'There!' ✅

const namespace_another_namespace_someVariable = 'Hello There'❌
```

---

1. Slice definition.

```javascript
// 1. Create folder of feature inside the redux folder.
// 2. Make sure you name it correctly, such as redux/app.slice.ts

// ====== Example of name spacing your variable

// State
const featureName_yourStateName = ✅
const yourStateName = ❌

// Mutations
const featureName_YOUR_MUTATION = ✅
const YOUR_MUTATION = ❌

// Api
const featureName_yourAction = ✅
const yourAction = ❌

// Here's pattern of the slice code:
const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    app_SET_LOADING: (
      state,
      { payload }: PayloadAction<IAppAttrsLoading>
    ): void => {
      state.app_loading = appUtils_mapLoading(state.app_loading, payload)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(app_initialized.fulfilled, (state, { payload }) => {
        state.app_state = payload
      })
  }
})


// Export Mutations
export const { app_SET_LOADING } = app.actions

// Export reducer
export default app.reducer


// And the api it-self (different file, this should be in app.api.ts, but in the same dir).
// Should be like this for the simplified

/**
 * @description Initialize the app
 *
 * @param {IAttrs} payload
 */
export const app_initialized = createAsyncThunk<IResponse, IAttrs>(
  'app/initialize',
  async (payload, thunkApi) => {
    thunkApi.dispatch(app_SET_LOADING({ type: ACTION, value: true }))

    await commonUtils_delay(3000)

    thunkApi.dispatch(app_SET_LOADING({ type: ACTION, value: false }))

    return // Return something useful
  }
)
```

---

2. Router, just like common routes, this project using [react router v6](https://reactrouter.com/en/v6.3.0/getting-started/overview):

---

3.  Pages or maybe another folder structure, this is complex scenario, but, you can see this schema for the usage and the folder structure of it.

Folder Structure Part 1

```javascript
// First, go to pages folder, and make your own folder according to the features.

// For example, you just create one feature name, called home. So, you just create the folder name called *home*

// We already inside home folder here. In here, you start writing some code, e.g:

// 1. Create your entry point for the home folder, named index.ts.

export * from './YourComponentName'
```

Folder Structure Part 2

```javascript
// 2. Create your component name, to make that, you need another folder inside this home folder, e.g: YourComponentName/index.tsx

const YourComponentName = (): JSX.Element => {
  return <></>
}

export { YourComponentName }

// Just like that, then, what happens when you have another component for this pages? So, lets move to the third step.
```

Folder Structure Part 3

```javascript
// 3. Make your reusable component for the component you make above, you must make another entrypoint for your reusable component, e.g: ./components/index.ts

export * from './YourComponentNameReusable'
```

Folder Structure Part 4

```javascript
// 4. Define your reusable component just like step 2. So, make sure you make another folder inside this ./components, e.g: YourComponentReusable/index.tsx

const YourComponentReusable = () => <></>

export { YourComponentReusable }
```

Folder Structure Part 5 (End)

```javascript
// Easy diagram to define this folder structure, just like this:

|___app
|______ui
|_________index.ts                          // Entry point for the app pages
|_________components                        // If you have component that related to home feature
|_________YouComponentName                  // Your component
|____________index.tsx
|____________interfaces.ts                  // if you have scoped interfaces
|____________components                     // If you have another component related to this YourComponentName
|_______________index.ts                    // Your entry point for component related
|
|_____________________                      // the rest structure is same as the YourComponentName

// For advance example, you can ask to the member of this project. Or maybe you can see the already worked pages folder XD.
```

---

5. Hooks, to make reusable hook quite simple. Just make sure you to use **use** prefix for the folder name and the filename itself.

---

6. Interfaces, for the interface, it's just a simple you can see. If you develop new feature, don't forget to make the interface first. Just like common interface, it's look like this:

```typescript
// Don't forget to make prefix for interface file using I, capitalize, to define it is the interface, not some common file.
export interface IProfilePersonalData {
  profilePhoto?: string
  name: string
  email: string
  phoneNumber: string
  address: string
  birthDate: string
  npk: string
}
```

---

Another documentation will be updated soon.

---

## Update History

Last updated: 7 September 2021

- First initial documentation

---

## Credits

Thanks for reading this documentation, made with ❤️. MIT License😁
