import React, { useState } from 'react';
import 'animate.css';

const modeIcon = {
  darkMood : <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill='#87ceeb'>
               <path d="M12 22.85q-2.275 0-4.25-.85t-3.438-2.312Q2.85 18.225 2 16.25q-.85-1.975-.85-4.25T2 7.75q.85-1.975 2.312-3.438Q5.775 2.85 7.75 2q1.975-.85 4.25-.85t4.25.85q1.975.85 3.438 2.312Q21.15 5.775 22 7.75q.85 1.975.85 4.25T22 16.25q-.85 1.975-2.312 3.438Q18.225 21.15 16.25 22q-1.975.85-4.25.85Zm0-5.15q.675 0 1.288-.138.612-.137 1.187-.412-1.45-.675-2.338-2.05-.887-1.375-.887-3.1t.887-3.1q.888-1.375 2.338-2.05-.575-.275-1.187-.412Q12.675 6.3 12 6.3q-2.4 0-4.05 1.65T6.3 12q0 2.4 1.65 4.05T12 17.7Z"/>
             </svg>,

  lightMode: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill='#FFCC33'>
                <path d="M12 5.375q-.65 0-1.112-.463-.463-.462-.463-1.112v-2q0-.65.463-1.113Q11.35.225 12 .225q.65 0 1.113.462.462.463.462 1.113v2q0 .65-.462 1.112-.463.463-1.113.463Zm4.675 1.95q-.45-.45-.45-1.1 0-.65.45-1.1l1.4-1.425q.475-.475 1.113-.475.637 0 1.112.475.475.45.463 1.1-.013.65-.463 1.1l-1.425 1.425q-.45.45-1.1.45-.65 0-1.1-.45Zm3.525 6.25q-.65 0-1.113-.463-.462-.462-.462-1.112 0-.65.462-1.113.463-.462 1.113-.462h2q.65 0 1.112.462.463.463.463 1.113 0 .65-.463 1.112-.462.463-1.112.463Zm-8.2 10.2q-.65 0-1.112-.463-.463-.462-.463-1.112v-2q0-.65.463-1.113.462-.462 1.112-.462.65 0 1.113.462.462.463.462 1.113v2q0 .65-.462 1.112-.463.463-1.113.463ZM5.125 7.325 3.7 5.925q-.475-.45-.475-1.1 0-.65.475-1.125.475-.45 1.112-.45.638 0 1.088.45l1.425 1.425Q7.8 5.6 7.8 6.25t-.475 1.1q-.475.45-1.112.437-.638-.012-1.088-.462ZM18.05 20.3l-1.4-1.425q-.45-.475-.438-1.125.013-.65.463-1.1.45-.45 1.088-.45.637 0 1.112.45l1.425 1.4q.475.45.463 1.1-.013.65-.463 1.15-.475.5-1.125.5t-1.125-.5ZM1.8 13.575q-.65 0-1.112-.463Q.225 12.65.225 12q0-.65.463-1.113.462-.462 1.112-.462h2q.65 0 1.112.462.463.463.463 1.113 0 .65-.463 1.112-.462.463-1.112.463ZM3.7 20.3q-.475-.475-.475-1.112 0-.638.475-1.113l1.425-1.425q.45-.45 1.1-.45.65 0 1.125.45t.475 1.113q0 .662-.475 1.137l-1.4 1.4q-.475.475-1.125.475T3.7 20.3Zm8.3-2.5q-2.425 0-4.112-1.687Q6.2 14.425 6.2 12q0-2.425 1.688-4.113Q9.575 6.2 12 6.2t4.113 1.687Q17.8 9.575 17.8 12q0 2.425-1.687 4.113Q14.425 17.8 12 17.8Z"/>
             </svg>
}

const mode = {
  light: {
    bgColor: 'white',
    textColor: 'black',
  },
  dark: {
    bgColor: 'black',
    textColor: 'white',
  }
}

function ThemeMode() {
  const [theme, setTheme] = useState('light');

  const setMode = () => {
    if(theme === 'light' ){
      setTheme('dark')
      document.getElementById('firstName').style.color = 'black';
      document.getElementById('lastName').style.background = 'black';
      document.body.style.backgroundColor = mode['dark'].bgColor;
      document.body.style.color = mode['dark'].textColor;
    }else{
      setTheme('light')
      document.getElementById('firstName').style.color = 'white';
      document.getElementById('lastName').style.background = 'white';
      document.body.style.backgroundColor = mode['light'].bgColor;
      document.body.style.color = mode['light'].textColor;
    }
  }
  const toggleTheme = () => {
    if(theme === 'light'){
      return modeIcon.darkMood
    }else{
      return  modeIcon.lightMode
    }
  };

  return (
   <button onClick={setMode}>
    {toggleTheme()}
   </button>
  );
}
export default ThemeMode;