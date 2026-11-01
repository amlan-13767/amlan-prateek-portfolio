import { metrics } from '../data/content';
export default function Metrics() { return <section className="metrics section-wrap" aria-label="Highlights">{metrics.map(({ value, label }) => <div className="metric" key={label}><strong>{value.includes('/') ? <>{value.split('/')[0]}<span>/{value.split('/')[1]}</span></> : value}</strong><small>{label}</small></div>)}</section>; }
