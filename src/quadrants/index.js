import * as codingFrameworks from './coding-frameworks';
import * as monitoringLoggingSecurity from './monitoring-logging-security';
import * as cicdInfrastructureAutomation from './cicd-infrastructure-automation';
import * as platformServices from './platform-services';

/**
 * WARNING: Don't change the ordering manually here. Instead change the
 * quadrant number in the files! The ordering of this in the
 * radar is kinda messy...
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
