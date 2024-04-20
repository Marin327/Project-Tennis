import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { GiTennisRacket } from 'react-icons/gi';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = (e) => {
    e.stopPropagation();
    setShowVideo(!showVideo);
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="tennis-world">The Tennis Dream</h1>
      <motion.div
        className="video-container"
        style={{ position: "relative", top: "-2cm", left: "-3cm" }}
        whileHover={{ scale: 1.1, color: '#00FF00' }} 
        whileTap={{ scale: 0.95 }}
        onClick={handleVideoClick} 
      >
        <FaPlay size={40} />
      </motion.div>
      {showVideo && (
        <motion.div
          className="video-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowVideo(false)} 
        >
          <iframe
            title="Tennis Ad"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gsqwcodT43s"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}
      <motion.div
        className="tennis-racket-left"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', stiffness: 100 }}
      >
        <GiTennisRacket size={80} />
      </motion.div>
      <motion.div
        className="tennis-racket-right"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', stiffness: 100 }}
      >
        <GiTennisRacket size={80} />
      </motion.div>
    </motion.div>
  );
};

export default Home;