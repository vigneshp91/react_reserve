import React from 'react';
import axios from 'axios';

function Home(props) {

  console.log(props)
  
  // React.useEffect(() => {
  //   getProducts();
  // },[]);

  // async function getProducts() {
   
    
  // }

  Home.getInitialProps = async ()=>{
    //fetch data from server and set to componenet props
    const url = "http://localhost:3000/api/products"
    const response = await axios.get(url)
    if(response.status == 200){
      console.log(response.data)
      return {products: response.data};  
    }
    
  }
  return <>home</>;
}

export default Home;
