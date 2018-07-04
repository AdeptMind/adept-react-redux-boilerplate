import PropTypes from 'prop-types';

export const navigationItemShape = PropTypes.shape({
  label: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  role: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.shape({
    aliasLink: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string,
  })),
});

export const navigationShape = PropTypes.arrayOf(navigationItemShape);
