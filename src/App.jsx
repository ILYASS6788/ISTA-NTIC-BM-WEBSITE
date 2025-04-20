import { Outlet, useLocation } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from "./sotre/slices/EventSlice";

function App() {
  const location= useLocation()
  const {role} = useSelector((state)=>state.authUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    window.scroll(0,0)
  },[location.pathname])
  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchEvents({ urlApi: "getevents", methodHTTP:'GET' }));
    }
    fetchData();
  });
  const [isLogOut,setIsLogOut]=useState(false);

  if(isLogOut){
    return(<Loader />)
  }
  return (
    <>
     <header className="sticky top-0 z-50">
        <Navigation setIsLogOut={setIsLogOut}/>
     </header>
     <main className="pb-2">
      <Outlet />
     </main>
     {role === 'admin' && location.pathname.includes('dashboard') ? null : <Footer />}
    </>
  );
}

export default App;