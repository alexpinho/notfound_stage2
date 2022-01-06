import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CardProject = ({ imageUrl, date, title, area, width, team }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const WaveShaderMaterial = shaderMaterial(
    // Uniform
    {
      uTime: 0,
      uColor: new THREE.Color(0.0, 0.0, 0.0),
      uTexture: new THREE.Texture(),
    },
    // Vertex Shader
    glsl`
      precision mediump float;
      varying vec2 vUv;
      varying float vWave;
      uniform float uTime;
      #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
      void main() {
        vUv = uv;
        vec3 pos = position;
        float noiseFreq = 2.0;
        float noiseAmp = 0.4;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
      }
    `,
    // Fragment Shader
    glsl`
      precision mediump float;
      uniform vec3 uColor;
      uniform float uTime;
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying float vWave;
      void main() {
        float wave = vWave * 0.2;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture, 1.0); 
      }
    `
  );

  extend({ WaveShaderMaterial });

  const Wave = () => {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

    const [image] = useLoader(THREE.TextureLoader, ["img/image-1.webp"]);

    return (
      <mesh>
        <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
        <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
      </mesh>
    );
  };

  const Scene = () => {
    return (
      <Canvas camera={{ fov: 8, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
    );
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, ...transition },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        opacity: 0,
      });
    }
    console.log("use effect hook, inView = ", inView);
  });

  return (
    <motion.div className="card-project">
      <motion.div className="card-project-item" variants={container}>
        <motion.div
          ref={ref}
          className="card-project-item-image-img"
          animate={animation}
        >
          <Scene />
          {/* <img src={imageUrl} className="card-project-item-image-img" alt="" /> */}
        </motion.div>
        <motion.div
          ref={ref}
          className="card-project-item-date text-detail"
          animate={animation}
        >
          {date}
        </motion.div>
        <motion.div
          ref={ref}
          className="card-project-item-title text-title"
          animate={animation}
        >
          {title}
        </motion.div>
        <motion.div
          ref={ref}
          className="card-project-item-area text-detail"
          animate={animation}
        >
          {area}
        </motion.div>
        <motion.div
          ref={ref}
          className="card-project-item-team text-normal"
          animate={animation}
        >
          <span className="card-project-item-team-fix">{width}</span>
          <br />
          {team}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardProject;
