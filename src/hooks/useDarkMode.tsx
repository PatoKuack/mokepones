export const useDarkMode = () => {

  const changeTheme = () => {
    // const localTime : string = new Date().toLocaleTimeString();
    // const minute : number = new Date().getMinutes();
    const hour : number = new Date().getHours();
    const day : number = new Date().getDay();
    const month : number = new Date().getMonth();

    // between 4am and 19pm apply light theme
    if ( (hour > 19) || (hour < 4) || (month === 9 && day > 29) || (month === 10) ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  return {
    changeTheme
  }
}
