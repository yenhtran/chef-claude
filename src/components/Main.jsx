import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState(['Tofu','Pho','Hoisin Sauce'])

  const ingredientListItems = ingredients.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredient');
    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredientListItems}
      </ul>
    </main>
  )
}