import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Seasons.css';

const Seasons = () => {
    const [seasonData, setSeasonData] = useState([]);
    const [query, setQuery] = useState("1");

    useEffect(() => {
        const fetchSeason = async () => {
            try {
                const response = await axios.get(`https://officeapi.akashrajpurohit.com/season/${query}`);
                setSeasonData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (query) {
            fetchSeason();
        }
    }, [query]);

    return (
        <div className="seasons-container">
            <input
                type="text"
                placeholder="Search by season number"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            {seasonData.length > 0 ? (
                <div className="seasons-list">
                    {seasonData.map((episode) => (
                        <div key={episode.episode} className="season-card">
                            <h3 className="season-title">{episode.title}</h3>
                            <p className="season-details">Season: {episode.season}</p>
                            <p className="season-details">Episode: {episode.episode}</p>
                            <p className="season-details">Air Date: {episode.airDate}</p>
                            <p className="season-details">Written By: {episode.writtenBy}</p>
                            <p className="season-description">{episode.description}</p>
                            <p className="season-rating">IMDb Rating: {episode.imdbRating}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No episodes found for this season.</p>
            )}
        </div>
    );
};

export default Seasons;
