import { rings } from './rings';
import { quadrants, entries } from './quadrants';

radar_visualization({
  svg_id: 'radar',
  title: 'Reservix Tech Radar — 2022 Q3',
  /**
   * Don't change these numbers, we make the
   * radar responsive via CSS
   */
  width: 1500,
  height: 1000,
  colors: {
    background: '#fff',
    grid: '#adb5bd',
    inactive: '#dee2e6',
  },
  quadrants,
  rings,
  print_layout: true,
  // zoomed_quadrant: 0,
  entries,
});
