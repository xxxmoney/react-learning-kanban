
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

