// XXX(Phong): note that we have to use the `REACT_APP_` suffix so we don't
// apply secret keys from the shell env vars: read here:
// https://github.com/facebookincubator/create-react-app/issues/865#issuecomment-252199527
export default {
  PORT: process.env.REACT_APP_PORT || 5555,
  ENDPOINT_URL: process.env.REACT_APP_ENDPOINT_URL || 'https://httpbin.org',
};
