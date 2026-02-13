
# Simple Kanban made with React TS for learning purposes

- TLDR: just a simpler project to get me up to speed with React TS
- I'll be writing my notes here:


## Project Initialization and Setup
- First I initialized the project simply by `npm create vite@latest react-kanban -- --template react-ts`
    - This creates the React TS project with Vite
    - Then just runnning `npm install` and `npm run dev` runs the app, neat
- Next I cleaned up the project - cleaning up the included `index.css` and `App.css`
- I also cleaned up the `App.tsx`

## Grasping the React - what's the structure?
- Once cleaned up and running, it's time to understand the very basics
- From what I looked through and understood, it's similar to Vue's basic concept
    - There is a defined index.html file - with the root element with id `root`
        - This defines the element where all the neat React components will be injected into - or rather the `main.tsx` and the components inside this one
        - Anyways, below the root element we can see including of the script itself - the script type module with `main.tsx`
    - The `main.tsx` is the main script file it defined which element to use as root and what component to render there - in this case the `App.tsx`
    - Component is similar to of what I know in Vue
        - But in `React`, the difference is that component is essentially just a function
        - This function returrns a template - it returns fragment - the `<></>` and inside it the elements and components
        - So as of now, I have just a simple component with `header`, `main`, `footer`
    - As of now, the components seem straightforward and intuitive - it's just a function which returns template fragment, kinda neat so far, I wonder regarding the props passing, state management, etc


## The component - TSX
- Once I got this, I moved along - to understanding the components
- Essentially, unline Vue, in which is script and template, in React, it's mixed up
- That's TSX (or JSX with JavaScript, we are using TypeScript here)
- Easily explained - it look like  HTML, but it's syntax sugar
    - We are basically running JavaScript (or rather TypeScript in this case but w/e, i'll mix it up here for sake of explanation) code along with specifying the HTML

## Creating and setting up first components
- As I am making a simple Kanban app, let's create the first components - for now static
- As mentioned, each component is basically just a function, which returns the template
- I have created simple `TaskCard.tsx` and `Column.tsx` which for now return static HTML
- When specifying properties for elements, for some, like class, we have to use different, like `className` (because they are reserved names - the class in script)
- I have also used using component in other component - improting `TaskCard` in `Column` and using it
- I have also imported and used the `Column` in `App.tsx`

## Start of the line improvements
- Taking my experience with Vue and overall web dev, I have already made the components as these:
    - ColumnGroup - this will hold all the column
    - Column - the column, holds the tasks
    - TaskCard - displays the task
- For style convenience, I have also included the SASS - AKA .scss - yipee, I can now do BEM easily
    - Sidenot - got sidetracked because I heard that Vanilla CSS now support this, but it just supports nested selector syntax, not partial like &__title lel

## From static to DYNAMIC, yay!
- Now, it was time to start figuring out the dynamic part - after I have spent way too much time on tiddly-iddlying the scss, etc
- As I have pretty much known and guessed, it React doesn't use some directives like Vue, it uses JavaScript functions
- First things first - I have defined the TypeScript types for my components in src/types.ts
    - This is pretty neat - I have used mostly JavaScript, so TypeScript is nice change of pace - I'll use TypeScript more often, it's kinda godsent
- With types defined, I went ahead and started defining props - differnt from Vue - in React, as the component itself it a function, it takes a one object parameter - to get parameters, we simply use destructuring
    - Got stuck a bit on this lol - so, once again, use DESTRUCTURING on the ONE object parameter in the component function
- I have updated the components
- Also, I have added a state - in `App`, I have used `useState` - something like `ref` in Vue, but here, we have the value itself and update method, interesting
- Anyways, I have defined default data for state, set up the components - now it works - yay!

