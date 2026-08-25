# Markson César | AI Engineer

Portfolio pessoal reconstruído com Next.js, TypeScript e Tailwind CSS para posicionar Markson César como AI Engineer, com base técnica em Python, APIs, dados, SQL, BigQuery, GCP e automação.

## Preview

O projeto abre direto na experiência principal do portfolio: hero, sobre, projetos, experiência, stack e contato.

```bash
npm run dev
```

Depois acesse `http://localhost:3000`.

## Stack

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- Componentes no padrão shadcn/ui
- Lucide Icons
- next/font
- ESLint

## Estrutura

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── projects/[slug]/page.tsx
├── components/
│   ├── layout/
│   ├── projects/
│   ├── sections/
│   └── ui/
├── data/
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
├── lib/
└── types/
```

## Como Executar

```bash
npm install
npm run dev
npm run build
```

## Conteúdo

Os dados editáveis ficam em `src/data`:

- `profile.ts`: nome, links, email, posicionamento e texto de apresentação.
- `projects.ts`: cases, tecnologias, pipeline, resultados e páginas individuais.
- `experience.ts`: experiências profissionais e formação.
- `skills.ts`: stack organizada por domínio, sem porcentagens.

## Deploy

O projeto está preparado para deploy na Vercel conectado ao GitHub. Use o comando de build padrão:

```bash
npm run build
```

## Legado

O diretório `kards-master/` foi preservado como referência do portfolio anterior e para manter assets originais. A nova aplicação roda a partir da raiz do repositório.
