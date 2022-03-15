import React from 'react';

function Home () {
    return (
        <div className="Home">
            <header>
                <h1>Heapy</h1>
                <div className='headerNav'>
                    <div className='tokenValue'>TS &#36;0.1</div>
                    <div className='button'>Connect  Wallet</div>
                </div>
            </header>

            <main className='main'>
                <button class="button-63" role="button">STAKE</button>

                <div className='table'>
                    <div className='csb'>
                        <span>
                            &#36;5,000,000
                        </span>
                        <span>
                            Circulating Supply 
                        </span>
                    </div>
                    <div className='tvl'>
                        <span>
                            &#36;1,000,000
                        </span>
                        <span>
                            TVL
                        </span>
                    </div>
                    <div className='mc'>
                        <span>
                            &#36;1,000,000
                        </span>
                        <span>
                            Market Cap
                        </span>
                    </div>
                    <div className='total'>
                        <span>
                            &#36;1,000,000
                        </span>
                        <span>
                            Total Burnt
                        </span>
                    </div>
                </div>

                {/* <table>
                    <tr>
                        <th>Circulating Supply Burnt</th>
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
                </table> */}
            </main>
        </div>
    );
}

export default Home;