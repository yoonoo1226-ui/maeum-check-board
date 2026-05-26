/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import IntroScreen from './components/IntroScreen';
import BoardScreen from './components/BoardScreen';
import ResultScreen from './components/ResultScreen';
import { ScreenType } from './types';

export default function App() {
  // 현재 어떤 화면을 보여줄지 결정하는 상태입니다.
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('INTRO');
  // 사용자가 최종적으로 선택한 감정 단어를 저장합니다.
  const [selectedEmotion, setSelectedEmotion] = useState<string>('');

  // '시작하기' 버튼을 눌렀을 때 실행되는 함수입니다.
  const handleStart = () => {
    setCurrentScreen('BOARD');
  };

  // 보드에서 감정을 클릭했을 때 실행되는 함수입니다.
  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    setCurrentScreen('RESULT');
  };

  // '다시 시작하기' 버튼을 눌렀을 때 상태를 초기화합니다.
  const handleRestart = () => {
    setSelectedEmotion('');
    setCurrentScreen('INTRO');
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="min-h-screen"
        >
          {currentScreen === 'INTRO' && (
            <IntroScreen onStart={handleStart} />
          )}

          {currentScreen === 'BOARD' && (
            <BoardScreen onSelect={handleEmotionSelect} />
          )}

          {currentScreen === 'RESULT' && (
            <ResultScreen 
              emotion={selectedEmotion} 
              onRestart={handleRestart} 
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
