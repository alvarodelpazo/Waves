import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add active State.
    const newSongs = songs.map((state) => {
      if (state.id === song.id) {
        return {
          ...state,
          active: true,
        };
      } else {
        return {
          ...state,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //Check if the song is playing.
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
