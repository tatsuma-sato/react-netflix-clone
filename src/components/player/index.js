import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
} from "./styles/player.styles";

export const PlayerContext = createContext();

const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    showPlayer &&
    ReactDOM.createPortal(
      <Overlay {...restProps}>
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
          <Close onClick={() => setShowPlayer(false)} />
        </Inner>
      </Overlay>,
      document.body
    )
  );
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => {
        setShowPlayer((showPlayer) => !showPlayer);
      }}
    >
      Play
    </Button>
  );
};

export default Player;
