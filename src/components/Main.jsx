import { useState } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients(prev => [...prev, newIngredient])
  }

  function getRecipe() {
    setRecipeShown(prev => !prev)
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

      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
      {recipeShown && <ClaudeRecipe />}
    </main>
  )
}