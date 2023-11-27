
export default {

    helloWorld : "Hello, World!",

    searchParams : {},

    /* ###### API LABEL OPTIONS #### */

    // Diet label (Example: 'diet=low-sodium' in URL request)
    dietLabelOptions : ["", "balanced", "high-fiber", "high-protein", "low-carb", 
                    "low-fat", "low-sodium"],

    // Health label (Example: 'health=tree-nut-free' in URL)
    healthLabelOptions : ["", "alcohol-cocktail", "alcohol-free", "celery-free", "crustacean-free", 
                    "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free", "gluten-free",
                    "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher", "low-far-abs",
                    "low-potassium", "low-sugar", "lupine-free", "mollusk-free", "mustard-free", 
                    "no-oil-added", "paleo", "peanut-free", "pescatarian", "pork-free",
                    "red-meat-free","sesame-free","shellfish-free", "soy-free", "sugar-conscious", 
                    "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"],

    // Meal type label (Example: 'mealType=Breakfast' in URL request)
    mealTypeOptions : ["", "Breakfast", "Lunch", "Dinner"],

    // Dish type label (Example: 'dishType=Biscuits%20and%20cookies')
    dishTypeOptions : ["", "Biscuits and cookies", "Bread", "Cereals", "Condiments and sauces",
    "Desserts", "Drinks", "Main course", "Pancake", "Preps", "Preserve",
    "Salad", "Sandwiches", "Side dish", "Soup", "Starter", "Sweets"],

}