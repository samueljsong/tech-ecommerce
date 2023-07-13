import './Navbar.css'

export function Navbar(){

    return (
        <div className='nav-container'>
            <h1>TechStore</h1>
            <div className='nav-elements'>
                <a href="/">Mens</a>
                <a href="/store">Womens</a>
                <a href="/about">About</a>
            </div>
        </div>
    )
}