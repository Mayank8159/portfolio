import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import * as THREE from "three";

export const CosmicLoader = ({ duration = 2200 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const mountRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const mount = mountRef.current;
    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x9fd4ff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xffd18a, 1.1, 40);
    keyLight.position.set(10, 6, 8);
    scene.add(keyLight);

    const group = new THREE.Group();
    scene.add(group);

    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x4cc7ff,
      emissive: 0x0b1b33,
      roughness: 0.35,
      metalness: 0.15,
    });

    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(2.1, 32, 32),
      planetMaterial
    );
    group.add(planet);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.25, 16, 80),
      new THREE.MeshStandardMaterial({
        color: 0xffd18a,
        emissive: 0x3a1e08,
        roughness: 0.5,
        metalness: 0.2,
      })
    );
    ring.rotation.x = Math.PI * 0.35;
    ring.rotation.y = Math.PI * 0.2;
    group.add(ring);

    const satelliteGroup = new THREE.Group();
    group.add(satelliteGroup);

    const satellite = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x1b2c4a,
        roughness: 0.6,
      })
    );
    satellite.position.set(4.8, 0, 0);
    satelliteGroup.add(satellite);

    const moons = [
      {
        mesh: new THREE.Mesh(
          new THREE.SphereGeometry(0.28, 14, 14),
          new THREE.MeshStandardMaterial({
            color: 0xbcd7ff,
            emissive: 0x13233d,
            roughness: 0.7,
          })
        ),
        radius: 3.4,
        speed: 1.6,
        offset: 0.4,
      },
      {
        mesh: new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 14, 14),
          new THREE.MeshStandardMaterial({
            color: 0xffd6a5,
            emissive: 0x3a1e08,
            roughness: 0.8,
          })
        ),
        radius: 4.6,
        speed: 1.1,
        offset: 1.7,
      },
    ];

    moons.forEach(({ mesh }) => {
      satelliteGroup.add(mesh);
    });

    const sparkGeometry = new THREE.BufferGeometry();
    const sparkCount = 120;
    const sparkPositions = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i += 1) {
      const i3 = i * 3;
      sparkPositions[i3] = (Math.random() - 0.5) * 10;
      sparkPositions[i3 + 1] = (Math.random() - 0.5) * 10;
      sparkPositions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    sparkGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(sparkPositions, 3)
    );

    const sparks = new THREE.Points(
      sparkGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.12,
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    group.add(sparks);

    const timer = new THREE.Timer();
    let animationId = 0;
    const animate = () => {
      timer.update();
      const elapsed = timer.getElapsed();
      group.rotation.y = elapsed * 0.35;
      group.rotation.x = Math.sin(elapsed * 0.2) * 0.08;
      planet.rotation.y = elapsed * 0.8;
      ring.rotation.z = elapsed * 0.4;
      sparks.rotation.y = -elapsed * 0.5;
      satelliteGroup.rotation.y = elapsed * 1.4;
      satelliteGroup.rotation.x = Math.sin(elapsed * 0.8) * 0.25;

      moons.forEach(({ mesh, radius, speed, offset }) => {
        const angle = elapsed * speed + offset;
        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.z = Math.sin(angle) * radius;
        mesh.position.y = Math.sin(angle * 0.6) * 0.4;
      });

      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationId);
      planet.geometry.dispose();
      planet.material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      satellite.geometry.dispose();
      satellite.material.dispose();
      moons.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      sparkGeometry.dispose();
      sparks.material.dispose();
      renderer.dispose();
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [isVisible]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-background transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="cosmic-loader">
          <div ref={mountRef} className="cosmic-loader__canvas" />
          <div className="cosmic-loader__orbit" />
          <div className="cosmic-loader__planet" />
          <div className="cosmic-loader__star" />
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
          Loading
        </span>
      </div>
    </div>
  );
};
