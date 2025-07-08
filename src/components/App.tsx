import { useLocation, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { ShoppingBag, User } from 'lucide-react';
import { MarketPage } from '@/pages/MarketPage/MarketPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
      <AppRoot>
        <div className="flex flex-col h-screen w-full font-sans bg-white dark:bg-[#101010]">
          <div className="mx-auto w-full max-w-md flex flex-col h-full">
            <AnimatePresence mode="wait">
              <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
              >
                <Routes location={location}>
                  <Route path="/" element={<MarketPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="fixed bottom-0 left-0 w-full max-w-md mx-auto flex justify-around bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-700 z-50 py-4">
            <button
                onClick={() => navigate('/')}
                className={`transition-colors ${
                    location.pathname === '/'
                        ? 'text-blue-600'
                        : 'text-gray-400 dark:text-gray-500'
                }`}
            >
              <ShoppingBag className="w-6 h-6" />
            </button>
            <button
                onClick={() => navigate('/profile')}
                className={`transition-colors ${
                    location.pathname === '/profile'
                        ? 'text-blue-600'
                        : 'text-gray-400 dark:text-gray-500'
                }`}
            >
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </AppRoot>
  );
}
