import React, { useState } from "react";
import "./SafeSearch.css";

const blockedWords = ["sex", "porn", "xxx", "nude", "adult"];

const isClean = (query) => {
  return !blockedWords.some(word => query.toLowerCase().includes(word));
};

const SafeSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchDuckDuckGo = async () => {
    if (!isClean(query)) {
      setError("🚫 Keep it clean, explorer!");
      setResults([]);
      return;
    }

    setError("");
    const res = await fetch(`https://api.duckduckgo.com/?q=${query}&format=json&no_redirect=1`);
    const data = await res.json();
    setResults(data.RelatedTopics || []);
  };

  return (
    <div className="safe-search-container">
      <h2>🛡️ Safe Web Search</h2>
      <input
        type="text"
        placeholder="Search something clean..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchDuckDuckGo}>Search</button>
      {error && <p className="error">{error}</p>}
      <div className="results">
        {results.map((item, i) => (
          <div className="result-card" key={i}>
            <a href={item.FirstURL} target="_blank" rel="noreferrer">
              <h4>{item.Text}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeSearch;
