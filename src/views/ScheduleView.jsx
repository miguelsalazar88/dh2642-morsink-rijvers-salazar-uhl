import "/src/style.css"

function ScheduleView(props) {

    return (
        //a table with the schedule dates
        <table>
            <thead>
                <tr>
                    <th>Meal\Day</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Breakfast</td>
                    {
                        //function that fills in all the morning data somehow (see commented function at the bottom)
                    }
                </tr>

                <tr>
                    <td>Lunch</td>
                    {
                        //idem to top
                    }
                </tr>

                <tr>
                    <td>Dinner</td>
                    {
                        //idem to top
                    }
                </tr>
            </tbody>
        </table>

    );

    // function moodTableRowCB(ingr){
    //  <td>{ if ingr.date = (monday date) {
    //  ingr.breakfast} }</td>
    //  <td>{ingr.tuesday}</td>
    //  <td>{ingr.wednesday}</td>;
    // }

}

export default ScheduleView





