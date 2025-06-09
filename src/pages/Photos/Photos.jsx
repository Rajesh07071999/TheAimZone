import React, { useEffect, useState } from "react";
import { FaDownload, FaSearch } from "react-icons/fa";
import "./Photos.css";

const tags = ["tech", "nature", "code", "space", "city", "abstract", "tools"];
const accessKey = "1LASSCZvWh8MQZptnju1rK7NopwLqsaW5uk_GbUo2hA"; // Replace with real key

function Photos() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("tech");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchImages = async (term) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${term}&per_page=12&client_id=${accessKey}`
      );
      const data = await res.json();
      setImages(data.results);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages(searchTerm);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchTerm(searchInput.trim());
      setSearchInput("");
    }
  };

  return (
    <section className="unsplash-gallery">
      <h2>Explore Stunning Photos</h2>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search any topic..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      <div className="tag-buttons">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag-btn ${tag === searchTerm ? "active" : ""}`}
            onClick={() => setSearchTerm(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading-text">Loading gallery...</p>
      ) : (
        <div className="image-grid">
          {images.map((img) => (
            <div className="image-box" key={img.id}>
              <img src={img.urls.small} alt={img.alt_description} />
              <a
                href={`${img.links.download}?force=true`}
                target="_blank"
                rel="noopener noreferrer"
                className="download-icon"
              >
                <FaDownload />
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Photos;
