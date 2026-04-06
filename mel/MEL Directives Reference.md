---
tags: [reference, syntax, directives]
date_added: 2026-04-06
source: "[[Directive-Based Prompting]], [[docs/README.md]], [[GEMINI.md]]"
---
# MEL Directives Reference

[[Machine Expression Language (MEL)]] uses a strictly enforced `Key: Value` parameter syntax to guide LLM outputs. These directives act as a sequence of constraints, treating the prompt like a programmable function call.

| Directive | Function / Role | Example |
| :--- | :--- | :--- |
| **`Persona`** | Defines the character, expertise, and voice of the AI assistant. | "a Senior Engineer", "a Devil's Advocate" |
| **`Task`** | The primary action verb indicating the specific operation to perform. | "Critique and find flaws in", "Implement a feature for" |
| **`Query`** | The core subject or raw natural-language request (often in `"""` quotes). | `"""Build a todo app in React..."""` |
| **`Examples`** | Optional few-shot examples to guide the model's output format and style. | `<examples> Input: ... Output: ... </examples>` |
| **`Exclusions`** | Optional negative constraints specifying what the model should strictly avoid. | "- Do not use class components." |
| **`Audience`** | The intended recipient, shaping the tone and complexity of the response. | "for a Code Review", "for a 5-year-old" |
| **`Purpose`** | The "why" behind the request, providing crucial contextual drivers. | "to inform a high-level strategic decision" |
| **`Innovate`** | The license for creativity, guiding *how* the LLM approaches the problem. | "by challenging the fundamental assumptions" |
| **`Style`** | Defines the aesthetic, tone, and formatting of the generated text. | "as a masterpiece of clean, self-documenting code" |
| **`Output`** | Specifies the final structure and technical format of the response. | "a single code file", "as a textual diagram" |
| **`Constraint`** | A specific rule or limitation that refines the overall scope. | "Must be idiomatic to the specified framework." |
| **`Polish`** | A final instruction to refine the output to a high standard before completion. | "until the code is production-ready and maintainable." |

## How They Work Together
When processing a MEL prompt, an AI agent should evaluate the directives as a progressive pipeline. The `Persona`, `Task`, `Audience`, and `Purpose` set the contextual foundation. The `Query` is then processed through the creative lens of `Innovate`. Finally, the raw output is shaped by `Style` and `Output`, and strictly filtered through any `Exclusions`, `Constraint`, and `Polish` rules.