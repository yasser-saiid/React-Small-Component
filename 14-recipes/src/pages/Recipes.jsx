import React from 'react'
import { Loading, SearchFrom } from '../components'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../utilities/context'

const Recipes = () => {
  const { isLoading, recipes } = useGlobalContext()

  return (
    <section className='recipes'>
      <SearchFrom />
      <div className='section-center recipes-center'>
        {isLoading ? (
          <Loading />
        ) : recipes.length < 1 ? (
          <h4 className='search-term'>
            no there recipes matched your search term
          </h4>
        ) : (
          recipes.map((recipe) => {
            const { idMeal, strMeal, strMealThumb } = recipe
            return (
              <Link
                to={`/recipes/${idMeal}`}
                className='recipe-item'
                key={idMeal}
              >
                <div className='img-container'>
                  <span>see more</span>
                  <img src={strMealThumb} alt={strMeal} className='img' />
                </div>
                <h4>{strMeal}</h4>
              </Link>
            )
          })
        )}
      </div>
    </section>
  )
}

export default Recipes
