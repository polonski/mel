---
tags: [syntax, methodology, prompt-engineering, examples]
date_added: 2026-04-06
source: "[[EXAMPLES.md]], [[GEMINI.md]]"
---
# Directive-Based Prompting

The core syntax of [[Machine Expression Language (MEL)]] revolves around a clean, unambiguous `Key: Value` Markdown structure. This syntax treats LLM prompting like a function call, where each directive is a strictly enforced parameter constraining and shaping the model's output.

## Core Directives
- **`Persona`**: Adopts a specific role, tone, and vocabulary (e.g., "a Senior Engineer", "a Visionary Thinker", or "a Devil's Advocate").
- **`Task`**: The primary action verb indicating the specific operation.
- **`Query`**: The core subject or raw natural-language request, often isolated in `"""` block quotes.
- **`Audience` & `Purpose`**: Contextual drivers explaining *who* the response is for and *why* it matters (e.g., "to inform a high-level strategic decision").
- **`Innovate`**: The license for creativity, guiding the LLM on how to approach problem-solving (e.g., "by challenging the fundamental assumptions" or "by generating a paradigm-shifting insight").
- **`Style` & `Output`**: Strict formatting and aesthetic requirements (e.g., "as a textual diagram plus a bullet-point list of trade-offs").
- **`Constraint` & `Polish`**: Final filters and quality-improvement passes applied before finishing the output (e.g., "until it feels inevitable and delightful").

## Example: Software Architecture Critique
```text
Persona: a Devil's Advocate
Task: Critique and find flaws in
Query:
  """
  Sketch a high-level architecture for a globally replicated personal knowledge base that uses event sourcing and CRDTs for local-first operation and graceful network partition survival.
  """
Purpose: to inform a high-level strategic decision
Innovate: by challenging the fundamental assumptions
Style: with precise, technical, domain-specific language
Output: as a textual diagram (e.g., Mermaid or DOT syntax) plus a bullet-point list of trade-offs
Polish: until it feels inevitable and delightful
```