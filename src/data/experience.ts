import type { Experience } from "@/types/site";

export const experiences: Experience[] = [
  {
    company: "UNISUAM - Centro Universitário Augusto Motta",
    role: "Analista de Dados JR",
    period: "Jun 2024 - Presente",
    summary:
      "Desenvolvimento de APIs, consultas SQL, recursos em GCP/BigQuery e dashboards para apoiar integrações e decisões operacionais.",
    responsibilities: [
      "Criação de APIs RESTful em Python com Flask para integração de sistemas internos.",
      "Desenvolvimento e refinamento de consultas SQL complexas para relatórios gerenciais.",
      "Configuração e gerenciamento de recursos na GCP, com destaque para BigQuery.",
      "Criação de dashboards no Power BI para visualização de KPIs estratégicos."
    ],
    technologies: ["Python", "Flask", "SQL", "GCP", "BigQuery", "Power BI"],
    results: ["Redução de 30% no tempo de processamento de consultas SQL."]
  },
  {
    company: "Grupo Office Total",
    role: "Estágiario Técnico TI",
    period: "Fev 2024 - Jun 2024",
    summary:
      "Apoio a projetos de informatização e infraestrutura, com automações em Python, bancos de dados SQL e análises em Power BI.",
    responsibilities: [
      "Desenvolvimento e manutenção de projetos de informatização e infraestrutura.",
      "Administração de redes e apoio a soluções seguras para comunicação de dados.",
      "Automação de processos com Python.",
      "Gerenciamento de bancos de dados com SQL e análise de dados com Power BI e Excel."
    ],
    technologies: ["Python", "SQL", "Power BI", "Excel", "Redes"]
  }
];

export const education = {
  institution: "UNIFIN",
  course: "Análise e Desenvolvimento de Sistemas",
  period: "Set 2023 - Presente",
  summary:
    "Formação voltada a programação, bancos de dados, engenharia de software, segurança da informação e redes de computadores."
};
