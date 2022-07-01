import { ringMap } from '../rings';

import cicdInfrastructureAutomation from './cicd-infrastructure-automation.yml';
import codingFrameworks from './coding-frameworks.yml';
import platformServices from './platform-services.yml';
import tooling from './tooling.yml';

/**
 * WARNING: Don't change the ordering manually here. Instead change the
 * quadrant number in the files! The ordering is as follows:
 *
 *  0 = Bottom Right
 *  1 = Bottom Left
 *  2 = Top Left
 *  3 = Top Right
 */
export const quadrants = [
  codingFrameworks,
  tooling,
  cicdInfrastructureAutomation,
  platformServices,
].sort((a, b) => a.quadrant - b.quadrant);

/**
 * Use the YML data and convert it to the entries format of the
 * radar. We use YML to have a better authoring experience. Writing
 * the descriptions in JSON/JS is annoying and cumbersome.
 */
const getEntriesFromYML = input =>
  input.entries.map(({ description = '', ring, ...rest }) => ({
    ...rest,
    quadrant: input.quadrant,
    ring: ringMap[ring],
    description: description
      .split(/\r?\n/)
      .filter(Boolean)
      .map(text => `<p>${text}</p>`)
      .join(''),
  }));

export const entries = quadrants.map(getEntriesFromYML).flat();
