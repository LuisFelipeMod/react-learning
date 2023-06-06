/* 1 - React w/ operadores ternarios/functions/arrow functions/ componentes interativos */

function Header({ title }){
    console.log(title)
    return <h1>{title ? title: 'Default Title'}</h1>;
}

function HomePage(props){
    
    return (
    <div>
        <Header title="React 🐱‍👤" />
        <Header title="Outro titulo 🐱‍🏍" />
        <Header />
    </div>
    );
}

ReactDOM.render(<HomePage />, app);
