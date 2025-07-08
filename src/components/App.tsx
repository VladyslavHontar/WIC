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
        <div className="flex flex-col h-screen">
          {/* Main Content */}
          <div className="flex-1 overflow-auto">
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

          {/* Tab Bar */}
          <div className="flex border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
            <button
                onClick={() => navigate('/')}
                className={`flex-1 flex flex-col items-center py-2 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="text-xs">Market</span>
            </button>
            <button
                onClick={() => navigate('/profile')}
                className={`flex-1 flex flex-col items-center py-2 ${location.pathname === '/profile' ? 'text-blue-600' : 'text-gray-500'}`}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </AppRoot>
  );
}
