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
    title: "Football Vision Analytics",
    label: "AI & Computer Vision",
    summary:
      "Visão computacional aplicada à análise de partidas de futebol.",
    description:
      "Football Vision Analytics é um projeto de visão computacional desenvolvido em Python para processar vídeos de partidas de futebol. O pipeline detecta elementos da partida, rastreia jogadores, classifica atletas por equipe, transforma posições da câmera para uma representação do campo e extrai informações como estimativa de velocidade.",
    problem:
      "Vídeos de partidas de futebol exigem processamento automatizado para identificar elementos da partida e transformar movimentos em informações analisáveis.",
    solution:
      "Pipeline em Python que processa os frames, detecta e rastreia elementos da partida, classifica equipes, projeta posições no campo e estima velocidades.",
    pipeline: [
      "Vídeo de partida",
      "Leitura frame a frame",
      "Detecção com YOLO",
      "Tracking e pós-processamento",
      "Classificação, perspectiva e análise",
      "Anotação visual",
      "Vídeo processado"
    ],
    technologies: ["Python", "OpenCV", "YOLO", "Ultralytics", "ByteTrack", "PyTorch", "Supervision"],
    results: [
      "Detecção de jogadores, goleiros, árbitros e bola.",
      "Rastreamento de jogadores com ByteTrack.",
      "Rastreamento da bola.",
      "Classificação dos jogadores por equipe.",
      "Transformação de perspectiva.",
      "Visualização em radar/campo 2D.",
      "Estimativa de velocidade dos jogadores em km/h.",
      "Geração de vídeo processado com anotações."
    ],
    metrics: [
      "Distância percorrida por jogador.",
      "Posse de bola.",
      "Mapas de calor.",
      "Estatísticas agregadas.",
      "Exportação CSV/JSON."
    ],
    metricsTitle: "Roadmap",
    videos: [
      {
        title: "Player Detection & Tracking",
        description:
          "Detecção e rastreamento de jogadores durante uma partida utilizando Computer Vision. O pipeline processa os frames do vídeo e acompanha os objetos detectados ao longo da sequência.",
        embedUrl: "https://www.youtube.com/embed/YyxMamOyAW8"
      },
      {
        title: "Player Tracking & Speed Estimation",
        description:
          "Demonstração do rastreamento dos jogadores e da estimativa de velocidade individual em km/h a partir da movimentação observada durante a partida.",
        embedUrl: "https://www.youtube.com/embed/iZhb7wF2aXc"
      }
    ],
    links: {
      github: "https://github.com/Markson22/Football-Vision-Analytics"
    },
    status: "Publicado"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
