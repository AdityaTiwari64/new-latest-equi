import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  PenTool,
  BookOpen,
  Calendar,
  Target,
  ChevronLeft,
  DollarSign,
  GraduationCap
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/', active: location.pathname === '/' },
    { icon: DollarSign, label: 'Expenses', path: '/expenses', active: location.pathname === '/expenses' },
    { icon: GraduationCap, label: 'Academic', path: '/academic', active: location.pathname === '/academic' },
    { icon: PenTool, label: 'Write', path: '/write', active: location.pathname === '/write' },
    { icon: BookOpen, label: 'Entries', path: '/entries', active: location.pathname === '/entries' },
    { icon: Calendar, label: 'Goals', path: '/goals', active: location.pathname === '/goals', badge: 2 },
  ];

  const bottomNavItems = [
    { icon: Settings, label: 'Settings', path: '/settings', active: location.pathname === '/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help', active: location.pathname === '/help' },
    { icon: LogOut, label: 'Log out', path: '/logout', active: false },
  ];

  const sidebarVariants = {
    open: {
      width: '16rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      width: '4rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/50 z-20 lg:hidden"
          onClick={(e) => e.stopPropagation()}
        ></div>
      )}
      
      <motion.aside 
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        className={`fixed top-0 left-0 h-full bg-white dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 z-30 flex flex-col overflow-hidden transition-all duration-300`}
      >
        <div className="h-[61px] flex items-center px-4 border-b border-surface-200 dark:border-surface-700 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-600 text-white font-bold">E</div>
            <motion.h1 
              className="text-xl font-semibold tracking-tight"
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              Equilibria
            </motion.h1>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  item.active 
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-700/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  <motion.span
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </div>
                {item.badge && isOpen && (
                  <motion.span 
                    className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-2 py-0.5 rounded-full"
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </Link>
            ))}
          </div>
          
          {isOpen && (
            <motion.div 
              className="mt-6"
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="px-3 text-xs font-medium text-surface-500 uppercase tracking-wider">
                Categories
              </h3>
              <div className="mt-2 space-y-1">
                <Link to="/category/personal" className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-700/50">
                  <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs font-bold mr-3">
                    P
                  </div>
                  <span>Personal</span>
                </Link>
                <Link to="/category/work" className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-700/50">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold mr-3">
                    W
                  </div>
                  <span>Work</span>
                </Link>
                <Link to="/category/goals" className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-700/50">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold mr-3">
                    G
                  </div>
                  <span>Goals</span>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="p-3 border-t border-surface-200 dark:border-surface-700">
          <div className="space-y-1">
            {bottomNavItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-700/50"
              >
                <item.icon size={18} className="mr-3" />
                <motion.span
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;