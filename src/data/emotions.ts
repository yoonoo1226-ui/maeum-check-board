/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EmotionData } from '../types';

export const emotions: EmotionData[] = [
  // [Yellow Area] - 1사분면 (우상: X 3~4, Y 3~4)
  { text: '신나다', temp: 4, weather: 4, area: 'yellow' },
  { text: '짜릿하다', temp: 4, weather: 4, area: 'yellow' },
  { text: '기쁘다', temp: 4, weather: 4, area: 'yellow' },
  { text: '활기차다', temp: 4, weather: 4, area: 'yellow' },
  { text: '행복하다', temp: 3, weather: 4, area: 'yellow' },
  { text: '자랑스럽다', temp: 3, weather: 4, area: 'yellow' },
  { text: '재밌다', temp: 3, weather: 4, area: 'yellow' },
  { text: '자신 있다', temp: 3, weather: 4, area: 'yellow' },
  { text: '설레다', temp: 3, weather: 4, area: 'yellow' },
  { text: '놀라다', temp: 4, weather: 3, area: 'yellow' },
  { text: '들뜨다', temp: 4, weather: 3, area: 'yellow' },
  { text: '감동적이다', temp: 3, weather: 3, area: 'yellow' },
  { text: '상쾌하다', temp: 3, weather: 3, area: 'yellow' },

  // [Red Area] - 2사분면 (좌상: X 1~2, Y 3~4)
  { text: '불안하다', temp: 4, weather: 2, area: 'red' },
  { text: '당황하다', temp: 4, weather: 2, area: 'red' },
  { text: '짜증난다', temp: 3, weather: 2, area: 'red' },
  { text: '후회하다', temp: 3, weather: 2, area: 'red' },
  { text: '곤란하다', temp: 3, weather: 2, area: 'red' },
  { text: '긴장하다', temp: 3, weather: 2, area: 'red' },
  { text: '답답하다', temp: 3, weather: 2, area: 'red' },
  { text: '불편하다', temp: 3, weather: 2, area: 'red' },
  { text: '걱정스럽다', temp: 4, weather: 1, area: 'red' },
  { text: '화나다', temp: 4, weather: 1, area: 'red' },
  { text: '초조하다', temp: 4, weather: 1, area: 'red' },
  { text: '밉다', temp: 4, weather: 1, area: 'red' },
  { text: '든든하다', temp: 4, weather: 1, area: 'red' },
  { text: '억울하다', temp: 4, weather: 1, area: 'red' },
  { text: '원망스럽다', temp: 4, weather: 1, area: 'red' },
  { text: '무섭다', temp: 4, weather: 1, area: 'red' },
  { text: '두렵다', temp: 3, weather: 1, area: 'red' },
  { text: '겁나다', temp: 3, weather: 1, area: 'red' },
  { text: '지긋지긋하다', temp: 3, weather: 1, area: 'red' },

  // [Blue Area] - 3사분면 (좌하: X 1~2, Y 1~2)
  { text: '실망하다', temp: 2, weather: 1, area: 'blue' },
  { text: '좌절하다', temp: 2, weather: 1, area: 'blue' },
  { text: '슬프다', temp: 2, weather: 1, area: 'blue' },
  { text: '서운하다', temp: 2, weather: 1, area: 'blue' },
  { text: '속상하다', temp: 2, weather: 1, area: 'blue' },
  { text: '괴롭다', temp: 1, weather: 1, area: 'blue' },
  { text: '절망하다', temp: 1, weather: 1, area: 'blue' },
  { text: '외롭다', temp: 2, weather: 2, area: 'blue' },
  { text: '허전하다', temp: 2, weather: 2, area: 'blue' },
  { text: '부끄럽다', temp: 2, weather: 2, area: 'blue' },
  { text: '어색하다', temp: 2, weather: 2, area: 'blue' },
  { text: '막막하다', temp: 2, weather: 2, area: 'blue' },
  { text: '시무룩하다', temp: 2, weather: 2, area: 'blue' },
  { text: '미안하다', temp: 2, weather: 2, area: 'blue' },
  { text: '귀찮다', temp: 1, weather: 2, area: 'blue' },
  { text: '지치다', temp: 1, weather: 2, area: 'blue' },
  { text: '피곤하다', temp: 1, weather: 2, area: 'blue' },
  { text: '지루하다', temp: 1, weather: 2, area: 'blue' },

  // [Green Area] - 4사분면 (우하: X 3~4, Y 1~2)
  { text: '차분하다', temp: 2, weather: 3, area: 'green' },
  { text: '감사하다', temp: 2, weather: 3, area: 'green' },
  { text: '편안하다', temp: 2, weather: 3, area: 'green' },
  { text: '홀가분하다', temp: 2, weather: 3, area: 'green' },
  { text: '나른하다', temp: 1, weather: 3, area: 'green' },
  { text: '안심하다', temp: 1, weather: 3, area: 'green' },
  { text: '만족스럽다', temp: 2, weather: 4, area: 'green' },
  { text: '든든하다', temp: 2, weather: 4, area: 'green' },
  { text: '흐뭇하다', temp: 2, weather: 4, area: 'green' },
  { text: '평화롭다', temp: 1, weather: 4, area: 'green' },
  { text: '평온하다', temp: 1, weather: 4, area: 'green' },
];
