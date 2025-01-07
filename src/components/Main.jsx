import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientListItems = ingredients.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })

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
        {recipeShown && <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
              <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Pho</strong>. Here is the recipe:</p>
              <h3>Pho</h3>
              <strong>Ingredients:</strong>
              <ul>
                <li>24 dried shiitake or flower mushrooms</li>
                <li>4 medium onions</li>
                <li>1 large daikon peeled and cut as coins, 1″ thick</li>
                <li>3 inches of ginger washed well, halved and pounded with a pestle or heavy object to release the juices</li>
                <li>1 large or 2 medium carrots peeled and cut into 2-3 inch sized chunks</li>
                <li>1 head of cabbage quartered</li>
                <li>1 apple or pear cored and halved (I used gala, but any that keeps its shape well after cooking is good)</li>
                <li>16 cups of water 4 L</li>
                <li>1 pint king oyster mushrooms sliced into 2 inch slivers</li>
                <li>2 tbsp olive oil</li>
                <li>5-6 pieces of star anise</li>
                <li>1 tbsp coriander seed</li>
                <li>1 tsp whole fennel seeds</li>
                <li>5-6 pods of black cardamom</li>
                <li>2 sticks of cassia bark you can use cinnamon sticks if you can’t find cassia bark</li>
                <li>1 tsp whole cloves</li>
              </ul>
              <strong>Instructions:</strong>
              <ol>
                <li>Cut off the tops and bottoms of onions and peel the onions. Peel and cut daikon.</li>
                <li>In a large pan over medium heat, dry sear the onions, peeled ginger, quartered cabbage, and daikon to get a caramelized browned edge. If you have a grill or BBQ, it would taste better to do this on there instead of the dry sear on a pan. They&apos;ll burn/char and that&apos;s okay, that&apos;s how you get a good depth of flavour. This will take 10-15 minutes. Alternatively you can broil everything in the oven, flipping until both sides gets some char. This will also take about 15 minutes.</li>
                <li>Meanwhile in another non-stick pan, cook the slivered king oyster mushrooms with 1 tsp of mushroom broth powder until browned and caramelized.</li>
                <li>To a large stock pot with at least 4 L of water, add the caramelized king oyster mushrooms (and dried shiitake mushrooms), charred daikon, onion, cabbage, carrot, apple and ginger and water and bring to a boil. Lower to a simmer and cover. Let simmer for at least an hour. Ideally up to 5-6 hours for more depth. After about 45 min-1 hour, remove the onion and apple since they will completely dissolve if you cook it longer.</li>
                <li>Toast the spices</li>
                <li>Meanwhile, in a dry skillet, toast the spices (star anise, coriander seed, fennel, cardamom, cassia bark and cloves) for about 2-3 minutes until fragrant. Remove from heat.</li>
                <li>About 15 minutes before serving, combine the toasted spices into a mesh bag, tea strainer/bag, or a sieve. Lower into the pot and simmer for 10 minutes, careful not to lose the spices into the broth. Don&apos;t leave the spices too long or it will become bitter.</li>
                <li>Remove the spices.</li>
                <li>Prepare to serve</li>
                <li>Add the slices of tofu/fried tofu and Vietnamese sausage if using to heat them through. Add a tsp of vegetable oil to the broth if you&apos;re not adding fried tofu. The small about of oil adds a richness to the broth.</li>
                <li>Meanwhile, cook the pho noodles until al dente (so when you add the steamy broth, they&apos;re perfectly chewy and delicious!), drain and segment into servings. It&apos;s easier to do this when they&apos;re freshly cooked, otherwise they&apos;ll drain into one big clump and be hard to divide.</li>
                <li>Remove everything but the mushrooms from the pot. Start seasoning the broth with mushroom broth powder (or salt), vegan fish sauce, yellow rock sugar, MSG, and vegan beef bouillon cubes. Start out a little of each ingredient at a time until you have the full-bodied broth you like.</li>
                <li>Pour broth over pho noodles, garnishing the tofu, sliced mushrooms (from the broth), vegan Vietnamese sausage, culantro leaves, Thai basil, bean sprouts, cilantro, green onion and a squeeze of lime. Add hoisin sauce and sriracha to taste!</li>
              </ol>
          </article>
      </section>}
    </main>
  )
}