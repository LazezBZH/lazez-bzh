import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./Technos.css";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3 : 2.5}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#11270B" : "#CE8147"} />
    </mesh>
  );
}

export default function Technos() {
  return (
    <div className="technos">
      <Canvas>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-2.5, 0, 0]} />
        <Box position={[2.5, 0, 0]} />
      </Canvas>
      <div className="techno">
        <div className="tech">HTML/CSS</div>
        <div className="tech">Javascript</div>
        <div className="tech">React</div>
        <div className="tech">Redux</div>
        <div className="tech">VScode</div>
        <div className="tech">GitHub</div>
      </div>
      <Canvas className="technos">
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-2.5, 0, 0]} />
        <Box position={[2.5, 0, 0]} />
      </Canvas>
    </div>
  );
}
