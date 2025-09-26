import { useLayoutEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useTransform, useScroll } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const color = "#FFA000";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[2.5, 3]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

// uncomment for additional animations
// const Star = ({ p }) => {
//   const ref = useRef();

//   useLayoutEffect(() => {
//     const distance = mix(5, 5, 0);
//     const yAngle = mix(
//       degreesToRadians(90),
//       degreesToRadians(90),
//       Math.random()
//     );
//     const xAngle = degreesToRadians(360) * p;
//     ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
//   });

//   // return (
//   //   <mesh ref={ref}>
//   //     <boxGeometry args={[1, 0.225, 1]} />
//   //     <meshBasicMaterial wireframe color={color} />
//   //   </mesh>
//   // );
// };

function Scene({ numStars = 50 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1.5],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1.5], [10, 3]);

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      scrollYProgress.get() * 3
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(1));

  // uncomment for additional animations
  // const stars = [];
  // for (let i = 0; i < numStars; i++) {
  //   stars.push(<Star key={i} p={progress(0, numStars, i)} />);
  // }

  return (
    <>
      <Icosahedron />
      {/* additional */}
      {/* {stars} */}
    </>
  );
}

// Background Component
const ThreeBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default function Animation() {
  return (
    <>
      <div>
        <ThreeBackground />
      </div>
    </>
  );
}
