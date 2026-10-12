import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SpatialCanvasSceneProps {
  className?: string;
}

export const SpatialCanvasScene: React.FC<SpatialCanvasSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglError, setWebglError] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      // 1. Scene Setup
      const scene = new THREE.Scene();

      // Camera
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 7.5);

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Handle WebGL context loss
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        console.warn('WebGL Context Lost in 3D Scene');
        setWebglError(true);
      };
      const handleContextRestored = () => {
        console.log('WebGL Context Restored');
        setWebglError(false);
      };
      canvasRef.current.addEventListener('webglcontextlost', handleContextLost, false);
      canvasRef.current.addEventListener('webglcontextrestored', handleContextRestored, false);

      // 2. Lighting Setup (Three-point lighting: Key, Fill, Rim)
      const ambientLight = new THREE.AmbientLight(0x0f172a, 2.5);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
      keyLight.position.set(5, 6, 4);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x818cf8, 1.8);
      fillLight.position.set(-5, -3, -2);
      scene.add(fillLight);

      const rimLight = new THREE.PointLight(0x38bdf8, 2.0, 20);
      rimLight.position.set(0, 4, -4);
      scene.add(rimLight);

      // 3. 3D Spatial Geometry: Abstract Equilibrium & Justice Gyroscope Structure
      const masterGroup = new THREE.Group();
      scene.add(masterGroup);

      // Inner Core: Crystalline Octahedron (Law & Principle Core)
      const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x0e1b33,
        roughness: 0.2,
        metalness: 0.85,
        wireframe: false,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      masterGroup.add(coreMesh);

      // Inner Core Wireframe Accent
      const coreWireGeo = new THREE.OctahedronGeometry(1.25, 0);
      const coreWireMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
      masterGroup.add(coreWireMesh);

      // Outer Orbital Ring 1 (Jurisdictional Balance Ring)
      const ring1Geo = new THREE.TorusGeometry(2.3, 0.03, 16, 100);
      const ring1Mat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x0284c7,
        emissiveIntensity: 0.3,
      });
      const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1Mesh.rotation.x = Math.PI / 3;
      masterGroup.add(ring1Mesh);

      // Outer Orbital Ring 2 (Constitutional Axis Ring)
      const ring2Geo = new THREE.TorusGeometry(2.6, 0.025, 16, 100);
      const ring2Mat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        metalness: 0.95,
        roughness: 0.15,
      });
      const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2Mesh.rotation.y = Math.PI / 4;
      masterGroup.add(ring2Mesh);

      // Geodesic Outer Cage (Regulatory Network)
      const cageGeo = new THREE.IcosahedronGeometry(3.1, 1);
      const cageMat = new THREE.MeshBasicMaterial({
        color: 0x1e293b,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const cageMesh = new THREE.Mesh(cageGeo, cageMat);
      masterGroup.add(cageMesh);

      // Delicate Spatial Nodes / Constellation Particles
      const particleCount = 60;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2.4 + Math.random() * 1.5;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.06,
        transparent: true,
        opacity: 0.7,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      masterGroup.add(particles);

      // 4. Interaction Handling (Mouse tracking & Drag rotation)
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX = (x / rect.width) * 2 - 1;
        mouseY = -(y / rect.height) * 2 + 1;

        if (isDragging) {
          const deltaX = e.clientX - previousMousePosition.x;
          const deltaY = e.clientY - previousMousePosition.y;
          masterGroup.rotation.y += deltaX * 0.008;
          masterGroup.rotation.x += deltaY * 0.008;
          previousMousePosition = { x: e.clientX, y: e.clientY };
        }
      };

      const handleMouseDown = (e: MouseEvent) => {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const handleMouseUp = () => {
        isDragging = false;
        setIsInteracting(false);
      };

      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          isDragging = true;
          setIsInteracting(true);
          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (isDragging && e.touches.length === 1) {
          const deltaX = e.touches[0].clientX - previousMousePosition.x;
          const deltaY = e.touches[0].clientY - previousMousePosition.y;
          masterGroup.rotation.y += deltaX * 0.008;
          masterGroup.rotation.x += deltaY * 0.008;
          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };

      const handleTouchEnd = () => {
        isDragging = false;
        setIsInteracting(false);
      };

      const containerEl = containerRef.current;
      containerEl.addEventListener('mousemove', handleMouseMove);
      containerEl.addEventListener('mousedown', handleMouseDown);
      containerEl.addEventListener('touchstart', handleTouchStart, { passive: true });
      containerEl.addEventListener('touchmove', handleTouchMove, { passive: true });
      containerEl.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('mouseup', handleMouseUp);

      // 5. Resize Listener
      const handleResize = () => {
        if (!containerRef.current || !renderer) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      // 6. Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          // Automatic gentle orbit
          if (!isDragging) {
            masterGroup.rotation.y += 0.004;
            coreMesh.rotation.x += 0.008;
            coreMesh.rotation.y += 0.005;
            coreWireMesh.rotation.x -= 0.005;
            coreWireMesh.rotation.y -= 0.007;

            ring1Mesh.rotation.z += 0.007;
            ring2Mesh.rotation.x += 0.005;
            cageMesh.rotation.y -= 0.002;
          }

          // Gentle mouse parallax lerping
          targetX = mouseX * 0.8;
          targetY = mouseY * 0.8;
          camera.position.x += (targetX - camera.position.x) * 0.04;
          camera.position.y += (targetY - camera.position.y) * 0.04;
          camera.lookAt(0, 0, 0);

          // Subtle harmonic breathing on rings
          const pulse = Math.sin(time * 1.5) * 0.04;
          ring1Mesh.scale.set(1 + pulse, 1 + pulse, 1 + pulse);
        }

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mouseup', handleMouseUp);
        if (containerEl) {
          containerEl.removeEventListener('mousemove', handleMouseMove);
          containerEl.removeEventListener('mousedown', handleMouseDown);
          containerEl.removeEventListener('touchstart', handleTouchStart);
          containerEl.removeEventListener('touchmove', handleTouchMove);
          containerEl.removeEventListener('touchend', handleTouchEnd);
        }
        if (canvasRef.current) {
          canvasRef.current.removeEventListener('webglcontextlost', handleContextLost);
          canvasRef.current.removeEventListener('webglcontextrestored', handleContextRestored);
        }
        if (renderer) {
          renderer.dispose();
        }
      };
    } catch (err) {
      console.error('Three.js initialization failed:', err);
      setWebglError(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-full h-[260px] sm:h-[420px] lg:h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden touch-none ${className}`}
      title="Interactive 3D Spatial Sculpture · Click & drag to rotate"
    >
      {/* Real Three.js Canvas Element */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block relative z-10 transition-opacity duration-500 ${
          webglError ? 'hidden' : 'opacity-100'
        }`}
      />

      {/* Interactive Helper HUD Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none max-w-[92%]">
        <div className="bg-slate-950/80 backdrop-blur-md border border-cyan-500/20 px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono text-cyan-400 flex items-center justify-center gap-1.5 shadow-lg truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span className="hidden sm:inline">Interactive 3D WebGL · Drag to Inspect Equilibrium</span>
          <span className="sm:hidden">Interactive 3D · Drag to Rotate</span>
        </div>
      </div>

      {/* Graceful Fallback if WebGL unavailable or error */}
      {webglError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/80 border border-cyan-900/40 rounded-2xl">
          <div className="w-20 h-20 rounded-full border border-cyan-500/40 bg-cyan-950/30 flex items-center justify-center text-cyan-400 mb-4">
            <svg className="w-10 h-10 stroke-current" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="1.5" />
              <path d="M2 12h20" strokeWidth="1.5" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-white">Spatial Geometry Model</h4>
          <p className="text-xs text-slate-400 max-w-xs mt-1">
            Displaying structural perspective mode. Hardware acceleration fallback active.
          </p>
        </div>
      )}
    </div>
  );
};
