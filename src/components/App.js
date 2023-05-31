import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Tweets } from "pages/Tweets/Tweets";


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <SharedLayout /> }>
        <Route index element={ <Home /> }/>
        <Route  path="/tweets" element={ <Tweets /> } />
        <Route path="*" element={ <Home /> } />
      </Route>
    </Routes>
  )
}















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}


//       <div>Hello</div>
//     </div>
//   );
// }

// export default App;
