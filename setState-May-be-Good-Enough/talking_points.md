setState May be Good Enough

Timeline:
- 5 minutes on opener
  - About me
  - Realized I can't give a talk on how to use React and how to use Redux and how React/Redux projects should be structured, etc
    - setState is just the name of a method that react uses. I'll explain it later.
  - Why this talk?
    - (Show off Dan's quote)
      - People gravitate towards Redux if they're building React.
    - Redux is complicated. React-redux is complicated.
    - Classic issue of short term vs long term decision-making.
      - Features is probably not the correct y-axis. Because there can be apps with a lot of features that still wouldn't need Redux.
      - It's never that Redux is bad for a "basic" app. It's just that it may be overkill.
    - It's highly opinionated
      - Your state will be represented by one JavaScript object.
      - All changes have to be made as JavaScript objects.
      - Those changes must be passed made via pure functions.
      - Redux is a very small library and learning all of its APIs isn't the problem. But for many people, it creates a paradigm shift: The tiny amount of building blocks and the self-imposed limitations of pure functions and immutable data may make one feel constrained.
  - What we'll cover
    - Progression levels
  - What is state management?
    - Sounds like some buzzword around coding. I feel smarter just saying it.
    - Probably going to butcher this but in my mind, it's just storage and how you handle storage. You want to store that a user is signed in, or the project you're viewing, or whether a div tag is supposed to show.
    - Redux is _not_ storage. But it does make storage cleaner and clearer.

- 5 minutes explaining React
  - While this is not a talk on React, I want to give a very quick overview on React and a problem it solves.
  - (explain index.jsx)
  - React is only being used to render this html
    - function is stateless
  - Let's try and see if we can't use this input field to change the name
    - It does not work and there's probably a fancy JS solution to make this happen. Well, that fancy JS solution is React.
  - By turning this stateful, we'll now be able to make this work.

- x minutes explaining simple state management
  - (Just explain the code)
  - But this isn't what Redux is really looking to replace

- x minutes bringing in an api request
  - show the data structure here and portfolio
  - I want to show all the projects and upon click of project, a featured project will be displayed
  - explain code:
    1. Open app.jsx and go down
  - So this was a little tough to convey and you can see that App is starting to get kind of big.
  - Now I'm not saying that Redux is needed at this point because well, this is still a very small app. But what happens when it gets this big (show portfolio).
    - It's going to get messy. And we can refactor all of this if we want. But Redux is that refactor.
  - So let's bring in Redux now and see if it makes our lives easier or harder. Less confusing; more confusing.

- x minutes explaining Redux
  - Now here's the part where I live code in front of everyone lol
    - Redux, architecturally, is just reducers, actions, and a dispatcher, really.
      - The store is the dispatcher btw. I'll come back to this.
    - I'm not going to bring in any packages yet, just the basics of redux
    - Everywhere that has `setState` is now going to be using the reducer;
    - Add reducer
      - A reducer is always just a huge switch statement
    - Add initial state const
    - this.state = reducer(null, {});
    - changeName
    - And I wouldn't be doing my Redux diligence if I didn't talk quickly about immutability
      - initially show state.name = action.payload.name
      - the slide showing object to object
      - I'll come back later and explain why passing a whole new object versus changing the old object, that can be good
      - But this was a very quick explanation. And so I made a diagram to help show all the things that are easy to explain in 5 minutes. Because I know visuals are helpful.
        - And so I decided to bring in a Redux expert who may be able to explain it better.
    - Add dispatch function
      - `previousState` is just `this.state`
      - `type` is just standard nomenclature
    - updateFeaturedProject
    - componentWillMount
    - What I said earlier:
      - Your state will be represented by one JavaScript object.
      - All changes have to be made as JavaScript objects.
      - Those changes must be passed made via pure functions.
    - This is a very basic example. We're not even using a "store" which could be storing our state via cookie or local storage. We're using the App Component as the "store". And the store isn't complicated, it only does 4 things:
      1. It stores the state
      2. It gives you the state
      3. It dispatches your actions which will update the state
      4. It calls the listener so you can see the change in the UI, if need be
    - And even in this small example, I had to write a lot of code to change the state. Remember that. It's a tradeoff. Every state change will take a long time to write out.
    - But the questions. Is this better? Did it make my code cleaner? Is this easier to maintain? In my opinion, we haven't yet run into a true problem where we would _need_ Redux.
      - Perhaps if the "client" said I want the featured project to persist or I want a lot more UI functionality. You could write out your own coding solution. But a solution for something like that already exists.

- 5 minutes on real examples:
  - veery.cool
  - my portfolio
  - the boilerplate (example of clean code)

- 2 minutes on conclusion
  - Great long term solution
    - Becomes very clear just how **requests** should be made
    - Allows for cleaner code. You can much more easily use single responsibility principle. (explanation of what's happening in every directory).
      - pure functions
        - Pure functions are functions which do not modify their arguments.
      - I asked all my friends about this, and he said that it was cleaner.
      - It allows for your components to no longer have the responsibility of showing _how state is changing_. It insteads allows your components to show _what's happening to your state_. Is that good? In the long term, I'd say so.
    - You could basically retool your whole UI, mid project. The actions, services, reducers, and the store would require almost no changes. None of those are React. Only your containers and components which can then become something else. You get to keep the meat of your app. Flexibility.
    - Show a diagram of what's Redux and what's React
    - Bug fixes. You can _track_ the state as actions are called. What I mean, is you can see the whole state before and after and **during** actions. This is wonderful for debugging. However, you'll probably want to use a tool to help with this.
    - Persisting state. In the past example, maybe you wanted to for the active state to remain the same. Upon refresh, your state will remain. You can use local storage, cookie storage, and so much more. This is where Redux comes in.

  - You need Redux once:
    If you expect these:
      - You need to changes to persist after a refresh
        - like a cookie
        - You brought in authentication
      - You have a very active UI with a lot of clicks
      - You are dealing with x or more documents/models
      - Once you're passing state down to x or more files
      - SIZE
    - We use Redux in all our projects now because we want to be prepared for any of the three.

  - "However, if you’re just learning React, don’t make Redux your first choice." - Dan
    - Come back to Redux if you find a real need for it, or if you want to try something new

  - Shoutout to Daria, Luc, and Greg
    - Resources can be found in my GH repo for this talk
