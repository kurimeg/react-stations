// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/bulldog-boston/n02096585_904.jpg");
  const fetchDogUrl = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => setDogUrl(data.message));
  }
  return (
    <div>
      <header className="header">
        <div>Dogアプリ</div>
      </header>
      <div className="box-container">
        <div className="box">
          <p>犬の画像を表示するサイトです。</p>
        </div>
        <div className="box">
          <img className="box__image" src={dogUrl} />
        </div>
      </div>
      <div className="button-container">       
        <button onClick={fetchDogUrl}>更新</button>
      </div>
      <div className="border"></div>
    </div>
  )
}
