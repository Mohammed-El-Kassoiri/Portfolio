export const portfolioProfile = {
  name: "Mohammed El Kassoiri",
  title: "AI Engineer & Data Scientist",
  specialization: "Machine Learning, Deep Learning, Computer Vision, and NLP",
  location: "Morocco",
  status: "Available for full-time AI and Data Science opportunities",
  internship:
    "Data Science & Machine Learning Intern at XAI Morocco (Aug 2025 – Oct 2025)",
  technologies: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "FastAPI",
    "Computer Vision",
    "NLP",
    "Remote Sensing",
    "Google Earth Engine",
    "React",
    "Next.js",
    "TypeScript",
  ],
  researchInterests: [
    "Agricultural AI",
    "Semantic Segmentation",
    "Satellite Image Analysis",
    "Multilingual NLP",
  ],
  projects: [
    "Automatic Agricultural Parcelization",
    "English to Darija Translation",
    "Medical-Diagnosis-COT-DeepSeek",
    "MY LAW Moroccan Legal RAG",
  ],
  cvUrl: "/Mohammed_el_kassoiri.pdf",
  contact: {
    email: "mohammed.kassoiri@gmail.com",
    linkedin: "https://linkedin.com/in/Mohammed-El-Kassoiri",
    github: "https://github.com/Mohammed-El-Kassoiri",
  },
} as const

export const chatbotQuickQuestions = [
  "Who am I?",
  "Where did I do my internship?",
  "What technologies do I use?",
  "What are my projects?",
  "What are my research interests?",
  "How can you contact me?",
  "Show my CV",
  "What is my specialization?",
  "What are my AI skills?",
] as const

export function getChatbotAnswer(question: string): string {
  const q = question.toLowerCase()

  if (q.includes("who") && q.includes("i")) {
    return `${portfolioProfile.name} is an ${portfolioProfile.title} focused on building intelligent systems with measurable impact.`
  }
  if (q.includes("intern")) {
    return portfolioProfile.internship
  }
  if (q.includes("technolog") || q.includes("skills")) {
    return `Core stack: ${portfolioProfile.technologies.slice(0, 8).join(", ")}.`
  }
  if (q.includes("project")) {
    return `Featured projects include ${portfolioProfile.projects.join(", ")}.`
  }
  if (q.includes("research")) {
    return `Research interests: ${portfolioProfile.researchInterests.join(", ")}.`
  }
  if (q.includes("contact")) {
    return `Reach out via email (${portfolioProfile.contact.email}), LinkedIn, or GitHub.`
  }
  if (q.includes("cv") || q.includes("resume")) {
    return `You can view the CV here: ${portfolioProfile.cvUrl}`
  }
  if (q.includes("specialization")) {
    return portfolioProfile.specialization
  }

  return "I can help with background, internship, projects, skills, research interests, and contact details."
}
