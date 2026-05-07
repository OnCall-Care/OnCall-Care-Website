import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

// Responder locations scattered around the world
const RESPONDER_POINTS = [
  { lat: 6.5244, lng: 3.3792, name: 'Lagos, Nigeria', color: '#c91c22', size: 0.8 },
  { lat: 9.0579, lng: 7.4951, name: 'Abuja, Nigeria', color: '#c91c22', size: 0.7 },
  { lat: 51.5074, lng: -0.1278, name: 'London, UK', color: '#3b82f6', size: 0.6 },
  { lat: 40.7128, lng: -74.006, name: 'New York, USA', color: '#3b82f6', size: 0.6 },
  { lat: -33.8688, lng: 151.2093, name: 'Sydney, AU', color: '#3b82f6', size: 0.5 },
  { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan', color: '#3b82f6', size: 0.5 },
  { lat: 48.8566, lng: 2.3522, name: 'Paris, France', color: '#3b82f6', size: 0.5 },
  { lat: -1.2921, lng: 36.8219, name: 'Nairobi, Kenya', color: '#c91c22', size: 0.7 },
  { lat: 28.6139, lng: 77.209, name: 'Delhi, India', color: '#3b82f6', size: 0.6 },
  { lat: -23.5505, lng: -46.6333, name: 'São Paulo, Brazil', color: '#3b82f6', size: 0.5 },
  { lat: 55.7558, lng: 37.6173, name: 'Moscow, Russia', color: '#3b82f6', size: 0.5 },
  { lat: 1.3521, lng: 103.8198, name: 'Singapore', color: '#3b82f6', size: 0.5 },
  { lat: 30.0444, lng: 31.2357, name: 'Cairo, Egypt', color: '#c91c22', size: 0.7 },
];

// Connection arcs between cities
const ARC_DATA = [
  { startLat: 6.5244, startLng: 3.3792, endLat: 51.5074, endLng: -0.1278, color: ['rgba(201, 28, 34, 0.4)', 'rgba(59, 130, 246, 0.4)'] },
  { startLat: 6.5244, startLng: 3.3792, endLat: 9.0579, endLng: 7.4951, color: ['#c91c22', '#ff4d4d'] },
  { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, color: ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.3)'] },
  { startLat: -1.2921, startLng: 36.8219, endLat: 28.6139, endLng: 77.209, color: ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.3)'] },
  { startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198, color: ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.3)'] },
  { startLat: 6.5244, startLng: 3.3792, endLat: -1.2921, endLng: 36.8219, color: ['#c91c22', '#c91c22'] },
];

export default function GlobeVisual() {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    // Auto-rotate
    const controls = globeEl.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
    }

    // Point camera at Africa/Nigeria area
    globeEl.current.pointOfView({ lat: 10, lng: 15, altitude: 2.5 }, 0);
  }, []);

  return (
    <div className="globe-container" style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Globe
        ref={globeEl}
        width={450}
        height={450}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="rgba(201, 28, 34, 0.3)"
        atmosphereAltitude={0.15}

        // Points
        pointsData={RESPONDER_POINTS}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.01}
        pointsMerge={true}

        // Arcs
        arcsData={ARC_DATA}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={2}
        arcDashAnimateTime={2000}
        arcStroke={0.5}
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        ringColor="color"
      />
    </div>
  );
}
