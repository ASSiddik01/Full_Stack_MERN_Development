import "./App.css";
import Chart from "./components/Chart/Chart";
import SpecialChart from "./components/SpecialChart/SpecialChart";
import { useSpring, animated } from 'react-spring'

// function App() {
//   const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
//   return (
//     <div className="App">
//       <animated.div style={props}>I will fade in</animated.div>
//       <Chart></Chart>
//       <SpecialChart></SpecialChart>
//     </div>
//   );
// }

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return <animated.div style={props}>I will fade in</animated.div>
}

export default App;
