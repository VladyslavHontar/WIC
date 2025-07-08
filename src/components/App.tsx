import { useLocation, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { ShoppingBag, User, Home } from 'lucide-react';
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
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      path: '/profile',
      icon: User,
      label: 'Profile',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
      <AppRoot>
        <div className="flex flex-col h-screen w-full font-sans bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent dark:from-blue-900/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 dark:from-blue-800/20 dark:to-cyan-800/20 rounded-full blur-3xl transform -translate-x-48 translate-y-48 pointer-events-none" />

          <div className="mx-auto w-full max-w-md flex flex-col h-full relative z-10">
            {/* Header with glassmorphism effect */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-6 py-4 sticky top-0 z-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    TeleShop
                  </h1>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">Online</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                    className="h-full"
                >
                  <Routes location={location}>
                    <Route path="/" element={<MarketPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enhanced Bottom Navigation */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-3 sticky bottom-0 z-20">
              <div className="flex justify-between items-center relative">
                {/* Active indicator background */}
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  {navigationItems.map((item) => (
                      <div key={item.path} className="flex-1 flex justify-center">
                        {location.pathname === item.path && (
                            <motion.div
                                layoutId="activeTab"
                                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-10 absolute`}
                                initial={false}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30
                                }}
                            />
                        )}
                      </div>
                  ))}
                </div>

                {/* Navigation buttons */}
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                      <button
                          key={item.path}
                          onClick={() => navigate(item.path)}
                          className="flex-1 flex flex-col items-center justify-center py-2 relative z-10 group"
                      >
                        <motion.div
                            className={`p-2 rounded-xl transition-all duration-300 ${
                                isActive
                                    ? `bg-gradient-to-br ${item.gradient} text-white shadow-lg`
                                    : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <span className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                            isActive
                                ? 'text-gray-800 dark:text-gray-200'
                                : 'text-gray-400 dark:text-gray-500'
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