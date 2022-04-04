# RisQ

## Folder Structure
|Location|Description|
|---|---|
|`/src/`|Application Source
|`/src/assets`|Static assets that will be bundled with the application (ex. SVG, PNG etc.)|
|`/src/components`|Components that will be used by multiple **features**|
|`/src/components/common`|Common components that are stateless and will be used by any other component present on the application|
|`/src/components/modals`|[Modal](#modals) components|
|`/src/configs`|Application configuration, Constants, library configuration data etc.|
|`/src/core`|Core application functionality (ex. [Redux Store](#redux), [Axios instances](#axios), [Local Storage access](#Local%20Storage) etc.)|
|`/src/features`|Application features that are isolated in their dedicated folder|
|`/src/helpers`|Application's domain specific classes and functions|
|`/src/layouts`|Application layouts, [Routing](#routing) (ex. Private Layout, Public Layout etc.)|
|`/src/layouts/pages`|Components for entry points of individual pages|
|`/src/models`|Models that are used application-wide|
|`/src/typedefs`|Global module type declarations and overrides|
|`/src/utils`|Utility classes and functions|

---

## Redux
|Location|Description|
|---|---|
|`/src/core/Redux`|Root folder for Redux|
|`/src/core/Redux/Slices`|All Redux slices will be placed here|

**Notes:**
* The main store is located at `/src/core/Redux/ReduxStore.ts`.
* No slices can have duplicate property of variable. If that happens, it's a problem with how the data is structured, not because of Redux or Redux-Toolkit.

---

## Local Storage
|Location|Description|
|---|---|
|`/src/core/LocalStorage`|Local Storage access classes|
|`/src/core/LocalStorage/BaseStorage.ts`|Base class that will be extended to write access classes|

**Notes:**
* Storage classes will always extend the base class.
* Base class methods will be used to read from / write into *localStorage*.
* Storage classes will have to implement ***StorageNamespace*** variable, which will be prefixed to the given key.
* Storage classes will implement the typings and use appropriate base class methods. Data serialization for *localStorage* will be done by the base class.

---

## Axios
|Location|Description|
|---|---|
|`/src/core/Axios`|Root folder for Axios|
|`/src/core/Axios/interceptors`|Root folder for Axios interceptors|
|`/src/core/Axios/AxiosInstance.ts`|All modified Axios instances will be places here|

---

## Routing

|Location|Description|
|---|---|
|`/src/layouts/appLayout.tsx`|Routing entry-point for the Application|
|`/src/layouts/publicLayout.tsx`|Publicly accessible routes will be defiend here|
|`/src/layouts/privateLayout.tsx`|Private/restricted routes will be defiend here|
|`/src/configs/appRoute.ts`|All UI and API route end-points are stored here|

**Notes:**
* Before add a new route, it must be added to the pattern of root routing entry-point in here `/src/layouts/appLayout.tsx`.

---

## Bootstrap Integration
* **Bootstrap** depends on **jQuery** and **popper.js** package, **React-Bootstrap** is just a wrapper around it.
* These packages has been imported on the `/src/App.tsx` file with the correct precedence.

---

## Modals

|Locatoin|Description|
|---|---|
|`/src/components/modals`|Modal Components will be stored here|
|`/src/components/modals/appModals.tsx`|All modal components will be rendered here|
|`/src/core/Redux/Slices/sliceUi.ts`|Modal state (show/hide), their data types and actions to open/close them is defined here|

**Notes:**
* Each modal will determine it's `show` state from **Redux Store**.
* Each modal must have it's defined data type (ex. in `/src/core/Redux/Slices/sliceUi.ts`)
* `appModals.tsx` will be included in an entry-point of the application (ex. `/src/layouts/appLayout.tsx`) so that it will be always present in the application.
* Modals must not be rendered in the DOM unless it's open. `React-Bootstrap` does this automatically. If other libraries are used, this must have to be made sure.

---

## Documentation Links
|Name|Descriptoin|Documentation Link|
|---|---|---|
|**React**|Reactive UI Library|[Documentation Website](https://reactjs.org/docs/getting-started.html)|
|**Redux**|State Management|[Documentation Website](https://redux.js.org/introduction/getting-started)|
|**React-Redux**|Redux bindings for React|[Documentation Website](https://react-redux.js.org/introduction/quick-start)|
|**Redux-Toolkit**|Toolset for efficient Redux development|[Documentation Website](https://redux-toolkit.js.org/introduction/quick-start)|
|**Axios**|Promise based HTTP client|[Github Readme](https://github.com/axios/axios)|
|**React Router**|Declarative routing for React|[Documentation Website](https://reactrouter.com/web/guides/quick-start)|
|**React Hook Form**|Form Library|[Documentation Website](https://react-hook-form.com/get-started)|
|**Bootstrap 4.6.x**|Framework for building responsive, mobile-first sites|[Documentation Website](https://getbootstrap.com/docs/4.6/getting-started/introduction/)|
|**jQuery**|JavaScript library for document traversal and manipulation|[Documentation Website](https://api.jquery.com/)|
|**React Bootstrap**|Component library built on top op Bootstrap|[Documentation Website](https://react-bootstrap.github.io/getting-started/introduction)|
|**Popper.js v1.x**|Popover library for Browser|[Documentation Website](https://popper.js.org/docs/v1/)|
|**React Datepicker**|A simple and reusable datepicker component for React|[Documentation Website](https://reactdatepicker.com/)|
|**date-fns**|Toolset for manipulating JavaScript dates|[Documentation Website](https://date-fns.org/)|
|**React Select**|Select Input control for ReactJS|[Documentation Website](https://react-select.com/home)|
