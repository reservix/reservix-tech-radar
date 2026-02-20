import { rings } from './rings';
import { quadrants, entries } from './quadrants';

radar_visualization({
  svg_id: 'radar',
  title: 'Reservix Tech Radar — 2026 Q1',
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

const radar = document.getElementById('radar');
const dialog = document.getElementById('dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogContent = document.getElementById('dialog-content');
const dialogBadge = document.getElementById('dialog-badge');

/**
 * We have to find the entry based on the label text, which is
 * prefixed with "<number>.".
 */
const getEntryName = el => /\s(.*)/.exec(el.textContent)[1];
const getEntryInfo = name => entries.find(item => item.label === name);

/**
 * Bit hacky to the radar lib is not really extensible
 * without forking it...
 */
const isBlipLegend = el =>
  radar.contains(el) &&
  el.tagName === 'text' &&
  el.parentElement?.tagName === 'a';

document.addEventListener('click', e => {
  e.preventDefault();

  /** @type {Element} */
  const el = e.target;

  // Open Modal with info about the blip
  if (isBlipLegend(el)) {
    const entry = getEntryInfo(getEntryName(el));

    dialogTitle.innerHTML = entry.label;
    dialogContent.innerHTML = entry.description || 'TDB';
    dialogBadge.innerHTML = rings[entry.ring].name;
    dialogBadge.style = `background: ${rings[entry.ring].color}`;

    dialog.showModal();
    return;
  }

  // Close when backdrop is clicked
  if (el.tagName.toLocaleLowerCase() === 'dialog') {
    dialog.close();
  }
});
