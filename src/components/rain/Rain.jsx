import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './rain.css'; // Un fichier CSS pour styliser les flocons de neige

const Snowflake = () => {
  // Créer un tableau de positions verticales pour chaque flocon de neige
  const [positions, setPositions] = useState(Array.from({ length: 30 }, () => Math.random() * window.innerWidth));

  // Définir l'animation de chute des flocons de neige
  const props = useSpring({
    from: { translateY: -100 },
    to: { translateY: window.innerHeight },
    reset: true,
    config: { duration: 10000 },
    onRest: () => {
      // Réinitialiser la position des flocons de neige une fois qu'ils atteignent le bas de l'écran
      setPositions(positions.map(() => Math.random() * window.innerWidth));
    }
  });

  return (
    <div className="snow-container">
      {positions.map((position, index) => (
        <animated.div
          key={index}
          className="snowflake"
          style={{
            left: position,
            ...props
          }}
        />
      ))}
    </div>
  );
};

export default Snowflake;
