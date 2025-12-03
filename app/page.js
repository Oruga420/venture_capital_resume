'use client';

const contact = {
  phone: '+1 437 243 3693',
  email: 'alex@seshwithfriends.org',
  linkedin: 'linkedin.com/in/amorac',
  website: 'eloruga.com',
  github: 'github.com/Oruga420',
};

const summary =
  'AI Solutions Architect and Community Leader focused on pairing GenAI systems with adoption. Grew enterprise AI usage from 47% to 97% and delivered over $1M in savings through automation. Combines expertise in GenAI, GCP, and Salesforce with a commitment to upskilling teams and communities to shape the next generation of entrepreneurial talent.';

const expertise = [
  'Generative AI',
  'Agentic Workflows',
  'LLMs (OpenAI, Anthropic, Gemini)',
  'RAG & LangChain',
  'Google Cloud Platform',
  'AWS',
  'Vercel & Next.js',
  'Salesforce (Developer/Admin)',
  'Agentforce & Marketing Cloud',
  'AI Upskilling',
  'Community Leadership',
  'Change Management',
  'System Architecture',
  'Agile / PMP',
];

const experiences = [
  {
    role: 'AI Solutions Architect',
    company: 'Assent',
    location: 'Canada',
    period: 'February 2025 - Present',
    bullets: [
      'Executed an upskilling and adoption plan that increased internal AI usage from 47% to 97%.',
      'Designed agentic workflows and GenAI automations replacing over 20,000 manual hours and saving $1M+.',
      'Built a secure GenAI stack across GCP, AWS, and Vercel with governance for auditability and safety.',
    ],
  },
  {
    role: 'Founder & AI Solutions Architect',
    company: 'Sesh (Ai Solutions)',
    location: 'Toronto, Ontario',
    period: 'November 2021 - Present',
    bullets: [
      'Lead a community of 100+ members with free classes, live tutorials, and mentorship for AI adoption.',
      'Run webinars and workshops for groups like Latinas in Tech and Somos Latinos in Tech Ottawa.',
      'Architected 120+ GenAI applications and 90+ chatbots to automate small-business operations.',
    ],
  },
  {
    role: 'Salesforce Consultant',
    company: 'Online Business Systems',
    location: 'Toronto, Ontario',
    period: 'June 2024 - November 2024',
    bullets: [
      'Deployed Salesforce Agentforce while aligning technical teams and business stakeholders.',
      'Created reusable patterns and documentation to upskill client teams for ongoing AI assistant upkeep.',
    ],
  },
  {
    role: 'Salesforce Manager',
    company: 'Globalization Partners',
    location: 'Ontario, Canada',
    period: 'November 2018 - November 2023',
    bullets: [
      'Managed a 1,000+ license Salesforce environment and launched the internal "GIA" chatbot.',
      'Pioneered GenAI workflows for Jira and development to cultivate continuous improvement.',
    ],
  },
];

const education = [
  {
    degree: 'IngenierA-a en Sistemas (Systems Engineering)',
    school: 'Universidad Marista de MAcrida',
    period: '2004 - 2007',
  },
];

export default function Page() {
  const handlePrint = () => window.print();

  return (
    <main className="page">
      <div className="aurora">
        <span className="orb" style={{ top: '16%', left: '-8%' }} />
        <span className="orb two" />
      </div>

      <div className="toolbar">
        <button className="btn" onClick={handlePrint}>
          Download PDF
        </button>
      </div>

      <section className="glass header">
        <div className="title-block">
          <h1 className="name">Alejandro De La Mora</h1>
          <p className="role">AI Solutions Architect · Community Leader</p>
          <p className="summary">{summary}</p>
        </div>
        <div className="contact-card glass">
          <h3 className="contact-title">Contact</h3>
          <div className="contact-item">
            <span>Phone</span> {contact.phone}
          </div>
          <div className="contact-item">
            <span>Email</span> {contact.email}
          </div>
          <div className="contact-item">
            <span>LinkedIn</span> {contact.linkedin}
          </div>
          <div className="contact-item">
            <span>Website</span> {contact.website}
          </div>
          <div className="contact-item">
            <span>GitHub</span> {contact.github}
          </div>
        </div>
      </section>

      <section className="glass section">
        <h2 className="section-title">Areas of Expertise</h2>
        <div className="pill-grid">
          {expertise.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="glass section">
        <h2 className="section-title">Work Experience</h2>
        <div className="grid-two">
          {experiences.map((exp) => (
            <article key={exp.role + exp.company} className="card">
              <div className="card-header">
                <span>{exp.role} | {exp.company}</span>
                <span className="muted">{exp.period}</span>
              </div>
              <div className="card-meta">
                <span>{exp.location}</span>
              </div>
              <ul className="list">
                {exp.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="glass section">
        <h2 className="section-title">Education</h2>
        <div className="education">
          {education.map((item) => (
            <div key={item.degree} className="edu-item">
              <p className="edu-degree">{item.degree}</p>
              <p className="muted">{item.school} · {item.period}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
