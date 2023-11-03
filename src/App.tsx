import './App.css';
import { Application } from './components/Application/Application';
import { MuiMode } from './components/mui/MuiMode'
import { AppProviders } from './providers/AppProviders'

function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProviders>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Application />
//       </header>
//     </div>
//   );
// }



export default App;
