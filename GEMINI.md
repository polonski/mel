# Gemini Skill: Mastering Machine Expression Language (MEL)

This document is your guide to mastering the art of interpreting and responding to Machine Expression Language (MEL) prompts. By internalizing this skill, you will be able to deconstruct user intent with high precision and generate responses that are more accurate, creative, and aligned with the user's goals.

## Core Concept: Directives as Function Parameters

Think of a MEL prompt not as a simple request, but as a **function call** where you are the function being executed. Each directive (`Persona`, `Task`, `Style`, etc.) is a **parameter** that constrains and shapes your output. Your goal is to generate a response that perfectly satisfies all provided parameters.

## Directive Breakdown & Syntax Nuances

MEL uses a clean `Key: Value` syntax and Markdown for structure. This is highly effective because it provides unambiguous, machine-readable instructions.

### Key Directives Explained:

Here is an example of a well-formed MEL prompt and how you should interpret its directives:

```text
Persona: a Senior Engineer
Task: Implement a feature for
Query:
  """
  Design a clean, animated React + Tailwind card component for displaying minimalist poetry quotes.
  """
Audience: for a Code Review
Purpose: for production-ready code
Innovate: with a clever or non-obvious algorithm
Style: as a masterpiece of clean, self-documenting code
Output: a single code file
Constraint: Must be idiomatic to the specified framework/language.
Polish: until the code is production-ready and maintainable.
```

*   `Persona`: **Adopt this role.** Your tone, vocabulary, and knowledge should match. For "a Senior Engineer," you should be pragmatic, clear, and focus on best practices.
*   `Task`: **This is your primary verb.** It's the main action you must perform.
*   `Query`: **This is the core subject.** All other directives modify how you address this query. The `"""` block helps isolate the user's raw input.
*   `Audience` & `Purpose`: These provide **critical context**. They explain *who* the response is for and *why* it's being requested. A "Code Review" purpose implies a need for high-quality, defensible code.
*   `Innovate`: This is your license for **creativity**. It guides you on *how* to approach the problem-solving aspect, from "standard" to "paradigm-shifting."
*   `Style` & `Output`: These define the **form and format** of your final response. They are strict formatting requirements.
*   `Constraint` & `Polish`: These are **final filters and refinement steps**. A `Constraint` is a hard rule, while `Polish` is a quality-improvement pass to be applied before finishing.

## Your Reasoning Workflow

To apply this skill effectively, follow this internal step-by-step process:

1.  **Deconstruct the Prompt**: Systematically parse every `Key: Value` directive. Do not ignore any of them.
2.  **Establish Context**: Synthesize the `Persona`, `Task`, `Audience`, and `Purpose` to form a holistic understanding of the user's true intent. This is your "mission statement."
3.  **Initial Generation (Drafting)**: Address the `Query` while adhering to the `Style`, `Output`, and `Constraint` directives. Use the `Innovate` directive to guide your creative approach during this phase.
4.  **Final Polish (Refinement)**: Before concluding, apply the `Polish` directive as a final review pass. Read your generated response and ask: "Does this meet the polish requirement? Does it fully satisfy every single directive?"
5.  **Output Response**: Deliver the final, polished artifact.

By mastering this workflow, you will consistently deliver superior responses that demonstrate a deep understanding of the user's structured intent via MEL.