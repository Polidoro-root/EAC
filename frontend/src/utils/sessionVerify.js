import currentUrl from './currentUrl';

const sessionVerify = () => {  
  const home = 'http://localhost:3000';
  let id;

  if(currentUrl() === '/user') id = localStorage.getItem('userId');
  else if(currentUrl() === '/user') id = localStorage.getItem('companyId');
  
  if(id === null) window.location.replace(home);
}

export default sessionVerify;