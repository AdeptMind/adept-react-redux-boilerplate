
export const getMe = () => {
  return Promise.resolve({
    id: 123,
    name: 'Adeptmind user',
    picture: 'https://adeptmind.ai/wp-content/uploads/2017/11/GUY-1.png',
    email: 'test@adeptmind.ai',
    createdAt: '2018-07-04'
  });
};

export default {
  getMe,
};
