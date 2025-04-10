function Header() {
    const headerStyle = {
        backgroundImage: 'url(/Corvette.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '10rem',
        color: 'white'
    };

    return(
        <header style={headerStyle}>
            <h1>Kenneth Brown</h1>
        </header>
    );
}

export default Header;