import React from 'react'
import './App.css'
import image from './assets/myImage.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import shazam from './assets/shazam.jpg'
import pixabay from "./assets/logo.png"
import newsium from './assets/2644746.png'

const App = () => {

  const links = [
    {
      img: github,
      title: "Github",
      link:"https://github.com/abir-01"
    },
    {
      img: linkedin,
      title: "LinkedIn",
      link:"https://www.linkedin.com/in/abir-rakshit-7935b5225/"
    },
    {
      img:pixabay,
      title: "Pixabay-Clone",
      link:""
    },
    {
      img:shazam,
      title: "Shazam",
      link:""
    },
    {
      img: newsium,
      title: "Newsium",
      link:""
    }
  ]

  return (
    <div className='app'>
      <div className="flex flex-col justify-center items-center ">
        <div className="logo mt-28">
          <img src={image} alt="" className='w-28 h-28 rounded-full' />
        </div>
        <div className="name my-8 font-semibold text-3xl"> ABIR RAKSHIT</div>
        {
          links.map((link, index) => (
            <a href={link.link} target='blank'  className="bg-white text-black h-[6vh] w-[40vw] my-4 rounded-xl flex items-center hover:scale-110 duration-500" key={index}>
              <div className="logo ms-4 w-[10%]" >
                {link.logo && link.logo}
                {link.img && 
                  <img src={link.img} alt="" style={{ maxWidth: "40%" }} />
                }
              </div>
              <div className="title text-xl opacity-80 flex font-semibold justify-center w-[80%] -ms-4">{ link.title}</div>
            </a>
          ))
        }

        
      </div>
    </div>
  )
}

export default App