
import { useEffect, useState } from 'react';
import "./App.css"


function App() {
  const [word,setWord]=useState('')         //ekranda gösterilecek kelime (deve veya cüce)
  const [score,setScore]=useState(0)        //Kullanıcı Skoru
  const [message,setMessage]=useState('')  //doğru yada yanlış meajı

  const words=['Deve','Cüce']  //seçilecek kelimeler

  //her 2 saniyede bir rastgele kelime seçme fonk.

  useEffect(()=>{
    const interval=setInterval(()=>{
      const randomWord=words[Math.floor(Math.random()*words.length)]
      setWord(randomWord)
      setMessage('') //önceki mesajları temizle

    },2000)
    return()=>clearInterval(interval) //Sayfa kapatıldığında zamanlayıcı durdur
  },[])

  //Kullanıcın butona tıklaması işleyen fonk.
  const handleClick=(clickedWord)=>{

    if(clickedWord===word){
      setScore(score+1) //doğruysa skor artar
      setMessage("Doğru!")
    }else {
      setScore(score-1) //yanlışsa skor azalır
      setMessage("Yanlış")
    }
  }

  return (
    <div className="container bg-success text-center mt-5 ">
      <h1>Deve Cüce Oyunu</h1>
      <h2>{word}</h2> {/* Ekranda gösterilecek kelime */}
      
      <div className='mt-3'>
        <button className='btn btn-primary mx-2'onClick={()=>handleClick('Deve')} >Deve</button>
        <button className='btn btn-danger mx-2' onClick={()=>handleClick('Cüce')}>Cüce</button>
      </div>
      <h3 className='mt-3'>Skor:{score}</h3> {/*Kullanıcı skoru */}
      <p>{message}</p> {/*Doğru veya yanlış mesajı*/}
    </div>
  );
}

export default App;
