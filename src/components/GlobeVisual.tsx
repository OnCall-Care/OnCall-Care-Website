import { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';

// Responder locations scattered around the world
const RESPONDER_POINTS = [
  { lat: 6.5244, lng: 3.3792, name: 'Lagos, Nigeria', color: '#3b82f6', size: 0.6 },
  { lat: 9.0579, lng: 7.4951, name: 'Abuja, Nigeria', color: '#3b82f6', size: 0.5 },
  { lat: 51.5074, lng: -0.1278, name: 'London, UK', color: '#06b6d4', size: 0.5 },
  { lat: 40.7128, lng: -74.006, name: 'New York, USA', color: '#3b82f6', size: 0.5 },
  { lat: -33.8688, lng: 151.2093, name: 'Sydney, AU', color: '#06b6d4', size: 0.4 },
  { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan', color: '#3b82f6', size: 0.4 },
  { lat: 48.8566, lng: 2.3522, name: 'Paris, France', color: '#06b6d4', size: 0.4 },
  { lat: -1.2921, lng: 36.8219, name: 'Nairobi, Kenya', color: '#3b82f6', size: 0.5 },
  { lat: 28.6139, lng: 77.209, name: 'Delhi, India', color: '#3b82f6', size: 0.5 },
  { lat: -23.5505, lng: -46.6333, name: 'São Paulo, Brazil', color: '#06b6d4', size: 0.4 },
  { lat: 55.7558, lng: 37.6173, name: 'Moscow, Russia', color: '#3b82f6', size: 0.4 },
  { lat: 1.3521, lng: 103.8198, name: 'Singapore', color: '#06b6d4', size: 0.4 },
  { lat: 30.0444, lng: 31.2357, name: 'Cairo, Egypt', color: '#3b82f6', size: 0.5 },
];

// Connection arcs between cities
const ARC_DATA = [
  { startLat: 6.5244, startLng: 3.3792, endLat: 51.5074, endLng: -0.1278, color: ['rgba(59,130,246,0.6)', 'rgba(6,182,212,0.6)'] },
  { startLat: 6.5244, startLng: 3.3792, endLat: 9.0579, endLng: 7.4951, color: ['rgba(201,28,34,0.8)', 'rgba(255,77,77,0.8)'] },
  { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, color: ['rgba(59,130,246,0.5)', 'rgba(6,182,212,0.5)'] },
  { startLat: -1.2921, startLng: 36.8219, endLat: 28.6139, endLng: 77.209, color: ['rgba(6,182,212,0.5)', 'rgba(59,130,246,0.5)'] },
  { startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198, color: ['rgba(59,130,246,0.4)', 'rgba(6,182,212,0.4)'] },
  { startLat: -33.8688, startLng: 151.2093, endLat: 1.3521, endLng: 103.8198, color: ['rgba(6,182,212,0.4)', 'rgba(59,130,246,0.4)'] },
  { startLat: 6.5244, startLng: 3.3792, endLat: -1.2921, endLng: 36.8219, color: ['rgba(201,28,34,0.6)', 'rgba(59,130,246,0.6)'] },
  { startLat: 48.8566, startLng: 2.3522, endLat: 30.0444, endLng: 31.2357, color: ['rgba(6,182,212,0.5)', 'rgba(59,130,246,0.5)'] },
];

// Ripple ring data for the "center" location (Lagos)
const RING_DATA = [
  { lat: 6.5244, lng: 3.3792, maxR: 6, propagationSpeed: 2, repeatPeriod: 1200, color: () => 'rgba(201,28,34,0.6)' },
];

export default function GlobeVisual() {
  const globeEl = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!globeEl.current) return;

    // Auto-rotate
    const controls = globeEl.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
    }

    // Point camera at Nigeria/Africa area
    globeEl.current.pointOfView({ lat: 10, lng: 8, altitude: 2.2 }, 0);

    setIsReady(true);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        width: '120%',
        height: '120%',
        top: '-10%',
        left: '-10%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <Globe
        ref={globeEl}
        width={380}
        height={380}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="rgba(59,130,246,0.5)"
        atmosphereAltitude={0.2}

        // Points (responder locations)
        pointsData={RESPONDER_POINTS}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.01}
        pointsMerge={true}

        // Arcs (connections between cities)
        arcsData={ARC_DATA}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        arcStroke={0.5}

        // Rings (ripple from Lagos)
        ringsData={RING_DATA}
        ringLat="lat"
        ringLng="lng"
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        ringColor="color"
      />
    </div>
  );
}
