import React, { useRef}from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { fetchSearchCocktails } from '../Redux/features/cocktailSlice';

const SearchBox = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch()

  const handleChange = () =>{
    const searchText = searchTerm.current.value
    dispatch(fetchSearchCocktails({ searchText }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
   <>
      <div className="d-flex flex-colum align-items-center justify-content-center mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="email"
              ref={searchTerm}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder='Search here '
              style={{ width: "550px"}}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchBox