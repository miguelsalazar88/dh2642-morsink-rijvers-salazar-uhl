import "/src/style.css"

function MoodsView(props) {
    return (
        
        //buttons with mood, happy-unhappy. Once one is selected, you can't slect the others. Selecting anyone deselects the others

        //slider with energy levels, range 1-10
        
        //button for save: will save the values of the things above (so we first store them in some temporary thing?)

        //buttons with pains, you can select more of them
        <div>
            <label>Mood thingy:</label> <br /> <br />

            <label>How are you feeling right now?</label> <br />
            <input type="range" id="temp" name="temp" list="markers" min="1" max="5" step="1" />

            <datalist id="markers">
            <option value="1" label = "very bad"></option>
            <option value="2" label = "bad"></option>
            <option value="3" label = "neutral"></option>
            <option value="4" label = "good"></option>
            <option value="5" label = "very good"></option>
            </datalist> <br /> <br />



            <label>How energetic are you feeling right now?</label><br />
            <input type="range" id="temp" name="temp" list="markers" min="1" max="5" step="1" />

            <datalist id="markers">
            <option value="1" label="not at all energetic"></option>
            <option value="2" label="not very energetic"></option>
            <option value="3" label = "neutral"></option>
            <option value="4" label="somewhat energetic"></option>
            <option value="5" label="very energetic"></option>
            </datalist>

            <br />
            <br />
            <label>Are you feeling any of the following symptoms?</label><br />
            <button>Headache</button>
            <button>Stomach pains</button>
            <button>Chest pains</button>

        </div>
    );
}

export default MoodsView

//Mood (happy-unhappy)
//energy levels (high-low energy)
//pains (stomach, chest, headache)