const currentUrl = function(){
    const url = window.location.href;

    const toUrl = url.slice(22);

    if(toUrl.match(/user/)) {
      return '/user';
    }
    if(toUrl.match(/company/)) {
      return '/company';
    }      
}

export default currentUrl;