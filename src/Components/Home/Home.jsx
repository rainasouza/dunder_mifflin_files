import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import "./Home.css";

const Home = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get('https://officeapi.akashrajpurohit.com/quote/random');
                setQuote(response.data);
            } catch (error) {
                console.log('Erro ao carregar a quote', error);
            }
        };
        fetchQuote();
    }, []);

    return (
        <div className="home">
            <div className="quote-card">
                <div className="quote-content">
                    <img
                        src={quote.character_avatar_url}
                        alt={quote.character}
                        className="character-avatar"
                    />
                    <div className="quote-container">
                        <p className="quote-text">{quote.quote}</p>
                        <div className="author">- {quote.character}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
