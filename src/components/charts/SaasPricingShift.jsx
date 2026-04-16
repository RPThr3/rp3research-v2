import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { year: '2019', perSeat: 90, usage: 8,  outcome: 2  },
  { year: '2020', perSeat: 87, usage: 10, outcome: 3  },
  { year: '2021', perSeat: 83, usage: 12, outcome: 5  },
  { year: '2022', perSeat: 78, usage: 16, outcome: 6  },
  { year: '2023', perSeat: 72, usage: 20, outcome: 8  },
  { year: '2024', perSeat: 65, usage: 24, outcome: 11 },
  { year: '2025', perSeat: 58, usage: 28, outcome: 14 },
  { year: '2026', perSeat: 52, usage: 30, outcome: 18 },
  { year: '2028', perSeat: 46, usage: 32, outcome: 22 },
  { year: '2030', perSeat: 42, usage: 33, outcome: 25 },
];

const BG        = '#1e2330';
const FONT      = "'DM Sans', system-ui, sans-serif";
const WHITE     = '#ffffff';
const MUTED     = 'rgba(255,255,255,0.55)';
const GRID      = 'rgba(255,255,255,0.07)';
const RULE      = 'rgba(14,14,14,0.1)';
const PAPER     = '#f7f6f2';

const BLUE   = '#4B8FE2';
const TEAL   = '#3DB87A';
const AMBER  = '#D4A83A';

export default function SaasPricingShift({ caption }) {
  return (
    <figure style={{ width: '100%', margin: '40px 0' }}>

      {/* Dark chart card */}
      <div style={{ background: BG, borderRadius: '4px', padding: '28px 24px 20px' }}>

        {/* Header */}
        <p style={{ fontFamily: FONT, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, marginBottom: '10px' }}>
          Chart 1 — Pricing Model Shift
        </p>
        <p style={{ fontFamily: FONT, fontSize: '18px', fontWeight: 700, color: WHITE, lineHeight: 1.25, marginBottom: '6px' }}>
          Enterprise SaaS pricing: from seats to outcomes
        </p>
        <p style={{ fontFamily: FONT, fontSize: '13px', fontWeight: 400, color: MUTED, marginBottom: '24px', lineHeight: 1.5 }}>
          Share of enterprise SaaS contracts by pricing model, 2019–2030 (projected)
        </p>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
            <defs>
              <linearGradient id="spsGradBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={BLUE}  stopOpacity={0.28} />
                <stop offset="95%" stopColor={BLUE}  stopOpacity={0.04} />
              </linearGradient>
              <linearGradient id="spsGradTeal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={TEAL}  stopOpacity={0.35} />
                <stop offset="95%" stopColor={TEAL}  stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="spsGradAmber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={AMBER} stopOpacity={0.45} />
                <stop offset="95%" stopColor={AMBER} stopOpacity={0.07} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />

            <XAxis
              dataKey="year"
              tick={{ fontFamily: FONT, fontSize: 12, fill: MUTED }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={v => `${v}%`}
              tick={{ fontFamily: FONT, fontSize: 12, fill: MUTED }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              width={44}
            />

            <Tooltip
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{
                fontFamily: FONT,
                fontSize: 13,
                border: `1px solid ${RULE}`,
                borderRadius: '2px',
                background: PAPER,
                boxShadow: '0 4px 12px rgba(14,14,14,0.12)',
                padding: '10px 14px',
              }}
              labelStyle={{ fontFamily: FONT, fontSize: 13, color: '#0e0e0e', marginBottom: 4, fontWeight: 600 }}
              itemStyle={{ color: '#0e0e0e' }}
            />

            <Legend
              wrapperStyle={{ fontFamily: FONT, fontSize: 12, color: MUTED, paddingTop: '16px' }}
            />

            {/* Independent (non-stacked) areas — each fills to y=0 */}
            <Area type="monotone" dataKey="perSeat"  name="Per-seat"             stroke={BLUE}  strokeWidth={2} fill="url(#spsGradBlue)"  dot={{ r: 3, fill: BLUE,  strokeWidth: 0 }} activeDot={{ r: 5 }} />
            <Area type="monotone" dataKey="usage"    name="Usage-based"          stroke={TEAL}  strokeWidth={2} fill="url(#spsGradTeal)"  dot={{ r: 3, fill: TEAL,  strokeWidth: 0 }} activeDot={{ r: 5 }} />
            <Area type="monotone" dataKey="outcome"  name="Outcome/agent-based"  stroke={AMBER} strokeWidth={2} fill="url(#spsGradAmber)" dot={{ r: 3, fill: AMBER, strokeWidth: 0 }} activeDot={{ r: 5 }} />
          </AreaChart>
        </ResponsiveContainer>

        {/* Source */}
        <p style={{ fontFamily: FONT, fontSize: '11px', color: MUTED, letterSpacing: '0.04em', marginTop: '12px' }}>
          Sources: Gartner (2025), Deloitte Technology Predictions 2026, Getmonetizely
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
