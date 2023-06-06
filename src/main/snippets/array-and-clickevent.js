
/* Map de um array, evento de click */

function Header({ title }){
    console.log(title)
    return <h1>{title ? title: 'Default Title'}</h1>;
}

function handleClick() {
    console.log("evento de click");
}

function HomePage(){

    const names = ['Luis Felipe', "Giovanna"];
    
    return(
        <div>
            <Header title="Nomes" />

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Butao</button>
        </div>
    )

}

ReactDOM.render(<HomePage />, app);
