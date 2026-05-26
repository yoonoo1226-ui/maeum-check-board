/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { Thermometer, Sun, Cloud, CloudRain, CloudSun } from 'lucide-react';
import { emotions } from '../data/emotions';
import { TempType, WeatherType, EmotionData } from '../types';

interface BoardScreenProps {
  onSelect: (emotion: string) => void;
}

export default function BoardScreen({ onSelect }: BoardScreenProps) {
  const [temp, setTemp] = useState<TempType>(4);
  const [weather, setWeather] = useState<WeatherType>(4);

  // 현재 온도와 날씨에 맞는 감정들을 필터링합니다.
  const filteredEmotions = useMemo(() => {
    return emotions.filter((e) => e.temp === temp && e.weather === weather);
  }, [temp, weather]);

  const weatherIcons = [
    { id: 1, icon: <CloudRain size={28} />, label: '비' },
    { id: 2, icon: <Cloud size={28} />, label: '흐림' },
    { id: 3, icon: <CloudSun size={28} />, label: '구름' },
    { id: 4, icon: <Sun size={28} />, label: '맑음' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-5xl flex flex-col">
        <header className="flex justify-between items-center mb-8 px-2">
          <div className="title-area">
            <h1 className="text-5xl font-cute font-bold text-accent-orange drop-shadow-sm mb-1">마음체크보드</h1>
            <p className="text-lg text-gray-500 font-bold">지금 나의 마음은 어떤가요?</p>
          </div>
        </header>

        <main className="grid grid-cols-[80px_1fr] grid-rows-[1fr_100px] gap-6 flex-grow min-h-[600px]">
          {/* 세로 슬라이더: 마음 온도 */}
          <div className="bg-white border-4 border-[#FFD180] rounded-[40px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] py-10 flex flex-col items-center relative overflow-hidden">
            <div className="mb-4">
              <span className="font-cute font-bold text-xl text-accent-orange [writing-mode:vertical-rl] whitespace-nowrap">마음 온도</span>
            </div>
            <div className="relative flex flex-col justify-between h-full py-4 font-bold text-slate-400 w-full items-center">
              {[4, 3, 2, 1].map((step) => (
                <button
                  key={step}
                  onClick={() => setTemp(step as TempType)}
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all z-10 ${
                    temp === step ? 'text-white' : 'hover:bg-orange-50'
                  }`}
                >
                  <span className="relative z-20">{step}</span>
                  {temp === step && (
                    <motion.div
                      layoutId="tempIndicator"
                      className="absolute inset-0 bg-accent-orange border-4 border-white rounded-full shadow-lg z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 메인 보드 그리드 */}
          <div className="bg-white p-4 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-4 border-slate-50 flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full relative">
              {/* 2사분면(좌상): 빨강 */}
              <div className={`rounded-3xl border-2 border-dashed border-red-400 transition-all duration-500 overflow-hidden ${temp >= 3 && weather <= 2 ? 'bg-area-red ring-4 ring-red-200' : 'bg-area-red/20'}`}>
                {temp >= 3 && weather <= 2 && <QuadrantEmotions emotions={filteredEmotions} onSelect={onSelect} />}
              </div>
              {/* 1사분면(우상): 노랑 */}
              <div className={`rounded-3xl border-2 border-dashed border-yellow-500 transition-all duration-500 overflow-hidden ${temp >= 3 && weather >= 3 ? 'bg-area-yellow ring-4 ring-yellow-200' : 'bg-area-yellow/20'}`}>
                {temp >= 3 && weather >= 3 && <QuadrantEmotions emotions={filteredEmotions} onSelect={onSelect} />}
              </div>
              {/* 3사분면(좌하): 파랑 */}
              <div className={`rounded-3xl border-2 border-dashed border-blue-500 transition-all duration-500 overflow-hidden ${temp <= 2 && weather <= 2 ? 'bg-area-blue ring-4 ring-blue-200' : 'bg-area-blue/20'}`}>
                {temp <= 2 && weather <= 2 && <QuadrantEmotions emotions={filteredEmotions} onSelect={onSelect} />}
              </div>
              {/* 4사분면(우하): 초록 */}
              <div className={`rounded-3xl border-2 border-dashed border-green-500 transition-all duration-500 overflow-hidden ${temp <= 2 && weather >= 3 ? 'bg-area-green ring-4 ring-green-200' : 'bg-area-green/20'}`}>
                {temp <= 2 && weather >= 3 && <QuadrantEmotions emotions={filteredEmotions} onSelect={onSelect} />}
              </div>
            </div>
          </div>

          {/* 가로 슬라이더: 마음 날씨 */}
          <div className="grid-column-2 bg-white border-4 border-[#90CAF9] rounded-[40px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] px-12 flex items-center relative overflow-hidden col-start-2">
            <div className="flex items-center w-full gap-8">
              <span className="font-cute font-bold text-2xl text-accent-blue whitespace-nowrap">마음 날씨</span>
              <div className="flex-grow flex justify-between relative h-full py-6 items-center font-bold text-slate-400">
                {weatherIcons.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWeather(item.id as WeatherType)}
                    className={`relative flex flex-col items-center justify-center transition-all px-6 py-2 z-10 ${
                      weather === item.id ? 'text-white' : 'hover:text-accent-blue'
                    }`}
                  >
                    <div className="relative z-20 flex flex-col items-center">
                      {item.icon}
                      <span className="text-xs font-bold mt-0.5">{item.label}</span>
                    </div>
                    {weatherIcons.find(w => w.id === weather)?.id === item.id && (
                      <motion.div
                        layoutId="weatherIndicator"
                        className="absolute inset-0 bg-accent-blue border-4 border-white rounded-full shadow-lg z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function QuadrantEmotions({ emotions, onSelect }: { emotions: EmotionData[], onSelect: (emotion: string) => void }) {
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center content-center gap-4 p-6">
      <AnimatePresence mode="popLayout">
        {emotions.map((item, idx) => (
          <motion.button
            key={item.text}
            initial={{ scale: 0, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.15, y: -5, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20, delay: idx * 0.05 }}
            onClick={() => onSelect(item.text)}
            className="bg-white px-5 py-3 rounded-full font-extrabold text-xl shadow-[0_4px_0px_rgba(0,0,0,0.1)] border-2 border-slate-50 text-slate-700 hover:border-accent-orange hover:text-accent-orange transition-all"
          >
            {item.text}
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}
