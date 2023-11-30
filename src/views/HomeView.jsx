function HomeView(props) {

    function profileClickACB(evt) {
        window.location.hash = "#/profile"
    }

    function searchClickACB(evt) {
        window.location.hash = "#/search"
    }


return (
    <div>
        <button onClick = {profileClickACB}>My profile</button>
        <button onClick = {searchClickACB}>Search!</button>
    </div>
);

}

export default HomeView;