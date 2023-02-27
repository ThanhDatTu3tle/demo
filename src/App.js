
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import routes from './routes';

function App() {

  return (
      <Router>
        <div>
          <Routes>
            {routes.map((route) => {
              const Page = route.component

              return (
                <Route
                  path={route.path}
                  element={
                    <Page />
                  }
                />
              )
            })}
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
