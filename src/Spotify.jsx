import { useCallback, useState } from "react";

const Spotify = () => {
  const playlistId = "0r5PeQPNE6wqBRFMNDO83k";
  const [isInteractive, setIsInteractive] = useState(false);

  const enableControls = useCallback(() => {
    setIsInteractive(true);
  }, []);

  const disableControls = useCallback(() => {
    setIsInteractive(false);
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="spotify-container" id="spotify">
        <h2>Now Playing 🎵</h2>
        <div className="spotify-wrapper">
          <div
            className={`spotify-embed ${isInteractive ? "is-interactive" : ""}`}
            onMouseLeave={disableControls}
          >
            {!isInteractive && (
              <button
                type="button"
                className="spotify-overlay"
                onClick={enableControls}
                aria-label="Enable Spotify controls"
              >
                Click to enable Spotify controls
              </button>
            )}
            <iframe
              className="spotify-iframe"
              title="Spotify Embed: Recommendation Playlist"
              src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;