export default function IngredientsList({ ingredients, getRecipe }) {
  const ingredientListItems = ingredients.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className='ingredients-list' aria-live="polite">{ingredientListItems}</ul>
      { ingredients.length > 3 &&
        <div className='get-recipe-container'>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      }
    </section>
  )
}