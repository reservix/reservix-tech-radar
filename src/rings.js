export const rings = [
  {
    id: 'adopt',
    name: 'Adopt',
    color: '#40c057',
  },

  {
    id: 'trial',
    name: 'Trial',
    color: '#93d2c2',
  },

  {
    id: 'assess',
    name: 'Assess',
    color: '#228be6',
  },

  {
    id: 'onHold',
    name: 'On Hold',
    color: '#ffa8a8',
  },
];

// Makes it easier to assign stuff when configuring the quadrants
/** @type {{adopt: 0, trial: 1, assess: 2, onHold: 3}} */
export const ringMap = rings.reduce((obj, ring, idx) => {
  obj[ring.id] = idx;
  return obj;
}, {});
