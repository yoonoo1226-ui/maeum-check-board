/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="bg-white p-10 rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-4 border-accent-orange mb-8 inline-block">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Heart size={100} className="text-accent-orange fill-accent-orange" />
          </motion.div>
        </div>
        <h1 className="text-6xl md:text-7xl font-cute font-bold text-accent-orange mb-4 drop-shadow-sm">
          마음체크보드
        </h1>
        <p className="text-xl text-gray-500 font-bold">
          지금 나의 마음은 어떤가요?
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255,152,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-12 py-5 bg-accent-orange text-white text-2xl font-bold rounded-full shadow-lg border-b-4 border-orange-700 transition-all"
      >
        감정 체크 시작하기
      </motion.button>
    </div>
  );
}
