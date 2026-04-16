import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';

// Weakest at top, strongest at bottom — matching reference layout
const data = [
  { moat: 'Feature sets / UX',        score: 2.5 },
  { moat: 'Switching costs',          score: 4.0 },
  { moat: 'Network effects',          score: 5.5 },
  { moat: 'Trust + compliance layer', score: 7.5 },
  { moat: 'Proprietary data',         score: 8.0 },
  { moat: 'Workflow ownership',       score: 9.0 },
];

const BG    = '#1e2330';
const FONT  = "'DM Sans', system-ui, sans-serif";
const WHITE = '#ffffff';
const MUTED = 'rgba(255,255,255,0.55)';
const GRID  = 'rgba(255,255,255,0.07)';
const RULE  = 'rgba(14,14,14,0.1)';
const PAPER = '#f7f6f2';

// Weak moats: three distinct warm tones; strong moats: three green shades
const COLOR_MAP = {
  'Feature sets / UX':        '#C75B4E',  // coral red
  'Switching costs':          '#A84040',  // deep red
  'Network effects':          '#C49A3C',  // amber
  'Trust + compliance layer': '#4DB87A',  // light green
  'Proprietary data':         '#3DA06A',  // medium green
  'Workflow ownership':       '#2D8F5C',  // dark green
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { moat, score } = payload[0].payload;
  return (
    <div style={{
      fontFamily: FONT, fontSize: 13,
      border: `1px solid ${RULE}`, borderRadius: '2px',
      background: PAPER, boxShadow: '0 4px 12px rgba(14,14,14,0.12)',
      padding: '10px 14px',
    }}>
      <p style={{ fontSize: 13, color: '#0e0e0e', marginBottom: 4, fontWeight: 600 }}>{moat}</p>
      <p style={{ color: '#6b6b6b' }}>Durability: <strong style={{ color: '#0e0e0e' }}>{score} / 10</strong></p>
    </div>
  );
};

export default function SaasMoatRanking({ caption }) {
  return (
    <figure style={{ width: '100%', margin: '40px 0' }}>

      {/* Dark chart card */}
      <div style={{ background: BG, borderRadius: '4px', padding: '28px 24px 20px' }}>

        {/* Header */}
        <p style={{ fontFamily: FONT, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: '10px' }}>
          Chart 4 — Moat Ranking
        </p>
        <p style={{ fontFamily: FONT, fontSize: '18px', fontWeight: 700, color: WHITE, lineHeight: 1.25, marginBottom: '6px' }}>
          Where the new moat lives
        </p>
        <p style={{ fontFamily: FONT, fontSize: '13px', fontWeight: 400, color: MUTED, marginBottom: '24px', lineHeight: 1.5 }}>
          Estimated competitive durability of SaaS moat types in an AI-first environment (0–10)
        </p>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 4, right: 40, left: 0, bottom: 4 }}
            barCategoryGap="22%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} horizontal={false} />

            <XAxis
              type="number"
              domain={[0, 10]}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              tick={{ fontFamily: FONT, fontSize: 12, fill: MUTED }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="moat"
              width={175}
              tick={{ fontFamily: FONT, fontSize: 12, fill: MUTED }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />

            <Bar dataKey="score" radius={[0, 3, 3, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={COLOR_MAP[entry.moat]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Source */}
        <p style={{ fontFamily: FONT, fontSize: '11px', color: MUTED, letterSpacing: '0.04em', marginTop: '12px' }}>
          Sources: Bain &amp; Company (2025), Webapper, RP3 Research analysis
        </p>
      </div>

      {/* Caption outside dark card */}
      {caption && (
        <figcaption style={{
          fontFamily: FONT,
          fontSize: '13px',
          color: '#6b6b6b',
          lineHeight: 1.75,
          fontStyle: 'italic',
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: `1px solid rgba(14,14,14,0.1)`,
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
