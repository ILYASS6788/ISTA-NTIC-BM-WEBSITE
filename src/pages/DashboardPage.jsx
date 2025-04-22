
import { Navigate, Outlet, useLocation} from "react-router-dom";
import SidebarDashboard from "../components/SidebarDashboard";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircleIcon, MessageCircleWarningIcon, X } from "lucide-react";
import { motion } from 'framer-motion';
import { hideNotify } from "../sotre/slices/NotificationToast";
import { useEffect } from "react";
export default function DashboardPage() {
  const {role,user} = useSelector((state)=>state.authUser);
  const Location = useLocation();
  //-----------------------------------------------------------
  const {visible ,text,title,success} = useSelector((state)=>state.NotifyAction)

  const dispatch = useDispatch();
  

  if(role === 'user' || !user){
    return <Navigate to={'/'} />
  }

  return (
    <div className="bg-gray-50 h-fit"
    >
      
      <div className="flex items-stretch">
        {/* Sidebar */}
        <SidebarDashboard user={user}  />

        {/* Main Content */}
        <section className="w-full pt-2 md:p-0">
          {Location.pathname !== '/dashboard' ?
          <Outlet /> :
          <h1>Dashboard</h1>
          }
        </section>
      </div>
      
        {visible && 
          (<SuccessAlert title={title} message={text} hide={()=>{
            dispatch(hideNotify())}}
            success={success}
            />)
        }
        
    </div>
  );
}


 function SuccessAlert({title, message,hide,success}) {
  useEffect(()=>{
    setTimeout(()=>{
      hide()
    },6800)
  })
  
  return (
    <div className="flex flex-col gap-2 w-fit text-[10px] sm:text-xs z-50 absolute bottom-5 right-2">
        <motion.div
          className={`succsess-alert cursor-default border-2 flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-white shadow-2xl
             ${success ? 'shadow-cyan-300' : 'shadow-red-300 border-red-400'} px-[10px]`}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ delay:0.8,x: -200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <div className="flex gap-2">
            <div className={`${success ? 'text-[#2b9875]' : 'text-red-600'} bg-white/5 backdrop-blur-xl p-1 rounded-lg`}>
              { 
                success ? 
                <CheckCircleIcon size={20} />
                 :
                <MessageCircleWarningIcon size={20} />
              }
            </div>
            <div>
              <p className={`${success ? 'text-green-500' : 'text-red-600'}`}>{title}</p>
              <p className="text-gray-500">{message}</p>
            </div>
          </div>
          <button
           onClick={hide}
            className="cursor-pointer text-gray-600 hover:bg-gray-300 p-1 rounded-md transition-colors ease-linear"
          >
           <X size={18} />
          </button>
        </motion.div>
    </div>
  );
}
