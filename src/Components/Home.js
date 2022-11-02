import React from 'react';
import './App.css';
// import 'App.js'
import profilePic from 'https://drive.google.com/file/d/1-92XkampIqzHx-3yeHaHwUcknwOJKmzF/view?usp=drivesdk';

console.log(profilePic);

function Home() {
    return (
<div
        style="display: flex; justify-content: center; flex-direction: column; align-items: center; padding: 24px 12px; ">
        <div style="margin: 0px 80px; width: 100%; max-width: 85vw; text-align: center;">
            {/* Profile Info  */}
            <div className="pic_div"
                style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin: 12px 0px 24px; width: 100%;">
                <img id= "profile__img" src={profilePic} alt="pic"/>;
                <p style="margin: '6px' , '0px'">@DTechNurse1</p>
                <p>I make Websites and Web Apps.</p>
            </div>

            {/*  Links  */}

            <div className="links_div"
                style="display: flex; flex-direction: column; width: 100%;  justify-content: center; align-items: center;">
                <a id= "btn__zuri" className="linkBtn" href="https://training.zuri.team/">ZuriTeam</a>
                <a id= "books" className="linkBtn" href="http://books.zuri.team">ZuriBooks</a>
                <a id= "book__python" className="linkBtn" href="https://books.zuri.team/">Zuri Python</a>
                <a id= "pitch" className="linkBtn" href="https://background.zuri.team">ZuriBooks</a>
                <a id= "book__design" className="linkBtn" href="https://books.zuri.team/design-rules">ZuriBooks</a>
                {/* <a id= "slack" className="linkBtn" href="@Ibinabo Adiela">Slack</a>  */}
            </div>
        </div>
    </div>

  )
}
export default Home;