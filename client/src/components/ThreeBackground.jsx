import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const starCount = 1400;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 420;
      positions[i3 + 1] = (Math.random() - 0.5) * 420;
      positions[i3 + 2] = (Math.random() - 0.5) * 420;

      const tint = Math.random() * 0.35 + 0.65;
      colors[i3] = 0.6 * tint;
      colors[i3 + 1] = 0.8 * tint;
      colors[i3 + 2] = 1.0 * tint;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const dustCount = 600;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i += 1) {
      const i3 = i * 3;
      dustPositions[i3] = (Math.random() - 0.5) * 320;
      dustPositions[i3 + 1] = (Math.random() - 0.5) * 320;
      dustPositions[i3 + 2] = (Math.random() - 0.5) * 320;
    }

    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(dustPositions, 3)
    );

    const dustMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: 0x89c2ff,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });

    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f8cff,
      emissive: 0x0a1b3a,
      roughness: 0.4,
      metalness: 0.1,
    });

    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(4.2, 32, 32),
      planetMaterial
    );
    planet.position.set(18, -6, -12);
    planetGroup.add(planet);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(6.8, 0.25, 16, 80),
      new THREE.MeshStandardMaterial({
        color: 0x7fb7ff,
        emissive: 0x0c1f40,
        roughness: 0.6,
        metalness: 0.2,
      })
    );
    ring.rotation.x = Math.PI * 0.25;
    ring.rotation.y = Math.PI * 0.2;
    ring.position.copy(planet.position);
    planetGroup.add(ring);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0xbcd7ff,
        emissive: 0x13233d,
        roughness: 0.7,
      })
    );
    moon.position.set(26, -3, -6);
    planetGroup.add(moon);

    const warmPlanet = new THREE.Mesh(
      new THREE.SphereGeometry(2.6, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0xf7b267,
        emissive: 0x3b1c07,
        roughness: 0.5,
      })
    );
    warmPlanet.position.set(-22, 10, -20);
    planetGroup.add(warmPlanet);

    const ambientLight = new THREE.AmbientLight(0x8bb9ff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0x7fd0ff, 1.2, 200);
    keyLight.position.set(40, 20, 30);
    scene.add(keyLight);

    let animationId = 0;
    const animate = () => {
      stars.rotation.y += 0.0004;
      stars.rotation.x += 0.0002;
      dust.rotation.y -= 0.0003;
      dust.rotation.z += 0.0002;
      planetGroup.rotation.y += 0.00035;
      planet.rotation.y += 0.002;
      warmPlanet.rotation.y -= 0.0015;
      moon.position.x = planet.position.x + Math.cos(Date.now() * 0.0006) * 6.8;
      moon.position.z = planet.position.z + Math.sin(Date.now() * 0.0006) * 6.8;

      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mount) {
        return;
      }
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationId);
      starGeometry.dispose();
      starMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      planet.geometry.dispose();
      planet.material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      moon.geometry.dispose();
      moon.material.dispose();
      warmPlanet.geometry.dispose();
      warmPlanet.material.dispose();
      renderer.dispose();
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
