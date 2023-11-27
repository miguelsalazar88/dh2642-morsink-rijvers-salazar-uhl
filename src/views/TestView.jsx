function TestView(props){
    return(
        <div>
            <div>
                <input/>
            </div>

            <div>
                <label htmlFor="selectDiet">Diet:</label>
                <select>
                    {props.dietLabelOptions.map(labelRenderCB)}
                </select>
            </div>

            <div>
                <label htmlFor="selectHealth">Health:</label>
                <select>
                    {props.healthLabelOptions.map(labelRenderCB)}
                </select>
            </div>

            <div>
                <label htmlFor="selectMealType">Meal Type:</label>
                <select>
                    {props.mealTypeOptions.map(labelRenderCB)}
                </select>
            </div>

            <div>
                <label htmlFor="selectDishType">Dish Type:</label>
                <select>
                    {props.dishTypeOptions.map(labelRenderCB)}
                </select>
            </div>

            <div>
                <button>Search!</button>
            </div>

        </div>

    );
}

function labelRenderCB(label){
    return <option key={label}>{label}</option>
}

export default TestView;