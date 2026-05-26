/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type WeatherType = 1 | 2 | 3 | 4; // 1: 비, 2: 흐림, 3: 구름, 4: 맑음
export type TempType = 1 | 2 | 3 | 4;

export interface EmotionData {
  text: string;
  temp: TempType;
  weather: WeatherType;
  area: 'yellow' | 'red' | 'blue' | 'green';
}

export type ScreenType = 'INTRO' | 'BOARD' | 'RESULT';
