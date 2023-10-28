# Counter using React and Tailwind CSS

## Theory
Counter is a basic project built to understand the usage of _Hooks in React_. In this project a react hook called **useState** is used. 

**UseState** hook is nothing but a function. It returns an array with two elements: the current state value and a function to update that state value. The first element of the array is the current state value, and the second element is a function that you can call to update the state.

_Syntax:_ const [state, setState] = useState(initialValue); 

## About AI and other information

> **Important**
> I didn't focus on beautifying the UI here, but rather on understanding the logic and implementing it.

I used [phind](https://www.phind.com/) as my _pair programmer_ to provide me with a boilerplate of tailwind to beautify this project. Using phind as my _pair programmer_ helped me to focus more on logic side than the UI side. Plus it also helped me to save a lot of time.

_Other AI tools used: [GitHub Copilot](https://github.com/features/copilot)_

## Thought process
_It is simple_
- I want a minimalistic UI to display an incrementation and decrementation of the counter.
- I want two buttons. One to increment and other to decrement.
- When talking about changing the value from initial state to some other state, **useState** hook will be used (this I knew). 
- When user clicks on any one of the two buttons, some action has to be performed (in this case it is incrementing and decrementing the value of the counter).
- That is it

## Code explanation
- First thing is first. I asked my _pair programmer_ [phind](https://www.phind.com/) to give me a boilerplate of counter app along with some tailwindCSS styling and this is what it gave me 👇
  ```javascript
  import React from 'react';
  function Counter() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Counter</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Increment
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
          Decrement
          </button>
        </div>
        <p className="text-2xl mt-4">Count: 0</p>
      </div>
    );
  }
  export default Counter;
  ```
- I know that some function needs to execute when clicking on any one of the two buttons (that is to increment and decrement the counter). Therefore I write onClick property on both the buttons. Something like this👇
  ```javascript
  // Increment button
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded"
    onClick={incrementCounter}
  >
    Increment
  </button>
  ```
  
  ```javascript
  // Decrement button
  <button
    className="px-4 py-2 bg-red-500 text-white rounded"
    onClick={decrementCounter}
  >
    Decrement
  </button>
  ```
- Now it is time to write the functionality
  - Initially this is how I wrote the function definition
  ```javascript
  // Increment function
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Decrement function
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  ```
  - This is perfect, but I do not want the counter to increment and decrement to some infinite value. So I need to make some changes.
  - But before changing the code I wanted to check whatever the code I wrote so far works perfectly or not.
  - This is where I started using **useState** hook. First I needed to initialize a hook.
    ```javascript
    const [counter, setCounter] = useState(0); // Initial value of counter is 0
    ```
  - To use the hook we need to import the hook from react.
    ```javascript
    import {useState} from 'react';
    ```
  - To display the value of the counter we use _variable interpolation_
    ```javascript
    <p className="text-2xl mt-4">Count: {counter}</p> 
    // display the counter. counter written inside the curly braces is called variable interpolation
    ```
  - I run the project using ```npm run dev``` and it works perfectly.
  - As I mentioned above, I want the counter to increment upto a certain value (10) and decrement only till 0. I make changes as required using `if condition` inside each function.
    ```javascript
    // Increment function
    const incrementCounter = () => {
      setCounter(counter + 1);
      if (counter === 10) {
        setCounter(0);
      }
    };

    // Decrement function
    const decrementCounter = () => {
      setCounter(counter - 1);
      if (counter === 0) {
        setCounter(0);
      }
    };
    ```
- The counter will increment till the value 10. Once it reaches the value 10, it returns back to value 0 and the counter value is decremented only till 0.
- Now my counter project is ready 🎉

> Click [here](https://github.com/edsondsouza/counter-hooks-practice/blob/main/src/App.jsx) to see the final code. 

# Setup the repo in your local environment
- Clone the repo
  ``` 
  git clone https://github.com/edsondsouza/counter-hooks-practice.git
  ```
- Install necessary dependencies
  ```
  npm i
  ```
- Run the project
  ```
  npm run dev
  ```

> If you liked the project please do drop a ⭐

# Follow me on socials
[BioDrop](https://www.biodrop.io/edsondsouza)