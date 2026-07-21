import { useId } from 'react';
import { ARCHETYPES } from '../data/questions';

const Person = ({ x, y, scale = 1, accent = false }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <circle cx="0" cy="-23" r="13" fill={accent ? 'currentColor' : '#dce7f6'} />
    <path
      d="M-24 26c1-27 10-40 24-40s23 13 24 40"
      fill={accent ? 'currentColor' : '#8ca2bc'}
      opacity={accent ? 1 : 0.72}
    />
  </g>
);

const DriverScene = () => (
  <>
    <path d="M61 150C107 139 145 116 178 75s70-42 105-30" className="art-route" />
    <path d="m273 35 24 8-16 18" className="art-arrow" />
    <line x1="285" y1="38" x2="285" y2="88" className="art-thin" />
    <path d="M286 41h35l-11 12 11 12h-35" fill="currentColor" opacity=".9" />
    <Person x={174} y={126} scale={1.05} accent />
    <Person x={112} y={151} scale={0.72} />
    <Person x={66} y={164} scale={0.58} />
    <circle cx="180" cy="67" r="24" className="art-halo" />
  </>
);

const StrategistScene = () => (
  <>
    <rect x="56" y="42" width="270" height="145" rx="18" className="art-panel" />
    <path d="M86 145 132 91l55 31 55-61 53 26" className="art-route" />
    <circle cx="86" cy="145" r="7" className="art-node" />
    <circle cx="132" cy="91" r="7" className="art-node" />
    <circle cx="187" cy="122" r="7" className="art-node" />
    <circle cx="242" cy="61" r="7" className="art-node" />
    <path d="m288 75 20 12-20 12Z" fill="currentColor" />
    <Person x={195} y={192} scale={0.92} accent />
    <path d="M171 151h49l16 45h-81Z" fill="#111a2e" stroke="currentColor" strokeWidth="2" />
  </>
);

const MentorScene = () => (
  <>
    <Person x={118} y={151} scale={0.88} accent />
    <Person x={246} y={161} scale={0.78} />
    <path d="M146 117c25-25 52-26 76-8" className="art-route" />
    <path d="m214 97 18 14-21 8" className="art-arrow" />
    <rect x="216" y="175" width="38" height="18" rx="4" fill="#58718d" />
    <rect x="230" y="153" width="38" height="18" rx="4" fill="#7891ac" />
    <rect x="244" y="131" width="38" height="18" rx="4" fill="currentColor" />
    <path d="M97 74c0-15 13-27 29-27h36c16 0 29 12 29 27s-13 27-29 27h-19l-17 14 2-14h-2c-16 0-29-12-29-27Z" className="art-panel" />
    <circle cx="126" cy="74" r="4" fill="currentColor" />
    <circle cx="145" cy="74" r="4" fill="currentColor" />
    <circle cx="164" cy="74" r="4" fill="currentColor" />
  </>
);

const ConnectorScene = () => (
  <>
    <path d="M192 112 88 69m104 43 103-43M192 112 88 173m104-61 103 61" className="art-route" />
    <circle cx="88" cy="69" r="27" className="art-panel" />
    <circle cx="295" cy="69" r="27" className="art-panel" />
    <circle cx="88" cy="173" r="27" className="art-panel" />
    <circle cx="295" cy="173" r="27" className="art-panel" />
    <circle cx="192" cy="112" r="50" className="art-halo" />
    <Person x={192} y={133} scale={0.78} accent />
    <circle cx="88" cy="68" r="9" fill="#dce7f6" />
    <circle cx="295" cy="68" r="9" fill="#dce7f6" />
    <circle cx="88" cy="172" r="9" fill="#dce7f6" />
    <circle cx="295" cy="172" r="9" fill="#dce7f6" />
    <path d="M160 174c20 16 44 16 64 0" className="art-arrow" />
  </>
);

const OrganizerScene = () => (
  <>
    <rect x="50" y="38" width="282" height="158" rx="20" className="art-panel" />
    <line x1="145" y1="54" x2="145" y2="181" className="art-thin" />
    <line x1="238" y1="54" x2="238" y2="181" className="art-thin" />
    <rect x="70" y="69" width="55" height="18" rx="5" fill="currentColor" />
    <rect x="70" y="99" width="55" height="18" rx="5" fill="#58718d" />
    <rect x="164" y="80" width="55" height="18" rx="5" fill="#7891ac" />
    <rect x="164" y="112" width="55" height="18" rx="5" fill="currentColor" />
    <rect x="256" y="70" width="55" height="18" rx="5" fill="#7891ac" />
    <path d="M126 77h28m65 13h27m-121 18h39m55 13h37" className="art-arrow" />
    <Person x={192} y={205} scale={0.72} accent />
  </>
);

const InnovatorScene = () => (
  <>
    <path d="M54 170h70v-35h57v-35h57V65h72" className="art-route" />
    <path d="m297 53 21 12-21 12" className="art-arrow" />
    <Person x={118} y={165} scale={0.82} />
    <Person x={202} y={111} scale={0.9} accent />
    <circle cx="245" cy="43" r="24" className="art-halo" />
    <path d="M245 28c-11 0-19 8-19 18 0 7 4 12 9 16l3 10h14l3-10c6-4 9-9 9-16 0-10-8-18-19-18Z" fill="currentColor" />
    <path d="M232 82h26m-22 8h18" className="art-thin" />
    <path d="m282 113 10-8m-20-10 5-12m17 47 13-1" className="art-thin" />
  </>
);

const scenes = {
  driver: DriverScene,
  strategist: StrategistScene,
  mentor: MentorScene,
  connector: ConnectorScene,
  organizer: OrganizerScene,
  innovator: InnovatorScene,
};

export default function ArchetypeArt({ type, className = '' }) {
  const gradientId = useId().replaceAll(':', '');
  const Scene = scenes[type] ?? scenes.driver;
  const archetype = ARCHETYPES[type] ?? ARCHETYPES.driver;

  return (
    <svg
      className={`archetype-art ${className}`}
      viewBox="0 0 384 240"
      role="img"
      aria-label={`Ilustrace role ${archetype.label}: ${archetype.subtitle}`}
      style={{ color: archetype.color }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={archetype.color} stopOpacity=".21" />
          <stop offset=".55" stopColor="#11182b" stopOpacity=".28" />
          <stop offset="1" stopColor="#090d1a" stopOpacity=".92" />
        </linearGradient>
        <pattern id={`${gradientId}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0v24" fill="none" stroke="currentColor" strokeOpacity=".08" />
        </pattern>
      </defs>
      <rect width="384" height="240" rx="28" fill={`url(#${gradientId})`} />
      <rect width="384" height="240" rx="28" fill={`url(#${gradientId}-grid)`} />
      <g className="art-scene"><Scene /></g>
      <rect x="1" y="1" width="382" height="238" rx="27" fill="none" stroke="currentColor" strokeOpacity=".28" />
    </svg>
  );
}
