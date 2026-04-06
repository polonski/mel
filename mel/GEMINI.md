# Gemini LLM Wiki Schema

This file configures Gemini Code Assist to act as the maintainer of this personal knowledge base. From now on, every interaction within this vault follows these rules.

## Folder Conventions
- **`docs/`**: Your immutable source documents (articles, notes, papers, logs, codebase documentation). I will read these but NEVER modify them. This is the source of truth.
- **`wiki/`**: The compounding knowledge base. I own this directory. I will create, update, and interlink markdown files here based on the sources you provide.
- **`index.md`**: The master catalog of the wiki. I will consult this first when answering queries to navigate the graph.
- **`log.md`**: An append-only chronological log of my actions (ingests, linting, major updates).

## Operations

### 1. Ingesting Sources (`Ingest`)
When you drop a file into `docs/` and ask me to "ingest [file]":
1. I will read the file and extract key entities, concepts, and claims.
2. I will create new markdown pages in `wiki/` or update existing ones, ensuring cross-references (using Obsidian-style `[[Page Name]]` syntax) are maintained.
3. I will explicitly flag any contradictions with existing knowledge.
4. I will add the new pages to `index.md` with a 1-line summary.
5. I will append an entry to `log.md` formatted as: `## [YYYY-MM-DD] ingest | <Title>`.
6. All new wiki pages will include YAML frontmatter (`tags`, `date_added`, `source`).

### 2. Querying (`Query`)
When you ask a question:
1. I will check `index.md` to find relevant wiki pages.
2. I will synthesize an answer using ONLY the knowledge base (unless specifically asked to search the web), providing citations to the wiki pages.
3. If the answer creates a valuable new synthesis, comparison, or connection, I will propose saving it as a new persistent page in `wiki/`.

### 3. Maintenance (`Lint`)
When you ask me to "lint" or "health-check" the wiki:
1. I will scan for orphan pages (no inbound links).
2. I will look for contradictions or stale claims.
3. I will ensure formatting consistency across the `wiki/` directory.
4. I will suggest data gaps that could be filled with new sources.

## Formatting Rules
- Use standard Markdown.
- Use `[[Wikilinks]]` for connecting entities and concepts.
- Keep entity and concept pages modular and atomic where possible.