import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([])

  const ingredientListItems = ingredients.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      { ingredientListItems.length > 0 &&
        <section>
        <h2>Ingredients on hand:</h2>
        <ul className='ingredients-list'>{ingredientListItems}</ul>
        <div className='get-recipe-container'>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button>Get a recipe</button>
        </div>
        </section>
      }
    </main>
  )
}