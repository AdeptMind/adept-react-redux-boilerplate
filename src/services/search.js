import config from '../config/config';

export const exampleGetRequest = (options) => {
  const endpoint = config.ENDPOINT_URL;
  const uri = endpoint + '/get';

  options = {};

  return fetch(uri, {
    method: 'POST',
    body: JSON.stringify(options),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log('Could not fetch ontology data:', err);
    });
};

export default {
  exampleGetRequest,
};
