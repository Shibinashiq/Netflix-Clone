const netflixLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png';
const navAvatar = 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png';
const banner = 'https://wallpaperaccess.com/full/2703652.png';
const card = 'https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w';

// API URLs
const imageUrl = 'https://image.tmdb.org/t/p/original';
const apiBaseUrl = 'https://api.themoviedb.org/3';
const API_KEY = '71c82c0e35f2ff386bd206102f04012e';

const urls = {
  netflixLogo,
  navAvatar,
  banner,
  card,
  trending: `${apiBaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  action: `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  originals: `${apiBaseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  comedyMovies: `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  actionMovies: `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  romanceMovies: `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// You can use the 'urls' object in your application as needed.
