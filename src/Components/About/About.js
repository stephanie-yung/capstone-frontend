import React from 'react'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
//Steph if you're looking at this, https://reactjsexample.com/cool-react-card-component-with-image/ 
// That link is the library to install to run this
const About = () => {
  const items = [
    {
      id: 1,
      header: 'Stephanie, Front-end',
      description: "stephanie.yung43@myhunter.cuny.edu",
      // description:
      // "Stephanie Yung: stephanie.yung43@myhunter.cuny.edu\n, Worked on: Navbar, Routing, Single Drink Review Page, Location Page Skeleton, Drink Review Form, and styling",
      image: 'https://cdn.discordapp.com/attachments/505539333869273116/902609797587808327/SY_headshot2.jpg'
    },
    {
      id: 2,
      header: 'Jing, Full-stack',
      description: "jing.wen04@myhunter.cuny.edu",
      // description:
      //   'Jing Wen:  jing.wen04@myhunter.cuny.edu, Worked on: set up review data model,set up drink data model',
      image: 'https://cdn.discordapp.com/attachments/874712386089672794/901186360885514310/image0.jpg'
    },
    {
      id: 3,
      header: 'Andy, Full-stack',
      description: "Andy.Mina30@myhunter.cuny.edu",
      // description:
      //   'Andy Mina:  Andy.Mina30@myhunter.cuny.edu, Worked on: Outlining the User, Drink, and Review models. Created the User Model. Created the DBdrivevr. Partially implemented drink and review API',
      image: 'https://cdn.discordapp.com/attachments/874712386089672794/901260722586157056/me.jpeg'
    },
    {
      id: 4,
      header: 'Maninder, Front-end',
      description: "1sony9905@gmail.com",
        // 'Maninder Singh: 1sony9905@gmail.com, Worked on: Sign in/Sign out Page, Register, Homepage, Navigation, This current about page and styling',
      image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/264000910_637820240684692_2192530988038789403_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=JyOYF7-slcUAX-sjLGy&_nc_ht=scontent-lga3-1.xx&oh=292bd4d949533f84fd6d6e0b286e8235&oe=61DBE819'
    }
  ]
  return (
    <CardView 
      items={items}
      activeColor='#000'
      imageHeight='70%'
      imageWidth='70%'
    />
  )
}

export default About