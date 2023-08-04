export const useDarkMode = () => {

  const changeTheme = () => {
    // const localTime : string = new Date().toLocaleTimeString();
    // const minute : number = new Date().getMinutes();
    const hour : number = new Date().getHours();
    const day : number = new Date().getDay();
    const month : number = new Date().getMonth();

    // between 4am and 20pm apply light theme
    if ( (hour > 20) || (hour < 4) || (month === 9 && day > 29) || (month === 10) ) {
      document.documentElement.classList.add('dark');
      console.log(`Si son las ${hour} entonces es de noche: ${(hour > 20) || (hour < 4) || (month === 9 && day > 29) || (month === 10)}`);
    } else {
      document.documentElement.classList.remove('dark');
      console.log(`Si son las ${hour} entonces es de día: ${!(hour > 20) || !(hour < 4) || (month !== 9 && day > 29) || (month !== 10)}`);
    }
  }
  return {
    changeTheme
  }
}
