export const adopt = {
  name: 'Adopt',
  color: '#40c057',
  descripton:
    'Technologies that we have high confidence in to serve our purpose and help us to succeed. We are familiar with these technologies and use them in production.',
};

export const trial = {
  name: 'Trial',
  color: '#93d2c2',
  descripton:
    'Technologies that we have seen work with suceess in a project or product. We actively evaluate the potential of the technology and share knowledge and experiences.',
};

export const assess = {
  name: 'Assess',
  color: '#228be6',
  descripton:
    'Technologies that have a clear benefit for us and thus might become revelant soon. We might establish these technologies as one of our preferend ways to build production applications.',
};

export const hold = {
  name: 'On Hold',
  color: '#ffa8a8',
  descripton:
    'Technologies that are not recommended to be used for new projects and products. Continued usage in existing applications is usually fine, but it might necessary to migrate to active alternatives.',
};

export const rings = [adopt, trial, assess, hold];

export const ringsIndex = rings.reduce((ring, obj, idx) => {
  obj[ring.name] = idx;
  return obj;
}, {});
