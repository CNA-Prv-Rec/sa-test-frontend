import './App.css';

import StatusFetcher from './components/StatusFetcher';

function App() {
  return (
    <div className="App">
        <h1 className="company">Social Ability</h1>

        <h3 className="heading">Machine Status</h3>

        <div className="centerDiv">
            <table className="statusTable">
              <thead>
              <tr><th>Serial No.</th><th>Status</th><th>&nbsp;</th></tr>
              </thead>
              <tbody>
              <StatusFetcher />
              </tbody>
            </table>

        </div>
   
      
    </div>
  );
}

export default App;
