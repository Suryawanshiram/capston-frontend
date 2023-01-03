// import React, { useEffect, useState } from 'react'
// // import Caraousal from '../components/Caraousal'
// import Card from '../components/Card'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

// function Home() {
//   const [search, setSearch] = useState('');
//   const [foodCat, setFoodCat] = useState([]);  //here we creating hooks which used to fetching data of cards from backed which is in array form hence assinged array to initial_state
//   const [foodItem, setFooditem] = useState([]);


//   const loadData = async () => {

//     await fetch("/api/foodData", {      //here we accessing that api/endpoint or connecting to that backend used to fetched backed data for cards
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body:JSON.stringify({    //now we don't need body:JSON.stringify because here not present name,email... filds

//       // })

//     }).then(res => res.json())
//       .then(data => {
//         console.log(data)
//         if (data.error) {
//           alert("something went wrong");
//         }
//         else {
//           //console.log(data[0],data[1])
//           setFooditem(data[0])      //data[0]=containing collection "sample" which has food-items
//           setFoodCat(data[1]) //updating initialState by using currentState with both collection has "category" 
//         }
//       })
//   }
//   useEffect(() => {
//     loadData()
//   }, [])


//   return (
//     <div style={{"backgroundColor":"#"}} >
//       <div><Navbar /></div>
//       <div>
//         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

//           <div class="carousel-inner" id='carousel'>
//             <div class="carousel-caption" style={{ zIndex: "10" }}>
//               <div class="d-flex justify-content-center">
//                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                
//               </div>
//             </div>

//             <div class="carousel-item active">
//               <img src="https://source.unsplash.com/random/900×700?food" class="d-block w-100" style={{ filter: "brightness(30%)" }} alt="burger" />
//             </div>
//             <div class="carousel-item">
//               <img src="https://source.unsplash.com/random/900×700?pizza" class="d-block w-100" style={{ filter: "brightness(40%)" }} alt="pizza" />
//             </div>
//             <div class="carousel-item">
//               <img src="https://source.unsplash.com/random/900×700?tea" class="d-block w-100" style={{ filter: "brightness(50%)" }} alt="tea" />
//             </div>
//           </div>
//           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className='container'>
//         {
//           foodCat !== []   //here for ternayOperator ?: if foodCat is empty i.e. initialState 
//             ? foodCat.map((data) => {
//               return (<div className='row mb-3'>
//                 <div key={data._id} className="fs-3 m-3">
//                   {data.CategoryName}
//                 </div>
//                 {/* <hr style={{ 'color': 'yellow' }} /> */}
//                 {
//                   foodItem !== []
//                     ?
//                     foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
//                       .map(filterItems => {
//                         return (
//                           <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
//                             <Card foodItem= {filterItems}
//                               options={filterItems.options[0]}
                              
//                             ></Card>
//                           </div>
//                         )
//                       })
//                     : <div>No Such Data Found</div>

//                 }
//               </div>

//               )
//             })
//             : ""    
//         }

//       </div>



//       <div>  <Footer /></div>
//     </div>
//   )
// }

//export default Home







import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')
  const loadFoodItems = async () => {
    let response = await fetch("api/foodData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
     //console.log(response[0],response[1]);
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

          <div className="carousel-inner " id='carousel'>
            <div class=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItems !== [] ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} imgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <Footer />
    </div>

  )
}
 
