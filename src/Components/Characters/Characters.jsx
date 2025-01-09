import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Characters.css';

const Characters = () => {
    const [query, setQuery] = useState("");
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get("https://theofficeapi.dev/api/characters?limit=1000");
                setCharacters(response.data.results || []);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCharacter();
    }, []);

    const filteredCharacters = characters.filter((character) => 
        character.name.toLowerCase().includes(query.toLowerCase()) ||
        (character.actor && character.actor.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="characters-container">
            <input
                type="text"
                placeholder="Search by name, actor or job"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <div className="characters-list">
                {filteredCharacters.map((character) => (
                    <div key={character.id} className="character-card">
                    <p className="character-name">Name: {character.name}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Marital: {character.marital}</p>
                    <p>Job(s): {character.job.join(', ')}</p>
                    <p>Workplace: {character.workplace.join(', ')}</p>
                    <p>First Appearance: {character.firstAppearance}</p>
                    <p>Last Appearance: {character.lastAppearance}</p>
                    <p>Actor: {character.actor}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;