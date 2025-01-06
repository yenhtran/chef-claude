import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([])

  const ingredientListItems = ingredients.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })

  function submit(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <main>
      <form action={submit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredientListItems}
      </ul>
    </main>
  )
}