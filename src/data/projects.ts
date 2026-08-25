import type { Project } from "@/types/site";

export const projects: Project[] = [
  {
    slug: "notebooks-vendidos-databricks",
    title: "Análise de Notebooks Vendidos",
    label: "Data Analytics & Databricks",
    summary:
      "Notebook publicado no Databricks para análise de vendas de notebooks, com foco em exploração, tratamento e leitura dos dados.",
    problem:
      "Dados de vendas precisam ser organizados e analisados para revelar padrões de desempenho e apoiar decisões comerciais.",
    solution:
      "Construção de um notebook analítico no Databricks, reunindo etapas de exploração e análise em um material público e navegável.",
    pipeline: ["Dataset de vendas", "Exploração", "Tratamento", "Análise", "Notebook publicado"],
    technologies: ["Databricks", "Python", "SQL", "Data Analytics"],
    results: [
      "Notebook público disponível para consulta.",
      "Projeto real demonstrando fluxo de análise em ambiente Databricks."
    ],
    links: {
      demo: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/2415211214737103/4263913259095206/2054107110425542/latest.html"
    },
    featured: true,
    status: "Publicado"
  },
  {
    slug: "dashboard-power-bi",
    title: "Dashboard publicado em Power BI",
    label: "Business Intelligence",
    summary:
      "Relatório público desenvolvido no Power BI para visualização interativa de dados e acompanhamento de indicadores.",
    problem:
      "Indicadores precisam ser apresentados de forma visual, navegável e acessível para facilitar análise e acompanhamento.",
    solution:
      "Criação e publicação de um relatório no Power BI, permitindo exploração interativa dos dados por meio de visualizações.",
    pipeline: ["Fonte de dados", "Modelagem", "Visualizações", "Publicação", "Relatório interativo"],
    technologies: ["Power BI", "Data Visualization", "BI"],
    results: [
      "Relatório público disponível via Power BI.",
      "Projeto real demonstrando construção e publicação de dashboards."
    ],
    links: {
      demo: "https://app.powerbi.com/view?r=eyJrIjoiNmFiY2FjYWEtYzkyMy00ZmFhLTg4ODEtOTk3NjFjNjdjY2E1IiwidCI6ImMyMjI5YzM2LTQ5ZDgtNDBlOC1iZGJlLWU2MzYwZGI2ODA4ZCJ9"
    },
    featured: true,
    status: "Publicado"
  },
  {
    slug: "apis-rest-integracao-sistemas",
    title: "APIs REST para integração de sistemas",
    label: "Backend & AI Integration",
    summary:
      "APIs em Python para conectar sistemas internos, padronizar fluxos de dados e criar uma base pronta para integrações inteligentes.",
    problem:
      "Sistemas internos precisavam trocar dados com mais consistência, menor intervenção manual e melhor rastreabilidade operacional.",
    solution:
      "Criação de endpoints RESTful em Python com Flask, apoiando integrações entre sistemas e facilitando o consumo dos dados por outras aplicações.",
    pipeline: ["Input de sistemas internos", "Validação", "API REST", "Integração", "Consumo por aplicações"],
    technologies: ["Python", "Flask", "REST APIs", "SQL"],
    results: [
      "Fluxos de dados mais organizados para integrações internas.",
      "Base técnica reaproveitável para futuras integrações com modelos e automações."
    ],
    featured: true,
    status: "Case profissional"
  },
  {
    slug: "otimizacao-sql-relatorios",
    title: "Otimização SQL e relatórios gerenciais",
    label: "Data Engineering",
    summary:
      "Refino de consultas SQL e estruturação de dados para relatórios, dashboards e integrações com foco em performance.",
    problem:
      "Consultas complexas e relatórios gerenciais exigiam mais performance para apoiar análises recorrentes e integrações.",
    solution:
      "Revisão de queries, organização de regras de negócio e melhoria do fluxo de consulta para reduzir tempo de processamento.",
    pipeline: ["Fontes de dados", "SQL", "Tratamento", "Relatórios", "Dashboards"],
    technologies: ["SQL", "BigQuery", "Power BI", "Excel"],
    metrics: ["Redução de 30% no tempo de processamento de consultas."],
    results: [
      "Relatórios gerenciais mais rápidos.",
      "Dados mais acessíveis para acompanhamento de KPIs."
    ],
    featured: true,
    status: "Case profissional"
  },
  {
    slug: "automacoes-gcp-bigquery",
    title: "Automações com GCP e BigQuery",
    label: "Cloud & Data",
    summary:
      "Configuração de recursos em nuvem e automações para reduzir tarefas repetitivas em rotinas orientadas a dados.",
    problem:
      "Operações repetitivas em dados consumiam tempo e dificultavam análises em escala.",
    solution:
      "Uso de recursos da Google Cloud Platform e BigQuery para apoiar automações, consultas e análises em volume maior.",
    pipeline: ["Dados operacionais", "BigQuery", "Rotinas automatizadas", "Análise", "Power BI"],
    technologies: ["GCP", "BigQuery", "SQL", "Power BI"],
    results: [
      "Apoio a análises em larga escala.",
      "Automação de rotinas repetitivas relacionadas a dados."
    ],
    featured: true,
    status: "Case profissional"
  },
  {
    slug: "computer-vision-lab",
    title: "Computer Vision Lab",
    label: "AI & Computer Vision",
    summary:
      "Espaço preparado para documentar experimentos e aplicações de visão computacional com dados, inferência e integração.",
    problem:
      "Projetos de visão computacional precisam ser apresentados como soluções completas, indo além da execução isolada de um modelo.",
    solution:
      "Estrutura de case study para registrar dataset, preparação, abordagem, inferência, limitações e próximos passos conforme os projetos forem publicados.",
    pipeline: ["Imagem ou vídeo", "Preprocessing", "Modelo", "Inferência", "API ou aplicação"],
    technologies: ["Python", "Computer Vision", "Machine Learning"],
    results: [
      "Estrutura pronta para receber projetos reais sem inventar métricas ou tecnologias."
    ],
    status: "Em documentação"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
