import React from 'react';
import Header from './Components/Header';

function Home () {
    return (
        <div className="Home">
            <Header />
            <main className='main'>
                <button class="button-63" role="button">STAKE</button>

                <div className='table'>
                    <div className='csb'>
                        <span>
                            &#36;5,000,000,000
                        </span>
                        <span>
                            Circulating Supply Burnt
                        </span>
                    </div>
                    <div className='tvl'>
                        <span>
                            &#36;5,000,000,000
                        </span>
                        <span>
                            TVL
                        </span>
                    </div>
                    <div className='mc'>
                        <span>
                            &#36;5,000,000,000
                        </span>
                        <span>
                            Market Cap
                        </span>
                    </div>
                    <div className='total'>
                        <span>
                            &#36;5,000,000,000
                        </span>
                        <span>
                            Total
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;