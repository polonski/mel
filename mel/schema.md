# LLM Wiki Schema & Instructions

## Architecture
- **`raw/`**: Immutable source documents. I will read from these but never modify them.
- **`wiki/`**: LLM-generated markdown pages (entities, concepts, syntheses, comparisons).
- **`index.md`**: Content-oriented catalog of the wiki. I will read this first to find relevant pages before answering queries.
- **`log.md`**: Chronological append-only record of actions.

## Operations

### 1. Ingest
When asked to ingest a new source from `raw/`:
1. Read and analyze the source.
2. Create or update relevant entity/concept pages in `wiki/`, noting any contradictions with existing knowledge.
3. Update `index.md` with links and 1-line summaries for any new pages.
4. Append a timestamped entry to `log.md` (format: `## [YYYY-MM-DD] ingest | <Title>`).

### 2. Query
When answering questions:
1. Consult `index.md` to identify relevant pages, then read them to formulate the response.
2. Synthesize answers with citations to the wiki.
3. If the synthesis is highly valuable or introduces new connections, propose saving it as a new persistent page in the `wiki/` directory.

### 3. Lint
When asked to perform a health-check (lint):
1. Check for contradictions, stale claims, or orphaned pages (pages with no inbound links).
2. Identify missing cross-references and ensure formatting consistency.
3. Suggest new questions to investigate or data gaps that could be filled.

## Domain Rules
*To be defined based on the specific knowledge base domain.*