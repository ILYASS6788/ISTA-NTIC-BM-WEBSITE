import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogIn, Calendar, Book, Clock, Settings, Menu } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const isAdmin = true; 

  const navItems = [
    { path: '/', label: 'Home', icon: Calendar },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/lessons', label: 'Lessons', icon: Book },
    { path: '/schedule', label: 'Schedule', icon: Clock },
    ...(isAdmin ? [{ path: '/dashboard', label: 'Admin Dashboard', icon: Settings }] : []),
  ];
  const loginNav = { path: '/login', label: 'Login', icon: LogIn };

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <NavLink to="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <img src="OFPPT.png" className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className='text-green-500'>I</span>
            NB
            <span className='text-blue-600'>M</span>
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <NavLink
              key={loginNav.path}
              to={loginNav.path}
              className={({ isActive }) =>
                isActive ? 'm-0 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-[#233340] text-[#6abdfc]'
                  : 'm-0 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 text-white'
              }
            >
              <loginNav.icon className="h-4 w-4" />
              <span>{loginNav.label}</span>
            </NavLink>
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 ms-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((link) => (
              <li key={link.path}>
               <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'm-0 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white'
                  : 'm-0 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 text-white'
              }
            >
              <link.icon className="h-4 w-4" />
              <span>{link.label}</span>
            </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
// <nav className="bg-blue-700 text-white">
//   <div className="max-w-full px-4 sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16">
//       <div className="flex items-center pr-56">
//         <NavLink to="/" className="flex items-center space-x-2">
//           <img src="/OFPPT.png" alt="OFPPT" className="h-8 w-auto" />
//           <span className="font-bold text-xl">ISTA NTIC BM</span>
//         </NavLink>
//       </div>

//       {/* Desktop Navigation */}
//       <div className="hidden flex-grow min-[920px]:block">
//         <div className='flex items-center justify-between space-x-4'>
//         <div className="flex items-center space-x-4 gap-1">
//           {navItems.map(({ path, label, icon: Icon }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className={({ isActive }) =>
//                 isActive
//                   ? 'm-0 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white'
//                   : 'm-0 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 text-white'
//               }
//             >
//               <Icon className="h-4 w-4" />
//               <span>{label}</span>
//             </NavLink>
//           ))}
//         </div>
//         <div>
//         <NavLink
//               key={loginNav.path}
//               to={loginNav.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? 'm-0 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white'
//                   : 'm-0 flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 text-white'
//               }
//             >
//               <loginNav.icon className="h-4 w-4" />
//               <span>{loginNav.label}</span>
//             </NavLink>
//         </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Toggle Button */}
//       <div className="min-[920px]:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:bg-blue-600 focus:outline-none"
//         >
//           <Menu className="h-6 w-6" />
//         </button>
//       </div>
//     </div>
//   </div>

//   {/* Mobile Navigation Menu */}
//   {isOpen && (
//     <div className="min-[920px]:hidden">
//       <div>
//       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//         {navItems.map(({ path, label, icon: Icon }) => (
//           <NavLink
//             key={path}
//             to={path}
//             className={({ isActive}) =>
//               isActive
//                 ? 'ms-auto flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white'
//                 : 'ms-auto flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 text-white'
//             }
//             onClick={() => setIsOpen(false)}
//           >
//             <Icon className="h-5 w-5" />
//             <span>{label}</span>
//           </NavLink>
//         ))}
//       </div>
//       <div>
//       <div>
//         <NavLink
//               key={loginNav.path}
//               to={loginNav.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? 'm-0 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white'
//                   : 'm-0 flex items-center justify-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 text-white'
//               }
//             >
//               <loginNav.icon className="h-4 w-4" />
//               <span>{loginNav.label}</span>
//             </NavLink>
//         </div>
//       </div>
//       </div>
//     </div>
//   )}
// </nav>
