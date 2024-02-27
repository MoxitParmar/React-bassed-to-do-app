### Basics of redux

- redux is used to manage how to write our satate variable and mangage it
  
- redux help tio build larger and more complex projects to help in manage states of that project
- **Store** = store is a central library that stores and manage states (store is a js object)
- **Reducer** = it i like the setState but it's for the store 
    - reducer update our state variable form the store object 
    - we have to give the state and the event action as an arrgument
    - example -> (state , action ) => setState
    - we can assign reducers to multiple state variable to propogate change at the same time
- **Slice** = it is the collection of different reducers and action events that is combined for a feature
---
### Basic summery
- Store = collection of states
- Action = an event action for the state 
- reducer = it update the state value like Setstate on the basis of defined action
- slide = it is the collection of reducers
- --

### how to use Redux

- make a react app first
- then install `npm install @reduxjs/toolkit` , `npm install react-redux` 
- we have to create a app folder inside the src and in the app folder create a store.js file for creating stores their
- for creating reducers we have to make another directory with the name of features and in that create js files as slices and initialize reducers their as given in this example (thier is another directory too inside the features but it is not always required)
---

### the defination of reducers and useDispatch()
- **useDispatch** = Allows React components to dispatch actions to the Redux store, triggering state updates.
- **reducers** = Reducers are the workhorses of Redux! They're pure functions that handle the state updates based on dispatched actions.
---

### the pathway of working with redux
1. create a store
2. create Actions 
3. create reducers and assign the updated value to store `reducer: theReducer,`
4. create useDispatch() hook and link it to our reducers for passing the payload 
---
