import * as codingFrameworks from './coding-frameworks';
import * as monitoringLoggingSecurity from './monitoring-logging-security';
import * as cicdInfrastructureAutomation from './cicd-infrastructure-automation';
import * as platformServices from './platform-services';

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
  monitoringLoggingSecurity,
  cicdInfrastructureAutomation,
  platformServices,
].sort((a, b) => a.quadrant - b.quadrant);

export const entries = [
  ...codingFrameworks.entries,
  ...monitoringLoggingSecurity.entries,
  ...cicdInfrastructureAutomation.entries,
  ...platformServices.entries,
];
