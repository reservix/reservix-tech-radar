/**
 * We'll use the "id" to make it easier to assign
 * items to a certain ring.
 */
export const rings = [
  {
    id: 'adopt',
    name: 'Adopt',
    color: '#74b816',
  },

  {
    id: 'trial',
    name: 'Trial',
    color: '#228be6',
  },

  {
    id: 'assess',
    name: 'Assess',
    color: '#fab005',
  },

  {
    id: 'onHold',
    name: 'On Hold',
    color: '#fa5252',
  },
];

/** @type {{adopt: 0, trial: 1, assess: 2, onHold: 3}} */
export const ringMap = rings.reduce((obj, ring, idx) => {
  obj[ring.id] = idx;
  return obj;
}, {});
