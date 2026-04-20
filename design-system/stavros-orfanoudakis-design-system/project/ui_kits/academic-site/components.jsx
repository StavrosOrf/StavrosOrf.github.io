// Shared UI components for the Stavros Orfanoudakis academic site
// Updated April 2026 from current CV.

const { useState } = React;

function Eyebrow({ children, style }) { return <div className="so-eyebrow" style={style}>{children}</div>; }
function Rule({ style }) { return <hr className="so-rule" style={style} />; }

/* ---------- Top Nav / Footer ---------- */
function TopNav({ current, onNav }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'cv', label: 'CV' },
  ];
  return (
    <header className="so-nav">
      <div className="so-nav__inner">
        <a className="so-nav__brand" onClick={() => onNav('home')}>
          <span className="so-nav__mono">S.</span>
          <span className="so-nav__word">
            <span className="so-nav__name">Stavros Orfanoudakis</span>
            <span className="so-nav__sub">Research Scholar · ETH Zürich</span>
          </span>
        </a>
        <nav className="so-nav__tabs">
          {tabs.map(t => (
            <button key={t.id}
              className={'so-nav__tab' + (current === t.id ? ' is-active' : '')}
              onClick={() => onNav(t.id)}>{t.label}</button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="so-foot">
      <div className="so-foot__inner">
        <span className="so-foot__c">© 2026 Stavros Orfanoudakis</span>
        <div className="so-foot__social">
          <a href="https://scholar.google.com/citations?user=flE6u1oAAAAJ" target="_blank" title="Google Scholar"><i className="fab fa-google"></i></a>
          <a href="https://orcid.org/0000-0002-0767-9488" target="_blank" title="ORCID"><i className="fab fa-orcid"></i></a>
          <a href="https://www.linkedin.com/in/stavros-orfanoudakis/" target="_blank" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/StavrosOrf" target="_blank" title="GitHub"><i className="fab fa-github"></i></a>
        </div>
        <span className="so-foot__upd">sorfanoudaki@ethz.ch</span>
      </div>
    </footer>
  );
}

/* ---------- Intro ---------- */
function Intro() {
  return (
    <section className="so-intro">
      <div className="so-intro__side">
        <div className="so-intro__portrait">
          <img src="../../assets/stavros_profile.jpeg" alt="Stavros Orfanoudakis" />
        </div>
        <div className="so-intro__interests">
          <Eyebrow>Research interests</Eyebrow>
          <ul>
            <li>Reinforcement Learning</li>
            <li>Physics-Informed ML</li>
            <li>LLMs &amp; GNNs for Power Systems</li>
            <li>Energy Transition &amp; Smart Grids</li>
            <li>Multi-Agent Systems</li>
          </ul>
        </div>
      </div>
      <div className="so-intro__text">
        <h1 className="so-h1">Stavros <em>Orfanoudakis</em></h1>
        <div className="so-intro__role">Research Scholar · Power Systems Laboratory, ETH Zürich</div>
        <p>
          I am a Research Scholar at the <em>Power Systems Laboratory</em>, ETH Zürich,
          where I apply large language models and physics-informed machine learning
          to power-system operation. My PhD, defended in September 2026 at
          <em> TU Delft</em>, focused on scalable reinforcement learning for optimal
          electric-vehicle charging, advised by Dr. Pedro P. Vergara and Prof. Peter Palensky.
        </p>
        <p>
          Before ETH, I was a visiting researcher at <em>MIT's Center for Transportation
          and Logistics</em>, where I worked on AI-based routing for electric truck
          fleets. I won the international <em>PowerTAC</em> competition in 2020 and
          placed second in 2021 as a student at the Technical University of Crete.
        </p>
        <p className="so-intro__contact">
          <a href="mailto:sorfanoudaki@ethz.ch">sorfanoudaki@ethz.ch</a> &nbsp;·&nbsp;
          <a href="cv.html">View CV</a> &nbsp;·&nbsp;
          <a href="https://scholar.google.com/citations?user=flE6u1oAAAAJ" target="_blank">Google Scholar</a>
        </p>
      </div>
    </section>
  );
}

/* ---------- News ---------- */
function News() {
  const items = [
    { year: 'FEB 2026', body: <>Started as <em>Research Scholar</em> at the Power Systems Laboratory, <em>ETH Zürich</em>, working on LLMs and physics-informed ML for power systems.</> },
    { year: 'JAN 2026', body: <>Awarded <em>TU Delft 2025 Best PowerWeb Paper</em> and nominated for Best Energy Paper for our <a href="#">Graph-RL EV coordination</a> work.</> },
    { year: 'NOV 2025', body: <>Visiting Researcher at <em>MIT Center for Transportation &amp; Logistics</em>; co-organized an industry event on Agentic AI in supply chains.</> },
    { year: 'SEP 2025', body: <>Granted the <em>NCCR Automation Fellowship</em> (≈10 k€) for "Physics-Informed LLMs for Sequential Decision-Making in Power Systems".</> },
    { year: 'JUL 2025', body: <>"Scalable RL for Large-Scale EV Coordination Using GNNs" named <em>Editor's Choice 2025</em> at <em>Nature Communications Engineering</em>.</> },
    { year: 'JUN 2025', body: <>Invited talk at the <em>Linux Foundation Energy Summit Europe</em>, Aachen.</> },
    { year: 'APR 2023', body: <>Started my PhD at TU Delft, Intelligent Electrical Power Grids group.</> },
  ];
  return (
    <section className="so-section">
      <div className="so-sectionhead">
        <Eyebrow>News</Eyebrow>
        <h2 className="so-h2">Recent</h2>
      </div>
      <div className="so-timeline">
        {items.map((it, i) => (
          <div key={i} className="so-tl-item">
            <div className="so-tl-year">{it.year}</div>
            <div className="so-tl-body">{it.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Publication row ---------- */
function PubRow({ pub }) {
  const linkEls = {
    arxiv: <a key="a" href={pub.arxiv || '#'} target="_blank" title="arXiv"><img className="so-arxiv" src="../../assets/arxiv_logo.png" alt="arXiv" /></a>,
    external: <a key="e" href={pub.doi || '#'} target="_blank" title="Published version"><i className="fas fa-external-link-alt"></i></a>,
    pdf: <a key="p" href="#" title="PDF"><i className="fas fa-file-pdf"></i></a>,
  };
  return (
    <article className="so-pub">
      <div className="so-pub__tags">
        {pub.tags.includes('published') && <span className="so-tag so-tag--pub">Published</span>}
        {pub.tags.includes('preprint') && <span className="so-tag so-tag--pre">Under review</span>}
        {pub.tags.includes('editor') && <span className="so-tag so-tag--honor">Editor's Choice</span>}
        {pub.tags.includes('award') && <span className="so-tag so-tag--honor">Best Paper</span>}
        <span className="so-tag so-tag--year">{pub.year}</span>
      </div>
      <h3 className="so-pub__title">"{pub.title}"</h3>
      <div className="so-pub__byline">
        {pub.authors.map((a, i) => (
          <React.Fragment key={i}>
            {i > 0 && ', '}
            {a.includes('Orfanoudakis') ? <u>{a}</u> : a}
          </React.Fragment>
        ))}
        . <em>{pub.venue}</em>, {pub.year}.
      </div>
      <div className="so-pub__links">{pub.links.map(l => linkEls[l])}</div>
    </article>
  );
}

/* ---------- Selected publications (home) ---------- */
function SelectedPubs({ onSeeAll }) {
  const pubs = [
    {
      title: 'Scalable Reinforcement Learning for Large-Scale Coordination of Electric Vehicles Using Graph Neural Networks',
      authors: ['Stavros Orfanoudakis', 'Valentin Robu', 'E. M. Salazar', 'Peter Palensky', 'Pedro P. Vergara'],
      venue: 'Nature Communications Engineering',
      year: '2025', tags: ['published', 'editor', 'award'], links: ['external'],
    },
    {
      title: 'A Graph Neural Network-Enhanced Decision Transformer for Efficient Optimization in Dynamic Smart Charging Environments',
      authors: ['Stavros Orfanoudakis', 'Nanda Kishor Panda', 'Peter Palensky', 'Pedro P. Vergara'],
      venue: 'Energy and AI',
      year: '2026', tags: ['published'], links: ['external', 'arxiv'],
    },
    {
      title: 'Physics-Informed Reinforcement Learning for Large-Scale EV Smart Charging Considering Distribution Network Voltage Constraints',
      authors: ['Stavros Orfanoudakis', 'Frans A. Oliehoek', 'Peter Palensky', 'Pedro P. Vergara'],
      venue: 'Applied Energy (under review)',
      year: '2025', tags: ['preprint'], links: ['arxiv'],
      arxiv: 'https://arxiv.org/abs/2510.12335',
    },
    {
      title: 'EV2Gym: A Flexible V2G Simulator for EV Smart Charging Research and Benchmarking',
      authors: ['Stavros Orfanoudakis', 'Cesar Diaz-Londono', 'Yunus Emre Yılmaz', 'Peter Palensky', 'Pedro P. Vergara'],
      venue: 'IEEE Transactions on Intelligent Transportation Systems',
      year: '2024', tags: ['published'], links: ['external', 'arxiv'],
    },
  ];
  return (
    <section className="so-section">
      <div className="so-sectionhead so-sectionhead--split">
        <div>
          <Eyebrow>Selected publications</Eyebrow>
          <h2 className="so-h2">Research highlights</h2>
        </div>
        <button className="so-btn so-btn--ghost" onClick={onSeeAll}>See all publications →</button>
      </div>
      <div className="so-publist">
        {pubs.map((p, i) => <PubRow key={i} pub={p} />)}
      </div>
    </section>
  );
}

/* ---------- Publications page ---------- */
function PublicationsPage() {
  const underReview = [
    { title: 'Topology-Aware Graph Reinforcement Learning for Energy Storage Systems Optimal Dispatch in Distribution Networks', authors: ['S. Gao', 'Stavros Orfanoudakis', 'S. Hou', 'Peter Palensky', 'Pedro P. Vergara'], venue: 'Energy and AI (under review)', year: '2026', tags: ['preprint'], links: ['arxiv'] },
    { title: 'Flow Matching Entropy Regularization', authors: ['T. Gao', 'Stavros Orfanoudakis', 'N. Lin'], venue: 'ICML 2026 (under review)', year: '2026', tags: ['preprint'], links: ['arxiv'] },
    { title: 'SAVGO: Learning State–Action Value Geometry with Cosine Similarity for Continuous Control', authors: ['Stavros Orfanoudakis', 'Pedro P. Vergara'], venue: 'IJCAI (under review)', year: '2026', tags: ['preprint'], links: [] },
    { title: 'Physics-Informed Reinforcement Learning for Large-Scale EV Smart Charging Considering Distribution Network Voltage Constraints', authors: ['Stavros Orfanoudakis', 'Frans A. Oliehoek', 'Peter Palensky', 'Pedro P. Vergara'], venue: 'Applied Energy (2nd revision)', year: '2025', tags: ['preprint'], links: ['arxiv'] },
    { title: 'Optimizing Electric Vehicle Charging Using Large Language Models and Graph Neural Networks', authors: ['Stavros Orfanoudakis', 'Peter Palensky', 'Pedro P. Vergara'], venue: 'Intl. Journal of Electrical Power & Energy Systems (2nd revision)', year: '2025', tags: ['preprint'], links: ['arxiv'] },
  ];
  const journals = [
    { title: 'A Graph Neural Network-Enhanced Decision Transformer for Efficient Optimization in Dynamic Smart Charging Environments', authors: ['Stavros Orfanoudakis', 'Nanda Kishor Panda', 'Peter Palensky', 'Pedro P. Vergara'], venue: 'Energy and AI', year: '2026', tags: ['published'], links: ['external'] },
    { title: 'Physics-Informed Neural Network with Adaptive Activation for Power Flow', authors: ['Z. Kaseb', 'Stavros Orfanoudakis', 'Pedro P. Vergara', 'Peter Palensky'], venue: 'International Journal of Electrical Power & Energy Systems', year: '2026', tags: ['published'], links: ['external'] },
    { title: 'Open-Source Algorithms for Maximizing V2G Flexibility Based on Model Predictive Control', authors: ['C. Diaz-Londono*', 'Stavros Orfanoudakis*', 'Pedro P. Vergara', 'Peter Palensky', 'F. Ruiz', 'G. Gruosso'], venue: 'Electric Power Systems Research', year: '2026', tags: ['published'], links: ['external'] },
    { title: 'High-Temporal-Resolution Dataset of Uni-, Bidirectional, and Dynamic Electric Vehicle Charging Profiles', authors: ['M. Esser', 'Stavros Orfanoudakis', 'O. Homaee', 'V. Vahidinasab', 'Pedro P. Vergara', 'Peter Palensky'], venue: 'Nature Scientific Data', year: '2025', tags: ['published'], links: ['external'] },
    { title: 'Scalable Reinforcement Learning for Large-Scale Coordination of Electric Vehicles Using Graph Neural Networks', authors: ['Stavros Orfanoudakis', 'V. Robu', 'E. M. Salazar', 'Peter Palensky', 'Pedro P. Vergara'], venue: 'Nature Communications Engineering', year: '2025', tags: ['published', 'editor'], links: ['external'] },
    { title: 'EV2Gym: A Flexible V2G Simulator for EV Smart Charging Research and Benchmarking', authors: ['Stavros Orfanoudakis', 'Cesar Diaz-Londono', 'Yunus Emre Yılmaz', 'Peter Palensky', 'Pedro P. Vergara'], venue: 'IEEE Transactions on Intelligent Transportation Systems', year: '2024', tags: ['published'], links: ['external', 'arxiv'] },
    { title: 'A Comprehensive Analysis of Agent Factorization and Learning Algorithms in Multiagent Systems', authors: ['A. Kallinteris*', 'Stavros Orfanoudakis*', 'Georgios Chalkiadakis'], venue: 'Autonomous Agents and Multi-Agent Systems', year: '2024', tags: ['published'], links: ['external', 'pdf'] },
    { title: 'PowerFlowNet: Power Flow Approximation Using Message Passing Graph Neural Networks', authors: ['N. Lin*', 'Stavros Orfanoudakis*', 'N. O. Cardenas', 'J. S. Giraldo', 'Pedro P. Vergara'], venue: 'International Journal of Electrical Power & Energy Systems', year: '2024', tags: ['published'], links: ['external', 'arxiv'] },
    { title: 'Novel Meta-Learning Techniques for the Multiclass Image Classification Problem', authors: ['A. Vogiatzis*', 'Stavros Orfanoudakis*', 'Georgios Chalkiadakis', 'K. Moirogiorgou', 'M. Zervakis'], venue: 'Sensors', year: '2022', tags: ['published'], links: ['external'] },
  ];
  const conferences = [
    { title: 'Can AI Accelerate EV Dispatch?', authors: ['Stavros Orfanoudakis', 'B. Elders', 'Peter Palensky', 'Pedro P. Vergara'], venue: 'ECML PKDD · ML for Power Systems Workshop', year: '2026', tags: ['published'], links: ['external'] },
    { title: 'Safe Reinforcement Learning for V2G-Enabled Electric Vehicle Aggregators', authors: ['R. Eland', 'Stavros Orfanoudakis', 'Pedro P. Vergara'], venue: 'ECML PKDD · ML for Power Systems Workshop', year: '2026', tags: ['published'], links: ['external'] },
    { title: 'A Dynamic Prediction Tool for Vehicle-to-Grid Operation and Planning', authors: ['B. Ravanbach', 'E. Turhan', 'N. Wulff', 'Stavros Orfanoudakis', 'Pedro P. Vergara', 'Peter Palensky'], venue: 'IEEE MELECON', year: '2024', tags: ['published'], links: ['external'] },
    { title: 'Energy Storage Systems Planning in the Electric Distribution System Considering the Growth of PV Penetration', authors: ['N. A. Martinez', 'Stavros Orfanoudakis', 'Pedro P. Vergara', 'J. F. Franco'], venue: 'IEEE EEEIC', year: '2024', tags: ['published'], links: ['external'] },
    { title: 'Reinforcement Learning for Optimized EV Charging Through Power Setpoint Tracking', authors: ['E. Yunus', 'Stavros Orfanoudakis', 'Pedro P. Vergara'], venue: 'IEEE PES ISGT Europe', year: '2024', tags: ['published'], links: ['external'] },
    { title: 'A Novel Aggregation Framework for the Efficient Integration of Distributed Energy Resources in the Smart Grid', authors: ['Stavros Orfanoudakis', 'Georgios Chalkiadakis'], venue: "AAMAS '23", year: '2023', tags: ['published'], links: ['external'] },
    { title: 'The Performance Impact of Combining Agent Factorization with Different Learning Algorithms for Multiagent Coordination', authors: ['A. Kallinteris', 'Stavros Orfanoudakis', 'Georgios Chalkiadakis'], venue: 'SETN 2022', year: '2022', tags: ['published'], links: ['external'] },
    { title: 'Intelligent Robotic System for Urban Waste Recycling', authors: ['K. Moirogiorgou', 'F. Raptopoulos', 'G. Livanos', 'Stavros Orfanoudakis', 'M. Papadogiorgaki', 'M. Zervakis'], venue: 'IEEE IST 2022', year: '2022', tags: ['published'], links: ['external'] },
    { title: 'Aiming for Half Gets You to the Top: Winning PowerTAC 2020', authors: ['Stavros Orfanoudakis', 'S. Kontos', 'C. Akasiadis', 'Georgios Chalkiadakis'], venue: 'EUMAS 2021', year: '2021', tags: ['published'], links: ['external'] },
  ];
  const sections = [
    { key: 'under', title: 'Under review', eyebrow: 'Preprints', pubs: underReview },
    { key: 'journal', title: 'Journal publications', eyebrow: 'Peer-reviewed', pubs: journals },
    { key: 'conf', title: 'Conference publications', eyebrow: 'Peer-reviewed', pubs: conferences },
  ];
  return (
    <div className="so-page">
      <div className="so-pagehead">
        <Eyebrow>Archive</Eyebrow>
        <h1 className="so-h1">Publications</h1>
        <p className="so-lead">
          9 journal articles, 9 peer-reviewed conference papers, and 5 preprints under review.
          Underlined names are me; an asterisk denotes equal contribution.
        </p>
      </div>
      {sections.map(s => (
        <section key={s.key} className="so-year">
          <div className="so-year__head">
            <span className="so-year__num">{s.title}</span>
            <span className="so-year__count">{s.eyebrow} · {s.pubs.length}</span>
          </div>
          <div className="so-publist">{s.pubs.map((p, i) => <PubRow key={i} pub={p} />)}</div>
        </section>
      ))}
    </div>
  );
}

/* ---------- Projects page ---------- */
function ProjectsPage() {
  const repos = [
    { name: 'EV2Gym', stars: 201, forks: 47, year: 2024, desc: 'Python environment for large-scale EV smart-charging and V2G simulation. OpenAI Gym interface for reinforcement-learning research in the Vehicle-to-Grid domain.', thumb: '../../assets/ev2gym.png' },
    { name: 'EV-GNN', stars: 26, forks: 13, year: 2024, desc: 'Python package for graph-based reinforcement learning in EV charging. Accompanies the Nature Communications Engineering paper.', thumb: null },
    { name: 'DT4EVs', stars: 16, forks: 4, year: 2025, desc: 'Python package for offline EV charging optimization with decision transformers. Accompanies the Energy and AI paper.', thumb: null },
    { name: 'PowerFlowNet', stars: 71, forks: 12, year: 2023, desc: 'Python package for graph neural-network-based power flow approximation.', thumb: null },
  ];
  return (
    <div className="so-page">
      <div className="so-pagehead">
        <Eyebrow>Open source &amp; collaborations</Eyebrow>
        <h1 className="so-h1">Projects</h1>
        <p className="so-lead">Open-source tools from my research. All code is available on <a href="https://github.com/StavrosOrf" target="_blank">GitHub</a>.</p>
      </div>

      <div className="so-projects">
        {repos.map(r => (
          <article key={r.name} className="so-project">
            <a className="so-project__thumb" href={`https://github.com/StavrosOrf/${r.name}`} target="_blank">
              {r.thumb
                ? <img src={r.thumb} alt={r.name} />
                : <span className="so-project__placeholder">{r.name}</span>}
            </a>
            <div className="so-project__info">
              <div className="so-project__meta">
                <span className="so-tag so-tag--year">★ {r.stars}</span>
                <span className="so-tag so-tag--year">⑂ {r.forks}</span>
                <span className="so-tag so-tag--year">{r.year}</span>
              </div>
              <h2 className="so-h3">{r.name}</h2>
              <p>{r.desc}</p>
              <div className="so-project__links">
                <a href={`https://github.com/StavrosOrf/${r.name}`} target="_blank">Source ↗</a>
              </div>
            </div>
          </article>
        ))}

        <article className="so-project">
          <a className="so-project__thumb" href="https://drive2x.eu/" target="_blank">
            <img src="../../assets/drive2x.png" alt="DRIVE2X" />
          </a>
          <div className="so-project__info">
            <div className="so-project__meta">
              <span className="so-tag so-tag--year">EU Horizon</span>
              <span className="so-tag so-tag--year">2023 – 2027</span>
            </div>
            <h2 className="so-h3">DRIVE2X</h2>
            <p>EU Horizon consortium accelerating vehicle electrification via bi-directional smart charging. My PhD work at TU Delft contributed the large-scale coordination methods.</p>
            <div className="so-project__links"><a href="https://drive2x.eu/" target="_blank">Consortium site ↗</a></div>
          </div>
        </article>
      </div>
    </div>
  );
}

/* ---------- Teaching ---------- */
function TeachingPage() {
  const lectures = [
    { year: '2025', role: 'Guest Lecturer', course: 'Introduction to Deep Reinforcement Learning · AI Minor Program', where: 'TU Delft' },
    { year: '2025', role: 'Guest Lecturer', course: 'Tutorial on Reinforcement Learning · InnoCyPES Colloquium', where: 'TU Delft' },
    { year: '2021 – 2022', role: 'Teaching Assistant', course: 'Artificial Intelligence · Tutorials & Project Supervision', where: 'Technical University of Crete' },
    { year: '2021 – 2022', role: 'Teaching Assistant', course: 'Multiagent Systems · Tutorials & Project Supervision', where: 'Technical University of Crete' },
  ];
  const students = [
    { name: 'Elif Basokur', thesis: 'Short-term Power Imbalance Forecasting: Accuracy vs Interpretability', term: 'In progress', where: 'ETH Zürich' },
    { name: 'Eduardo Cuya', thesis: 'Global Vessel Routing Using Reinforcement Learning and Graph Neural Networks', term: 'In progress', where: 'MIT' },
    { name: 'Bibi van den Berg', thesis: 'Quantifying the Economic V2G Benefits: Cost-Optimal V2G Integration in Residential Settings', term: '2025', where: 'TU Delft' },
    { name: 'Ruben Eland', thesis: "Improving EV Aggregators' Workplace Charging: A Safe Reinforcement Learning Approach", term: '2025', where: 'TU Delft' },
    { name: 'Yunus Emre Yılmaz', thesis: 'EV Charging Strategies through Power Setpoint Tracking: A Reinforcement Learning Approach', term: '2024', where: 'TU Delft' },
    { name: 'Antonios Mastorakis', thesis: 'Development of a Competitive Autonomous Agent for Smart-Grid Energy Markets', term: '2022', where: 'Technical University of Crete' },
  ];
  return (
    <div className="so-page">
      <div className="so-pagehead">
        <Eyebrow>Supervision &amp; teaching</Eyebrow>
        <h1 className="so-h1">Teaching</h1>
        <p className="so-lead">Lectures, tutorials, and co-supervision of MSc theses across ETH Zürich, MIT, TU Delft, and the Technical University of Crete.</p>
      </div>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>Lectures &amp; tutorials</Eyebrow><h2 className="so-h2">Courses</h2></div>
        <div className="so-students">
          {lectures.map((l, i) => (
            <div key={i} className="so-student">
              <div className="so-student__l">
                <div className="so-student__name">{l.role} — {l.course.split('·')[0].trim()}</div>
                <div className="so-student__thesis"><em>{l.course.split('·')[1]?.trim()}</em></div>
              </div>
              <div className="so-student__r">
                <span className="so-meta">{l.where}</span>
                <span className="so-meta">{l.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>MSc thesis supervision</Eyebrow><h2 className="so-h2">Students</h2></div>
        <div className="so-students">
          {students.map((s, i) => (
            <div key={i} className="so-student">
              <div className="so-student__l">
                <div className="so-student__name">{s.name}</div>
                <div className="so-student__thesis"><em>{s.thesis}</em></div>
              </div>
              <div className="so-student__r">
                <span className="so-meta">{s.where}</span>
                <span className="so-meta">{s.term}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------- CV page ---------- */
function CVPage() {
  return (
    <div className="so-page">
      <div className="so-pagehead">
        <Eyebrow>Curriculum Vitae</Eyebrow>
        <h1 className="so-h1">CV</h1>
        <p className="so-lead">Updated April 2026 · <a href="#">Download PDF ↗</a></p>
      </div>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>Education</Eyebrow><h2 className="so-h2">Education</h2></div>
        <div className="so-students">
          <div className="so-student">
            <div className="so-student__l">
              <div className="so-student__name">PhD · Electrical Engineering, Mathematics &amp; Computer Science</div>
              <div className="so-student__thesis"><em>Scalable Reinforcement Learning for Optimal Electric Vehicle Charging</em> — Advisors: Dr. Pedro P. Vergara, Prof. Peter Palensky</div>
            </div>
            <div className="so-student__r"><span className="so-meta">TU Delft</span><span className="so-meta">2023 – 2026</span></div>
          </div>
          <div className="so-student">
            <div className="so-student__l">
              <div className="so-student__name">MSc · Electrical &amp; Computer Engineering</div>
              <div className="so-student__thesis"><em>A Novel Smart Grid Flexibility Aggregation Framework</em> — GPA 8.67/10 · Top 5%</div>
            </div>
            <div className="so-student__r"><span className="so-meta">TU Crete</span><span className="so-meta">2021 – 2022</span></div>
          </div>
          <div className="so-student">
            <div className="so-student__l">
              <div className="so-student__name">BSc &amp; MEng · Electrical &amp; Computer Engineering</div>
              <div className="so-student__thesis"><em>Developing an Autonomous Agent for Automated Electricity Trading</em> — GPA 8.08/10 · Top 10%</div>
            </div>
            <div className="so-student__r"><span className="so-meta">TU Crete</span><span className="so-meta">2015 – 2021</span></div>
          </div>
        </div>
      </section>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>Experience</Eyebrow><h2 className="so-h2">Research &amp; work</h2></div>
        <div className="so-students">
          <div className="so-student">
            <div className="so-student__l">
              <div className="so-student__name">Research Scholar</div>
              <div className="so-student__thesis"><em>Power Systems Laboratory · Applied LLMs and physics-informed ML to power system operation.</em></div>
            </div>
            <div className="so-student__r"><span className="so-meta">ETH Zürich</span><span className="so-meta">Feb 2026 –</span></div>
          </div>
          <div className="so-student">
            <div className="so-student__l">
              <div className="so-student__name">Visiting Researcher</div>
              <div className="so-student__thesis"><em>Center for Transportation &amp; Logistics · AI-based routing for electric truck fleets; co-organized industry event on Agentic AI.</em></div>
            </div>
            <div className="so-student__r"><span className="so-meta">MIT</span><span className="so-meta">Nov – Dec 2025</span></div>
          </div>
          <div className="so-student">
            <div className="so-student__l">
              <div className="so-student__name">PhD Researcher</div>
              <div className="so-student__thesis"><em>Intelligent Electrical Power Grids · Scalable RL, physics-informed learning, GNNs, transformers, LLMs and diffusion models for EV coordination. Contributed EV2Gym.</em></div>
            </div>
            <div className="so-student__r"><span className="so-meta">TU Delft</span><span className="so-meta">Apr 2023 – Mar 2026</span></div>
          </div>
          <div className="so-student">
            <div className="so-student__l">
              <div className="so-student__name">Graduate Research Associate</div>
              <div className="so-student__thesis"><em>EU-funded ANASA and i-FISH projects · RGB-D + NIR waste detection, underwater vision models, multi-agent RL for smart grids, PowerTAC broker.</em></div>
            </div>
            <div className="so-student__r"><span className="so-meta">TU Crete</span><span className="so-meta">Jul 2021 – Sep 2022</span></div>
          </div>
        </div>
      </section>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>Awards &amp; honours</Eyebrow><h2 className="so-h2">Recognition</h2></div>
        <div className="so-students">
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Best PowerWeb Paper + Best Energy Paper nominee (500 €)</div><div className="so-student__thesis"><em>For "Scalable RL for Large-Scale EV Coordination Using GNNs"</em></div></div><div className="so-student__r"><span className="so-meta">TU Delft</span><span className="so-meta">2026</span></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Editor's Choice 2025</div><div className="so-student__thesis"><em>Nature Communications Engineering</em></div></div><div className="so-student__r"><span className="so-meta">Nature</span><span className="so-meta">2025</span></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Distinction in International Competitions (500 €)</div><div className="so-student__thesis"><em>Greek State Scholarships Foundation</em></div></div><div className="so-student__r"><span className="so-meta">Greece</span><span className="so-meta">2022</span></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">2nd Place · PowerTAC Power Trading Agent Competition</div><div className="so-student__thesis"><em>Cologne, Germany</em></div></div><div className="so-student__r"><span className="so-meta"></span><span className="so-meta">2021</span></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">1st Place · PowerTAC Power Trading Agent Competition</div><div className="so-student__thesis"><em>Cologne, Germany</em></div></div><div className="so-student__r"><span className="so-meta"></span><span className="so-meta">2020</span></div></div>
        </div>
      </section>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>Grants &amp; funding</Eyebrow><h2 className="so-h2">Proposals</h2></div>
        <div className="so-students">
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">MIT Climate Project Action · post-doc grant <span className="so-tag so-tag--pre" style={{marginLeft:8}}>Under review</span></div><div className="so-student__thesis"><em>Multi-Objective RL for Community-Centric Data Center Operation and Planning</em></div></div><div className="so-student__r"><span className="so-meta">MIT</span><span className="so-meta">2026</span></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">EU Horizon Consortium Grant <span className="so-tag so-tag--pre" style={{marginLeft:8}}>Under review</span></div><div className="so-student__thesis"><em>A Pan-European Generative AI-based Digital Spine for Interoperable Smart Energy Systems</em></div></div><div className="so-student__r"><span className="so-meta">TU Delft</span><span className="so-meta">2026</span></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">NCCR Automation Fellowship <span className="so-tag so-tag--pub" style={{marginLeft:8}}>Granted ≈10 k€</span></div><div className="so-student__thesis"><em>Physics-Informed LLMs for Sequential Decision-Making in Power Systems</em></div></div><div className="so-student__r"><span className="so-meta">ETH Zürich</span><span className="so-meta">2025</span></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Hellenic Foundation for Research &amp; Innovation <span className="so-tag so-tag--pub" style={{marginLeft:8}}>Granted ≈200 k€</span></div><div className="so-student__thesis"><em>Deep-Rebayes: Deep GNNs-based, Bayes-Stable Strategic Decision-Making in Heterogeneous Multiagent Environments</em></div></div><div className="so-student__r"><span className="so-meta">TU Crete</span><span className="so-meta">2023</span></div></div>
        </div>
      </section>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>Service &amp; community</Eyebrow><h2 className="so-h2">Academic service</h2></div>
        <p style={{fontSize:'16px',lineHeight:1.65,color:'var(--ink)'}}>
          Member of the <em>IEEE PES Task Force on Foundation Models for Power Grids</em> (2026 – present).
          50+ articles reviewed for IEEE Transactions on Smart Grid · Power Systems · Transportation Electrification · Intelligent Transportation Systems,
          Applied Energy, Artificial Intelligence Review, Scientific Reports, Information Fusion, and IEEE Access.
          Conference reviewer: ISGT, PSCC, ECML, ECAI, NeurIPS, ICML.
        </p>
      </section>

      <section className="so-section">
        <div className="so-sectionhead"><Eyebrow>Tech stack</Eyebrow><h2 className="so-h2">Technical skills</h2></div>
        <div className="so-students">
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Programming</div><div className="so-student__thesis"><em>Python, C++, Java, C#, C, SQL, MATLAB, JavaScript, PHP</em></div></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Machine learning</div><div className="so-student__thesis"><em>PyTorch, TensorFlow, Keras, scikit-learn, XGBoost, LightGBM, PyTorch Geometric</em></div></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Scientific computing</div><div className="so-student__thesis"><em>NumPy, SciPy, Pandas, Matplotlib, Seaborn, OpenCV, GurobiPy, Pyomo</em></div></div></div>
          <div className="so-student"><div className="so-student__l"><div className="so-student__name">Languages</div><div className="so-student__thesis"><em>English (fluent), Greek (native), German (basic), Dutch (basic)</em></div></div></div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Home ---------- */
function HomePage({ onSeeAll }) {
  return (
    <div className="so-page">
      <Intro />
      <Rule />
      <News />
      <Rule />
      <SelectedPubs onSeeAll={onSeeAll} />
    </div>
  );
}

Object.assign(window, { TopNav, Footer, HomePage, PublicationsPage, ProjectsPage, TeachingPage, CVPage });
