import jwt_decode from 'jwt-decode';

export default (token) => {
  const currentTime = Date.now / 1000;
  if(jwt_decode(token).exp < currentTime) {
    return false;
  }
  return true;
  }