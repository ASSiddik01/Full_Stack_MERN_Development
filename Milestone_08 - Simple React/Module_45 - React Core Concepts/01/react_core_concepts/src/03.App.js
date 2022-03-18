import "./App.css";

function App() {
  return (
    <div className="App">
      <Person></Person>
      <h2>About Me</h2>
      <Person></Person>
    </div>
  );
}

// 1: Single Return
// function Person() {
//   return <h1>Shama</h1>
// }
//
// 2: Multiline Return
// function Person() {
//   return (
//     <>
//       <h1>Shama</h1>
//       <p>Chuadanga</p>
//     </>
//   );
// }


function Person() {
  return (
    <div>
      <h1>Shama</h1>
      <p>Chuadanga</p>
    </div>
  );
}

export default App;
