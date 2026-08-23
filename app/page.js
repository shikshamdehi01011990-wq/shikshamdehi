import Link from 'next/link';
import { ArrowLeft, ArrowRight, Battery, Bot, Box, Check, CircuitBoard, Lightbulb, Printer, Radar, ShieldCheck, Sparkles, Wrench, Zap } from 'lucide-react';
import styles from './programs.module.css';

const modules = [
  { n: '01', icon: CircuitBoard, title: 'Basic Electronics', text: 'Components, circuits, breadboards and safe low-voltage making.', active: true },
  { n: '02', icon: Zap, title: 'Arduino Fundamentals', text: 'Inputs, outputs, coding and interactive electronics.' },
  { n: '03', icon: Radar, title: 'Sensors & Automation', text: 'Sense the environment and turn data into action.' },
  { n: '04', icon: Box, title: '3D Design', text: 'Measure, model and convert ideas into digital objects.' },
  { n: '05', icon: Printer, title: '3D Printing', text: 'Slice, print, test and troubleshoot physical prototypes.' },
  { n: '06', icon: Bot, title: 'Simple Robotics', text: 'Motors, drivers, chassis and Arduino-controlled robots.' },
  { n: '07', icon: Wrench, title: 'Integrated Projects', text: 'Combine electronics, sensors, 3D printing and robotics.' },
  { n: '08', icon: Sparkles, title: 'Innovation Challenge', text: 'Identify a real problem and build a working prototype.' },
];

const sessions = [
  ['01', 'Electricity & Safety', 'Voltage/current ka basic idea, power source, open vs closed circuit aur safe low-voltage practices.', 'Battery + LED observation'],
  ['02', 'Know Your Components', 'LED, resistor, push button, switch, battery, jumper wire, breadboard aur buzzer ko identify karna.', 'Component identification challenge'],
  ['03', 'Breadboard Mastery', 'Breadboard ke rows, power rails, component placement aur jumper connections samajhna.', 'LED ON/OFF circuit'],
  ['04', 'Switch & Control', 'Input aur output ka concept: button press karne par circuit ka response.', 'Push Button LED'],
  ['05', 'Buzzer & Mini Alarm', 'Simple warning system design aur circuit testing.', 'Mini Door Alarm'],
  ['06', 'Electronics Challenge', 'Problem → circuit diagram → build → test → improve → explain.', 'School Warning System'],
];

const kit = ['Breadboard', 'LEDs', 'Resistors – multiple values', 'Push buttons & switches', 'Jumper wires', 'Buzzer', 'Battery holder / low-voltage DC supply', 'Batteries', 'Shared multimeter', 'Component storage box'];

export default function ProgramsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link className={styles.brand} href="/"><span className={styles.mark}>SD</span><span>Shiksham<span>Dehi</span></span></Link>
        <Link className={styles.back} href="/"><ArrowLeft size={16}/> Home</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow}/>
        <div className={styles.eyebrow}><span/> CLASS 6–8 • 1-YEAR MAKER PROGRAM</div>
        <h1>Learn. Design.<br/><em>Build. Innovate.</em></h1>
        <p>ShikshamDehi Young Maker Program students ko electronics, Arduino, sensors, 3D design, 3D printing aur robotics ke through real-world making skills develop karata hai.</p>
        <div className={styles.heroMeta}>
          <span><strong>40–48</strong> Sessions</span><i/><span><strong>60–90</strong> Min / Session</span><i/><span><strong>70%</strong> Hands-on</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}><div><div className={styles.eyebrow}>THE LEARNING JOURNEY</div><h2>8 modules.<br/><em>One maker mindset.</em></h2></div><p>Concepts ko isolated subjects ki tarah nahi, balki ek connected journey ki tarah sikhaya jata hai: electronics se Arduino, sensors se automation, aur 3D design se robotics tak.</p></div>
        <div className={styles.moduleGrid}>
          {modules.map(({n, icon: Icon, title, text, active}) => <article className={`${styles.module} ${active ? styles.active : ''}`} key={n}><div className={styles.moduleTop}><span>{n}</span><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className={styles.band}>
        <div className={styles.section}>
          <div className={styles.sectionHead}><div><div className={styles.eyebrow}>MODULE 01 • BASIC ELECTRONICS</div><h2>Electricity se<br/><em>smart circuit tak.</em></h2></div><p>First module ka goal students ko real components ke saath comfortable banana hai. Har concept immediately practical activity se connect hota hai.</p></div>
          <div className={styles.sessionGrid}>
            {sessions.map(([n, title, text, project]) => <article className={styles.session} key={n}><div className={styles.sessionNo}>{n}</div><div><h3>{title}</h3><p>{text}</p><div className={styles.project}><Lightbulb size={15}/><span>{project}</span></div></div></article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div><div className={styles.eyebrow}>MODULE OUTCOME</div><h2>Student kya<br/><em>kar payega?</em></h2><p className={styles.lead}>Module complete hone ke baad student basic electronic components identify karke breadboard par simple circuit bana, test aur explain kar payega.</p></div>
          <div className={styles.outcomes}>
            {['Basic components identify karna', 'Breadboard par simple circuit banana', 'LED, switch aur buzzer use karna', 'Input → Output ka basic concept samajhna', 'Circuit ko test aur troubleshoot karna', 'Apne prototype ko explain karna'].map(x => <div key={x}><Check size={17}/><span>{x}</span></div>)}
          </div>
        </div>
      </section>

      <section className={styles.section + ' ' + styles.kitSection}>
        <div className={styles.sectionHead}><div><div className={styles.eyebrow}>TRAINER KIT</div><h2>Simple tools.<br/><em>Real making.</em></h2></div><p>School lab ke liye low-voltage, reusable components ka basic kit. Mains electricity students ke practicals se completely separate rahegi.</p></div>
        <div className={styles.kitGrid}>{kit.map((x, i) => <div className={styles.kitItem} key={x}><span>{String(i + 1).padStart(2,'0')}</span><ShieldCheck size={15}/><b>{x}</b></div>)}</div>
      </section>

      <section className={styles.challenge}>
        <div className={styles.challengeInner}><div className={styles.eyebrow}>FINAL CHALLENGE</div><h2>Design a warning system<br/><em>for your school.</em></h2><p>Idea → Circuit Diagram → Build → Test → Improve → Present</p><Link className={styles.primary} href="/#contact">Discuss School Program <ArrowRight size={17}/></Link></div>
      </section>

      <footer className={styles.footer}><Link href="/">Shiksham<span>Dehi</span></Link><span>Future skills. Real projects.</span><small>© 2026 ShikshamDehi</small></footer>
    </main>
  );
}
