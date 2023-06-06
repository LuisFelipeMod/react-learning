function Header({ title }){
    return <h1>{title ? title: 'Default Title'}</h1>;
}

function HomePage(){
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        console.log("Atualiza os likes");
        setLikes(likes + 1)
    }

    return(
        <div>
            <Header title="Butao state" />

            <button onClick={handleClick}>Butao({likes})</button>
        </div>
    )

}

ReactDOM.render(<HomePage />, app);

