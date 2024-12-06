import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TVList from "./Components/TVList";
function App() {
  return (
    <section className="App">
      <Header />
      <TVList />
    </section>
  );
}

export default App;

// state to be as low as possible but as high as necessary

// If the state lives in App, every time we change the state, it’s going to re-render everything within there.
// Do we want to re-render the Header every time we change the list?

// remember to return in each component when you're rearranging them
// remember to move the initial tvList array into the TVList component


//When you refresh the page, the state is reset to its initial value, and that's why your showList reverts back to the original values. Can talk about how we're going to show API calls next week so that the changes persist. Local storage could potentially be used with this sprint but isn't needed.


//WHY USE CONTROLLED COMPONENTS?
//Predictability: The input's value is always determined by the component's state. You always know what the input contains.
//Validation: You can easily add validation or formatting rules since you control every keystroke.
//Consistency: Controlled components ensure that form values always reflect the React state, making your app more consistent and easier to debug.
