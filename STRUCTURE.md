# Code Base Structure for better coding Experience

In order to minimise the size of the files and make usability of UIs as maximum as possible we thought about using the following structure to better organize your project.

## Folder Names & Function

### `public\assets`

This folder should contain all assets that will be inserted directly in the `index.html` file, generaly used for meta icons and holders picture.

### `public\fonts`

You may find the use of it in case it is hard for you to find a direct link of the font you want to use, just put the `.ttf` file in this folder and link it to the `index.html` file.

### `src\assets`

You will be putting in this folder all images that are dynamicaly used in the application like placeholder, background images ..., after the integration the will either be deleted or hosted on cloudenary and place the database where they can be accessible.

### `src\pages`

This folder will containt all the pages of the application in form of a single file regrouping component of the page, it will help exchanging and reusing the components easily after each component creation.

### `src\components`

In here you will find a folder of each page containing the components that represents parts of the page, you will be decomposing the page on several parts and code them in different files to use them after.

### `src\components\Layout.js`

You will be putting all routers in this folder, the main router is called `Layout.js` that regroups all routers you will use, you can also use only this file to contain all the routers you need.

### `src\styles`

We prefer to use style as separate components for each page, it will help in the styling process, usability of files in order to change styles and implimentation of styles components module if the team agreed to use it.

`Note:` Please Try to respect this structure in order to make the work coherant.
`Another Note:` Please try to not interfeer in other work or in their configuration, make your code as independant as possible.

## Tailwind Test

In order to do a test on Tailwind CSS configuration, just run `npm start` in your command prompt, some predefined classes are already implimented.

### TailwindCSS Plugin

Please in order to have better TailwindCSS, Install Tailwind CSS IntelliSense Plugin.