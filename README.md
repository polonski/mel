# MEL – Machine Expression Language

**A guided journey to craft powerful, directive-based LLM prompts.**

MEL has evolved. It's no longer a manual syntax but a powerful web-based tool that transforms a simple human query into a structured, highly effective prompt for any frontier LLM (like GPT-4, Claude 3, Gemini, etc.).

Through a guided, step-by-step journey, you define the `Persona`, `Intent`, `Purpose`, `Innovation`, `Style`, and `Output` of your request. The result is a crisp, machine-readable prompt that produces more consistent, creative, and high-quality results.

**→ [Open the MEL Prompt Generator](https://polonski.github.io/mel/)**

### Why MEL?

Prompting is the new programming, but most prompts are still messy and imprecise. MEL provides a clear, structured workflow to distill your intent into a set of powerful directives.

Key benefits:
- **Guided Journey**: The UI walks you through defining the core facets of your request, turning a vague idea into a precise plan.
- **Expressive Power**: With 10 levels for each of the 6 sliders, you have a vast creative canvas to specify exactly what you need.
- **Specialized Workflows**: Switch between modes like "General Prompting" and "Software Development" for a set of directives tailored to your specific domain.
- **Zero Dependencies**: It's a simple web page. You generate the prompt and copy-paste it into your favorite LLM.
- **Production-Ready Exports**: Go from creative exploration to production code in one click by exporting your refined prompt to frameworks like DSPy, LangChain, or as instructions for AI agents like OpenClaw.
- **Better Outputs**: The directive-based syntax is clear and unambiguous for the LLM, leading to higher-quality, more consistent results.

### The MEL Directive Syntax

MEL generates a prompt using a simple `Key: Value` format. This structure is highly readable for both humans and machines.

The core directives are:
- `Persona`: Defines the character, expertise, and voice of the AI assistant.
- `Task`: Specifies the primary action or goal for the LLM to perform.
- `Query`: Your original, natural-language request.
- `Examples`: Optional few-shot examples to guide the model's output format and style.
- `Exclusions`: Optional negative constraints specifying what to avoid.
- `Audience`: The intended audience for the response, shaping its tone and complexity.
- `Purpose`: The "why" behind your request, giving the LLM crucial context.
- `Innovate`: Instructs the LLM on the desired level of creativity and novelty.
- `Style`: Defines the aesthetic, tone, and formatting of the response.
- `Output`: Specifies the final structure and format (e.g., Markdown, JSON, code).
- `Constraint`: An optional, specific rule or limitation that refines the `Purpose`.
- `Polish`: A final instruction to refine the output to a high standard.

## Example Prompt

```text
Persona: a Senior Engineer
Task: Implement a feature for
Query:
  """
  Build a todo app in React with dark mode and drag & drop
  """
Examples:
  <examples>
  Input: A simple task description.
  Output: A React component that renders the task.
  </examples>
Exclusions:
  """
  - Do not use class components.
  - Do not use any state management libraries like Redux or MobX.
  """
Constraint: Must be idiomatic to the specified framework/language.
Audience: for a Code Review
Purpose: for production-ready code
Innovate: with a clever or non-obvious algorithm
Style: as a masterpiece of clean, self-documenting code
Output: a single code file
Polish: until the code is production-ready and maintainable.
```

## Table of contents


| File | Purpose |
| --- | --- |
| PURPOSE.md | Why MEL exists — the problem it solves |
| VISION.md | Longer-term aspirations and philosophy |
| EXAMPLES.md | Concrete prompts + what makes them effective |
| GEMINI.md | Example of an AI 'skill' derived from MEL |



## Usage

1.  Go to the **MEL Prompt Generator**.
2.  Enter your query in the text box.
3.  Move the six sliders to define the characteristics of your desired output.
4.  The MEL prompt will be generated in the output box.
5.  Copy the prompt to paste into your LLM of choice, or use the export buttons to generate code for DSPy/LangChain or instructions for AI agents like OpenClaw.

## Contributing
This project is actively evolving. Welcoming issues and pull requests that:
- Propose stronger or more effective slider options.
- Share beautiful or surprising LLM outputs produced with MEL.
- Suggest improvements to the UI/UX or the core syntax.
- Fix typos or improve clarity in the documentation.
