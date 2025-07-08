import { useLocation, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppRoot } from '@telegram-apps/telegram-ui';
import {ShoppingBag, User, Home, Bell, Settings} from 'lucide-react';
import { MarketPage } from '@/pages/MarketPage/MarketPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95
    }
  };

  const pageTransition = {
    duration: 0.4
  };

  const navigationItems = [
    {
      path: '/',
      icon: Home,
      label: 'Market',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      path: '/profile',
      icon: User,
      label: 'Profile',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
      <AppRoot>
        <div className="flex flex-col h-screen w-full font-sans bg-gray-900 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

          <div className="mx-auto w-full max-w-md flex flex-col h-full relative z-10">
            {/* Enhanced Header */}
            <div className="bg-gray-800/95 backdrop-blur-xl border-b border-gray-700/50 px-6 py-4 sticky top-0 z-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    WIC
                  </h1>
                </div>
                <div className="flex items-center space-x-3">
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                    className="min-h-full"
                >
                  <Routes location={location}>
                    <Route path="/" element={<MarketPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modern Bottom Navigation */}
            <div className="bg-gray-800/95 backdrop-blur-xl border-t border-gray-700/50 px-2 py-2 sticky bottom-0 z-20">
              <div className="flex justify-between items-center relative bg-gray-700/30 rounded-2xl p-2">
                {/* Active tab background */}
                {navigationItems.map((item) => (
                    <div key={item.path} className="flex-1 flex justify-center">
                      {location.pathname === item.path && (
                          <motion.div
                              layoutId="activeNavTab"
                              className="absolute inset-y-2 bg-gray-600/50 rounded-xl"
                              style={{
                                left: `${navigationItems.findIndex(nav => nav.path === item.path) * 25}%`,
                                width: '25%'
                              }}
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30
                              }}
                          />
                      )}
                    </div>
                ))}

                {/* Navigation buttons */}
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                      <button
                          key={item.path}
                          onClick={() => navigate(item.path)}
                          className="flex-1 flex flex-col items-center justify-center py-3 px-2 relative z-10 group"
                      >
                        <motion.div
                            className={`transition-all duration-300 ${
                                isActive
                                    ? 'text-white'
                                    : 'text-gray-400 group-hover:text-gray-300'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="w-5 h-5 mb-1" />
                        </motion.div>
                        <span className={`text-xs font-medium transition-colors duration-300 ${
                            isActive
                                ? 'text-white'
                                : 'text-gray-400 group-hover:text-gray-300'
                        }`}>
                      {item.label}
                    </span>
                      </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </AppRoot>
  );
}