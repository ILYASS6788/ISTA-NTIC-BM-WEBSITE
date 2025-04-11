import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, Calendar, Book, Clock, UserRound, Menu } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = true;

  const navItems = [
    { path: '/', label: 'Home', icon: Calendar },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/courses', label: 'courses', icon: Book },
    { path: '/schedule', label: 'Schedule', icon: Clock },
    ...(isAdmin ? [{ path: '/dashboard', label: 'Admin Dashboard', icon: Settings },] : []),
  ];

  const loginNav = { path: '/login', label: 'Login', icon: UserRound };

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <img src="OFPPT.png" className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className='text-green-500'>I</span>
            NB
            <span className='text-blue-600'>M</span>
          </span>
        </NavLink>

        {/* Right Side (Login + Menu Toggle) */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse w-58">
          <NavLink to={loginNav.path} className="animated-button prompt-medium">
            <span className="text">{loginNav.label}</span>
            <span className="circle"></span>
            <loginNav.icon className="arr-2" />
          </NavLink>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ms-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`absolute top-14 left-0 w-full z-10 lg:static lg:block lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4`}>
          <ul className="flex flex-col gap-1.5 p-4 md:p-2 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((link) => (
              <li key={link.path}>
                <NavLink
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
