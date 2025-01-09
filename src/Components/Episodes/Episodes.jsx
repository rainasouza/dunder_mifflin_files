import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Episodes.css';

const Episodes = () => {
  const [query, setQuery] = useState("");
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get("https://theofficeapi.dev/api/episodes?limit=100");
        const data = response.data.results;
        setEpisodes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEpisodes();
  }, []);

  const filteredEpisodes = episodes.filter((episode) =>
    episode.title.toLowerCase().includes(query.toLowerCase()) ||
    episode.episode.toLowerCase().includes(query.toLowerCase()) ||
    episode.seasonId.toString().includes(query) ||
    episode.seriesEpisodeNumber.toString().includes(query)
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by title, episode or season"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="episodes-list">
        {filteredEpisodes.map((episode) => (
          <div key={episode.id} className="episode-card">
            <p><strong>Title:</strong> {episode.title}</p>
            <p><strong>Episode:</strong> {episode.episode}</p>
            <p><strong>Season:</strong> {episode.seasonId}</p>
            <p><strong>Summary:</strong> {episode.summary}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
