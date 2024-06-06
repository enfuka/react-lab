/**
 * 1. Use the `useState` hook to create an empty recipe array.
 * 2. Iterate over the `recipes` state variable to render a list of `RecipeCard` components.
 * 3. Use an `onSubmit` handler to update recipes state. Parse the form fields from a `FormData` object and create a `newRecipe` variable; use the `setRecipes` state setter to merge `newRecipe` into the state array.
 * 4. Leverage built-in form validation to ensure that a recipe name and ingredients are provided by adding the `required` prop to the input and textarea elements.
 */

import { ReactNode, useState } from "react";

type Recipe = {
  name: string;
  ingredients: string;
};


export function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  
  const handleSubmit =  (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.currentTarget
      const formElements = form.elements as typeof form.elements & {
        nameInput: {value: string}
        ingredientsInput: {value: string}
      }

      let newRecipe = {name: formElements.nameInput.value, ingredients: formElements.ingredientsInput.value};

      setRecipes(prevRecipes => [...prevRecipes, newRecipe]);

      form.reset();

      console.log(formElements.nameInput.value);
    }
  
  

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl">Recipes</h1>
      <RecipeBook handleSubmit={handleSubmit}>
        {recipes.map((recipe)=>
          <RecipeCard key={recipe.name} name={recipe.name} ingredients= {recipe.ingredients}/>
        )}
      </RecipeBook>
    </div>
  );
}

type RecipeBookProps = {
  children?: ReactNode;
  handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void
};

function RecipeBook({ children, handleSubmit }: RecipeBookProps) {
  return (
    <div className="flex flex-col gap-8 w-64">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            required
            name="name"
            className="block border border-gray-500 px-1 rounded w-full bg-gray-100"
            id="nameInput"
          />
        </label>
        <label>
          Ingredients
          <textarea
            required
            name="ingredients"
            className="block border border-gray-500 px-1 rounded w-full bg-gray-100"
            id="ingredientsInput"
          />
        </label>
        <button
          type="submit"
          className="border border-blue-700 px-1 mt-4 rounded w-full bg-blue-300"
        >
          Add
        </button>
      </form>
      <hr className="border-gray-500" />
      <ul className="flex flex-col gap-4">{children}</ul>
    </div>
  );
}

type RecipeCardProps = {
  name: string;
  ingredients: string;
};

function RecipeCard({ name, ingredients }: RecipeCardProps) {
  return (
    <li className="border border-double border-gray-500 rounded divide-y divide-gray-500">
      <h1 className="text-2xl text-center p-2">{name}</h1>
      <div className="p-2">{ingredients}</div>
    </li>
  );
}