export default function Main() {
  const ingredients = ['Tofu','Pho','Hoisin Sauce']

  const ingredientListItems = ingredients.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })

  return (
    <main>
      <form className="add-ingredient-form">
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