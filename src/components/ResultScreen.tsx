/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { RefreshCcw, Star } from 'lucide-react';

interface ResultScreenProps {
  emotion: string;
  onRestart: () => void;
}

export default function ResultScreen({ emotion, onRestart }: ResultScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[8px] border-[#FFD180] relative overflow-hidden">
          <div className="result-emoji text-[6rem] leading-none mb-4">✨</div>
          <h2 className="text-4xl font-bold mb-4">
            지금 나는<br />
            <span className="text-6xl text-accent-orange font-extrabold font-cute block mt-4">
              '{emotion}'
            </span>
          </h2>
          <div className="mb-10" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="bg-accent-orange text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg border-b-4 border-orange-700 transition-all hover:bg-orange-500 active:transform active:translate-y-1 active:border-b-0"
          >
            다시 체크하기
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
