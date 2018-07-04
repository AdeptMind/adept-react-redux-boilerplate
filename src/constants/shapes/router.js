import PropTypes from 'prop-types';

export const historyShape = PropTypes.shape({
  listen: PropTypes.func,
  locations: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  push: PropTypes.func,
  replace: PropTypes.func,
});

export const matchShape = PropTypes.shape({
  params: PropTypes.object,
});
