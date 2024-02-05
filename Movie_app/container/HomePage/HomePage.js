 
 import React from 'react'
 import Navbar from '../../components/Navbar/Navbar'
 import Banner from '../../components/banner/Banner'
 import Row from '../../components/row/Row'
 function HomePage() {
   return (
     <div>
        <Navbar/>
        <Banner/>
        <Row title="BOX OFFICE HITS" isLargeRow />
        <Row title="New Collection" />
        <Row title="BOX OFFICE HITS"  />
     </div>
   )
 }
 
 export default HomePage