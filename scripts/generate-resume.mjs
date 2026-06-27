import { jsPDF } from 'jspdf'

const doc = new jsPDF({ unit: 'mm', format: 'a4' })

const PAGE_W = 210
const PAGE_H = 297
const MARGIN = 20
const CONTENT_W = PAGE_W - MARGIN * 2

let y = MARGIN

function headerLeft(text, size = 10, style = 'normal', color = '#333') {
  doc.setFont('Helvetica', style)
  doc.setFontSize(size)
  doc.setTextColor(color)
  doc.text(text, MARGIN, y)
}

function headerRight(text, size = 8, style = 'normal', color = '#555') {
  doc.setFont('Helvetica', style)
  doc.setFontSize(size)
  doc.setTextColor(color)
  doc.text(text, PAGE_W - MARGIN, y, { align: 'right' })
}

function sectionTitle(text) {
  y += 6
  doc.setFont('Helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor('#1a1a1a')
  doc.text(text, MARGIN, y)
  y += 1.5
  doc.setDrawColor('#00b894')
  doc.setLineWidth(0.8)
  doc.line(MARGIN, y, PAGE_W - MARGIN, y)
  y += 4
}

function bodyText(text, size = 9, color = '#444', indent = 0) {
  doc.setFont('Helvetica', 'normal')
  doc.setFontSize(size)
  doc.setTextColor(color)
  const lines = doc.splitTextToSize(text, CONTENT_W - indent)
  for (const line of lines) {
    if (y > PAGE_H - 25) {
      doc.addPage()
      y = MARGIN
    }
    doc.text(line, MARGIN + indent, y)
    y += 4.5
  }
}

function bullet(text, size = 9, color = '#444') {
  doc.setFont('Helvetica', 'normal')
  doc.setFontSize(size)
  doc.setTextColor(color)
  const lines = doc.splitTextToSize(text, CONTENT_W - 7)
  for (const line of lines) {
    if (y > PAGE_H - 25) {
      doc.addPage()
      y = MARGIN
    }
    doc.text(`• ${line}`, MARGIN + 3, y)
    y += 4.5
  }
}

// ── HEADER ──────────────────────────────────────────
doc.setFont('Helvetica', 'bold')
doc.setFontSize(22)
doc.setTextColor('#1a1a1a')
doc.text('Duke Ujiro Onwamano', MARGIN, y)
y += 7

doc.setFont('Helvetica', 'normal')
doc.setFontSize(10)
doc.setTextColor('#00b894')
doc.text('Software Developer / Architect', MARGIN, y)
y += 6

doc.setFont('Helvetica', 'normal')
doc.setFontSize(8.5)
doc.setTextColor('#555')
const contactLine = 'ujiroduke1@gmail.com  |  +234 904 079 1821  |  Port Harcourt, Nigeria'
doc.text(contactLine, MARGIN, y)
y += 4
doc.setTextColor('#888')
doc.text('github.com/DukeeTheProgrammer  |  x.com/dukeethedev', MARGIN, y)
y += 8

// ── PROFESSIONAL SUMMARY ────────────────────────────
sectionTitle('Professional Summary')

bodyText(
  'Full-stack software developer and architect with a passion for building elegant, ' +
  'performant applications across the entire technology stack. Experienced in designing ' +
  'scalable system architectures, developing responsive user interfaces with modern ' +
  'JavaScript frameworks, and implementing robust backend services. Adept at translating ' +
  'complex business requirements into clean, maintainable code while championing best ' +
  'practices in software design, testing, and DevOps.',
  9, '#444'
)

// ── SKILLS ──────────────────────────────────────────
sectionTitle('Technical Skills')

const skillsData = [
  ['Frontend', 'React, TypeScript, JavaScript, HTML/CSS, Tailwind CSS'],
  ['Backend', 'Node.js, Python, REST APIs, PostgreSQL, MongoDB'],
  ['DevOps', 'Docker, Git, Linux, CI/CD, Cloud (AWS/GCP)'],
  ['Architecture', 'System Design, Microservices, API Design, Design Patterns'],
]

for (const [area, skills] of skillsData) {
  if (y > PAGE_H - 25) { doc.addPage(); y = MARGIN }
  doc.setFont('Helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor('#1a1a1a')
  doc.text(`${area}:`, MARGIN, y)
  doc.setFont('Helvetica', 'normal')
  doc.setTextColor('#444')
  doc.text(skills, MARGIN + 22, y)
  y += 5
}

// ── EXPERIENCE ──────────────────────────────────────
sectionTitle('Experience')

// Role 1
doc.setFont('Helvetica', 'bold')
doc.setFontSize(9.5)
doc.setTextColor('#1a1a1a')
doc.text('Software Developer / Architect', MARGIN, y)
doc.setFont('Helvetica', 'normal')
doc.setFontSize(8.5)
doc.setTextColor('#00b894')
doc.text('Freelance / Self-Employed', MARGIN + 62, y)
doc.setTextColor('#888')
doc.text('2024 – Present', PAGE_W - MARGIN, y, { align: 'right' })
y += 5
doc.setTextColor('#555')
bullet('Architected and built full-stack web applications from conception to deployment, delivering scalable solutions for diverse client requirements.')
bullet('Designed and implemented RESTful APIs and database schemas, optimizing query performance and ensuring data integrity across PostgreSQL and MongoDB systems.')
bullet('Developed responsive, accessible front-end interfaces using React and TypeScript, achieving measurable improvements in user engagement and page load performance.')
bullet('Established CI/CD pipelines and containerized deployments with Docker, reducing release cycles and improving development workflow reliability.')

y += 3

// ── EDUCATION ───────────────────────────────────────
sectionTitle('Education')

doc.setFont('Helvetica', 'bold')
doc.setFontSize(9.5)
doc.setTextColor('#1a1a1a')
doc.text('B.S. in Computer Science', MARGIN, y)
doc.setFont('Helvetica', 'normal')
doc.setFontSize(8.5)
doc.setTextColor('#00b894')
doc.text('University of Port Harcourt (Uniport)', MARGIN + 48, y)
doc.setTextColor('#888')
doc.text('2024 – Present', PAGE_W - MARGIN, y, { align: 'right' })
y += 5
doc.setTextColor('#555')
bodyText('Pursuing a comprehensive degree in Computer Science with focus on software engineering, data structures, algorithms, and distributed systems.', 9, '#555')

// ── CERTIFICATIONS & ACHIEVEMENTS ──────────────────
sectionTitle('Certifications & Achievements')

bullet('Active open-source contributor with a commitment to clean code, documentation, and community-driven development.')
bullet('Continuous learner, staying current with emerging technologies, frameworks, and architectural patterns through hands-on projects and research.')
bullet('Strong advocate for developer experience, tooling optimization, and automated workflows to maximize productivity and code quality.')

// ── FOOTER ──────────────────────────────────────────
y = PAGE_H - 12
doc.setFont('Helvetica', 'normal')
doc.setFontSize(7)
doc.setTextColor('#bbb')
doc.text('Duke Ujiro Onwamano  •  ujiroduke1@gmail.com  •  github.com/DukeeTheProgrammer', PAGE_W / 2, y, { align: 'center' })

doc.save('public/resume.pdf')
console.log('resume.pdf generated successfully')
