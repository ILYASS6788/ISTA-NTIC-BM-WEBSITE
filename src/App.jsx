import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <header className="sticky top-0 z-50">
        <Navigation />
     </header>
     <main>
      <Outlet />
     </main>
     <Footer />
    </>
  );
}

export default App;