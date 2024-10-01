import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { search } from '../redux/slices/productSlice';


function Header() {

   const [key,setKey]=useState("")
   const dispatch=useDispatch()

   const searchWithKey=()=>{
    dispatch(search(key))
   }

    const { wishlist }=useSelector((state)=>state.wishReducer)
    const { cart}=useSelector((state)=>state.cartReducer)

  return (
   <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-bag-shopping fa-xl" style={{color: "#7b9d93",}} />
           {' '}
            ReduxCart
          </Navbar.Brand>
          <div className='d-flex'>
              <div className='d-flex'>
                <input type="text" placeholder='Search' className="form-control me-4" onChange={(e)=>setKey(e.target.value)} />
                <button className="btn btn-success" onClick={searchWithKey}>search</button>
              </div>
              <Link to={'/wish'} className='btn btn-outline-dark me-4 ms-4'>
                  <i className="fa-solid fa-heart" style={{color: "#ff4d5e",}} />
                  {' '}
                  Wishlist
                  <span className='badge bg-secondary ms-1'>{wishlist?.length}</span>
              </Link>
              <Link to={'/cart'} className='btn btn-outline-dark'>
                  <i className="fa-solid fa-cart-shopping" style={{color: "#63E6BE",}} />
                  {' '}
                  Cart
                  <span className='badge bg-secondary ms-1'>{cart?.length}</span>
              </Link>
          </div>
        </Container>
      </Navbar>
   </>
  )
}

export default Header