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
      description:
      "Stephanie Yung: stephanie.yung43@myhunter.cuny.edu\n, Worked on: Navbar, Routing, Single Drink Review Page, Location Page Skeleton, and styling",
      image: 'https://cdn.discordapp.com/attachments/505539333869273116/901215064965668884/SY_headshot2.jpg'
    },
    {
      id: 2,
      header: 'Jing, Back-end',
      description:
        'Jing Wen:  jing.wen04@myhunter.cuny.edu, Worked on: set up review data model,set up drink data model',
      image: 'https://cdn.discordapp.com/attachments/874712386089672794/901186360885514310/image0.jpg'
    },
    {
      id: 3,
      header: 'Andy, Back-end',
      description:
        'Andy Mina:  Andy.Mina30@myhunter.cuny.edu, Worked on: Outlining the User, Drink, and Review models. Created the User Model. Created the DBdrivevr. Partially implemented drink and review API',
      image: 'https://cdn.discordapp.com/attachments/874712386089672794/901260722586157056/me.jpeg'
    },
    {
      id: 4,
      header: 'Maninder, Front-end',
      description:
        'Maninder Singh: 1sony9905@gmail.com, Worked on: Sign in/Sign out Page, Register, Homepage, Navigation, This current about page and styling',
      image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/127213489_1409675942573873_7571362463589927231_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=Ar7jEXiBsuQAX_00S_0&_nc_ht=scontent-lga3-1.xx&oh=7d742d23f134f9316157507cfece27a5&oe=619A56C2'
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