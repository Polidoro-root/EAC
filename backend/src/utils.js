module.exports = {
  now(){
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes }`;
  }
}