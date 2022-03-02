import React from 'react';

function Home () {
    return (
        <div className="Home">
            <header>
                <h1>Heapy Wallet</h1>
                <div className='headerNav'>
                    <div className='tokenValue'>TS &#36;0.1</div>
                    <button className='connect'> Connect </button>
                </div>
            </header>

            <main className='Main'>
                <button className='stake'>STAKE</button>

                <table>
                    <tr>
                        <th>CSB</th>
                        <th>TVL</th>
                        <th>Market Cap</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>&#36;5,000,000,000</td>
                        <td>&#36;1,000,000,000</td>
                        <td>&#36;1,000,000,000</td>
                        <td>&#36;1,000,000,000</td>
                    </tr>
                </table>
            </main>
        </div>
    );
}

export default Home;