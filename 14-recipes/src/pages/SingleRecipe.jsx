import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { FaYoutube } from 'react-icons/fa'

const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

const SingleRecipe = () => {
  const { recipeID } = useParams()
  const [recipe, setRecipe] = useState({})
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [error, setError] = useState('')

  const getRecipe = async () => {
    try {
      const response = await axios(`${url}${recipeID}`)
      const specificRecipe = response.data.meals[0]
      if (specificRecipe) {
        const {
          strArea: area,
          strCategory: category,
          strMeal: name,
          strMealThumb: image,
          strInstructions: instructions,
          strTags: tags,
          strYoutube: youtube,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
        } = specificRecipe

        const ingredients = [
          {
            ingredient: strIngredient1,
            measure: strMeasure1,
          },
          {
            ingredient: strIngredient2,
            measure: strMeasure2,
          },
          {
            ingredient: strIngredient3,
            measure: strMeasure3,
          },
          {
            ingredient: strIngredient4,
            measure: strMeasure4,
          },
          {
            ingredient: strIngredient5,
            measure: strMeasure5,
          },
          {
            ingredient: strIngredient6,
            measure: strMeasure6,
          },
          {
            ingredient: strIngredient7,
            measure: strMeasure7,
          },
        ]

        const newRecipe = {
          name,
          area,
          category,
          image,
          instructions,
          tags,
          youtube,
          ingredients,
        }
        setRecipe(newRecipe)
      } else {
        setRecipe(null)
      }
    } catch (error) {
      console.log(error.response)
      setError(error.response)
    }
  }

  useEffect(() => {
    getRecipe()
  }, [recipeID])

  const {
    name,
    area,
    category,
    image,
    instructions,
    tags,
    youtube,
    ingredients,
  } = recipe

  if (error === undefined) {
    return (
      <section className='section-container  no-recipe'>
        <div className='section-center '>
          <h3>no recipe to display</h3>
          <Link to='/recipes' className='btn'>
            back to recipe page
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className='single-recipe'>
      <div className='section-center single-recipe-center'>
        <Link to='/recipes' className='back-forward'>
          <FaArrowLeft />
          back
        </Link>
        <article className='recipe-header'>
          <div className='recipe-content'>
            <img src={image} alt={name} className='img' />
            <h5 className='name'>{name}</h5>
            <p className='category'>
              <span>{category}</span>
              <span>{area}</span>
            </p>
          </div>
          <div className='instructions'>
            <h5>instructions</h5>
            <p>
              {instructions
                ? showMoreInfo
                  ? instructions
                  : instructions.slice(0, 200)
                : null}
              <button onClick={() => setShowMoreInfo(!showMoreInfo)}>
                {showMoreInfo ? 'show less' : 'show more'}
              </button>
            </p>
            <Link to={youtube} className='prepare' target='_blank'>
              To know the ingredients and how to prepare
              <FaYoutube />
            </Link>
            <div className='tags'>
              {tags &&
                tags.split(',').map((tag, index) => {
                  return <span key={index}>{tag}</span> || null
                })}
            </div>
          </div>
        </article>
        <article className='recipe-ingredients'>
          <h5>ingredients</h5>
          <div className='ingredients-container'>
            {ingredients &&
              ingredients.map((item, index) => {
                const { ingredient, measure } = item
                return (
                  item && (
                    <p key={index}>
                      <span>{ingredient}</span>
                      <span>{measure}</span>
                    </p>
                  )
                )
              })}
          </div>
        </article>
      </div>
    </section>
  )
}

export default SingleRecipe

/*  */
