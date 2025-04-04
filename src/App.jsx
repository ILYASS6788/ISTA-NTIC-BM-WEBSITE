import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';

function App() {

  return (
    <>
     <header className="sticky top-0 z-50">
        <Navigation />
     </header>
     <main>
      <Outlet />
     </main>
    </>
  );
}

export default App;