import { useState, useRef, useEffect } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from '../ai'

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe])

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients(prev => [...prev, newIngredient])
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown)

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

      {ingredients.length > 0 && <IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe}/>}
      {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  )
}