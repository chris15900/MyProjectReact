import React from 'react'
import Blogcard from '../components/Blogcard';

export default function Home() {

    const data = [
        {
            title:'Explorations numériques : Naviguer dans le monde numérique',
            image:'https://images.pexels.com/photos/1051062/pexels-photo-1051062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description:'DatA 1',
            createdon:'24 jan 2024',
            component:'0'
        },
        {
            title:'Is ti worth it ',
            image:'https://images.pexels.com/photos/1051062/pexels-photo-1051062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description:'daga 2',
            createdon:'24 jan 2024',
            component:'0'
        },
        {
            title:'Is ti worth it ',
            image:'https://images.pexels.com/photos/1051062/pexels-photo-1051062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description:'lorem ipsum',
            createdon:'24 jan 2024',
            component:'0'
        },
        {
            title:'Is ti worth it ',
            image:'https://images.pexels.com/photos/1051062/pexels-photo-1051062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description:'lorem ipsum',
            createdon:'24 jan 2024',
            component:'0'
        },
        {
            title:'Is ti worth it ',
            image:'https://images.pexels.com/photos/1051062/pexels-photo-1051062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description:'lorem ipsum',
            createdon:'24 jan 2024',
            component:'0'
        },
        {
            title:'Is ti worth it ',
            image:'https://images.pexels.com/photos/1051062/pexels-photo-1051062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description:'lorem ipsum',
            createdon:'24 jan 2024',
            component:'0'
        }
    ]
  return (
   <div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map(x=>{
            return <Blogcard blogdata={x}/>
        })}
        
    </div>
   </div>
  )
}
