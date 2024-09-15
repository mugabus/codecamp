import React, { useState, useEffect } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom"; // Make sure to import ReactDOM

function App() {
  const [display, setDisplay] = useState(''); // For displaying the sound name

  const sounds = [
    { name: 'Heater 1', key: 'Q', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { name: 'Heater 2', key: 'W', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { name: 'Heater 3', key: 'E', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { name: 'Heater 4', key: 'A', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { name: 'Clap', key: 'S', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { name: 'Open-HH', key: 'D', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { name: "Kick-n'-Hat", key: 'Z', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { name: 'Kick', key: 'X', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { name: 'Closed-HH', key: 'C', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  ];

  const handleSoundClick = (sound) => {
    const audio = document.getElementById(sound.key);
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    setDisplay(sound.name); // Update the display with the sound name
  };

  const handleKeyPress = (event) => {
    const sound = sounds.find((s) => s.key === event.key.toUpperCase());
    if (sound) {
      handleSoundClick(sound);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine"> {/* User Story #1 */}
      <div id="display">{display}</div> {/* User Story #2 */}
      <div className="pad-container">
        {sounds.map((sound) => (
          <div
            key={sound.name}
            className="drum-pad"
            id={sound.name}
            onClick={() => handleSoundClick(sound)}
          >
            {sound.key}
            <audio className="clip" id={sound.key} src={sound.url}></audio> {/* User Story #4 */}
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('App'));
