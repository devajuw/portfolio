const Spotify = () => {
  const playlistId = '0r5PeQPNE6wqBRFMNDO83k';
  
  return (
    <div data-aos="fade-up">
      <div className="spotify-container" id="spotify">
        <h2>Now Playing 🎵</h2>
        <div className="spotify-wrapper">
          <iframe
            title="Spotify Embed: Recommendation Playlist"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="380"
            style={{ 
              borderRadius: '12px',
              border: 'none'
            }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Spotify;