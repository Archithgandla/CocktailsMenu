import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');

  function searchCocktail(){
    setSearchTerm(searchValue.current.value);
  }

  React.useEffect(function(){
    searchValue.current.focus();
  })

  function handleSubmit(e){
    e.preventDefault(); 
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourite cocktail</label>
          <input
            type = 'text'
            id = 'name'
            
            //This could be used but to get focus feature we are using ref
            //onChange={function(e){
              //setSearchTerm(e.target.value)}}

              ref = {searchValue}
              onChange = {searchCocktail}
             
            />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
