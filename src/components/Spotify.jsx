import { motion as Motion } from "framer-motion";
import "../css/Spotify.css";
import { fadeUp, inViewMotionProps } from "../motion/animations";

const Spotify = () => {
  const playlistId = "0r5PeQPNE6wqBRFMNDO83k";

  return (
    <Motion.div variants={fadeUp} {...inViewMotionProps}>
      <div className="spotify-container" id="spotify">
        <h2> Some Good songs 🎶 </h2>
        <div className="spotify-wrapper">
          <div className="spotify-embed">
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
    </Motion.div>
  );
};

export default Spotify;