function Header() {
    return (
        <header>
            <h1>Heapy</h1>
            <div className='headerNav'>
                <div className='tokenValue'>TS &#36;0.1</div>
                <button class="connect" role="button">Connect</button>
            </div>
        </header>
    );
}

export default Header;