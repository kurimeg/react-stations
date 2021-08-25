// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/bulldog-boston/n02096585_904.jpg");
  return (
    <div>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <div>
        犬の画像を表示するサイトです。
      </div>
      <img src={dogUrl} />
      <div>
        <button onClick={(e) => {setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");}}>更新</button>
      </div>
    </div>
  )
}
