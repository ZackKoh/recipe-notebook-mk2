# Objectives of the Application

About 2 years ago, I wrote a sample application, the recipe notebook, to showcase what I knew of React.

And since then, many things have changed... The stacks that I have used in the past have since undergone massive changes

So I thought to myself, if I were to write this application today, what would it look like now?

This app is the answer to that question.

# New features compared to the last iteration

## Typescript support

This app is now written in Typescript, and typed accordingly.

## Testing

This app now has tests! I will be using Jest, React Testing Library and the events library to adhere to the following principle:

> The more your tests resemble the way your software is used, the more confidence they can give you.

## New packages that require new approaches

### Styling library via Tailwind CSS

I used to use Material-UI for the styling library, but since version 5, it has changed significantly and no longer appears to be as approachable compared to when I last used it.

Now I will be using Tailwind CSS for the styling. My hope is that it style would be constrained enough to be consistent, but flexible enough for me to customise.

### React Router v6

Another library that underwent a breaking change while I was focused elsewhere. Also part of the reason why I would like to try tailwind; It seems easier to add header and drawer components now.

### Redux via the toolkit

Every time I go to the redux site, they always push their toolkit. Alright, alright, I will use the toolkit. I just hope I don't confuse this with vanilla react redux.

The toolkit includes the following, nicely configured: thunk, Immer, and a logger. Let's hope I can get used to it.

## Other improvements

Of course my original application had more room for improvements. Let's see how many I can cram into it.

# What I did not manage to do in the end

## Use a custom bundler

It's currently beyond my ability to do so. The alternatives (Snowpack, then Vite) are not ready enough for me to use them out of the box. There's too much to learn...

# Running the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
