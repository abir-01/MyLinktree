import React from 'react'
import './App.css'
import image from './assets/myImage.jpg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import shazam from './assets/shazam.jpg'
import pixabay from "./assets/logo.png"
import newsium from './assets/2644746.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const App = () => {

  const links = [
    {
      img: pixabay,
      title: "Pixabay-Clone",
      link: "https://abir-01.github.io/Pixabay-Clone"
    },
    {
      img: shazam,
      title: "Shazam",
      link: "https://abir-01.github.io/Shazam-JS/"
    },
    {
      img: newsium,
      title: "Newsium",
      link: "https://github.com/abir-01/Newsium"
    },
    {
      img: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/8f45a3c620f7fb0b2e4390098dbf61ef",
      title: "Spinx Digital - Clone",
      link: "https://abir-01.github.io/Spinx/"
    }
  ]

  return (
    <div className='app '>
      <div className="flex flex-col justify-center items-center ">
        <div className="logo mt-16 md:mt-28">
          <img src={image} alt="" className='w-20 h-20 rounded-full' />
        </div>
        <div className="name my-4 md:my-8 font-semibold text-2xl md:text-3xl"> ABIR RAKSHIT</div>
        {
          links.map((link, index) => (
            <a href={link.link} target='blank' className="bg-white text-black h-[6vh] w-[80vw] lg:w-[40vw] my-4 rounded-lg flex items-center hover:scale-110 duration-500" key={index}>
              <div className="logo ms-4 w-[10%]" >
                {link.logo && link.logo}
                {link.img &&
                  <img src={link.img} alt="" className='w-[80%] lg:w-[40%] rounded-full' />
                }
              </div>
              <div className="title text-lg lg:text-xl opacity-80 flex font-semibold justify-center w-[80%] -ms-4">{link.title}</div>
            </a>
          ))
        }

        <div className="flex my-4">
          <a href='https://github.com/abir-01' target="blank"  className="mx-2 ">

            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/abir-rakshit-7935b5225/" target="blank" className="mx-2">

            <LinkedInIcon />
          </a>
        </div>


      </div>
    </div>
  )
}

export default App