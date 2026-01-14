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
- **Zero Dependencies**: It's a simple web page. You generate the prompt and copy-paste it into your favorite LLM.
- **Better Outputs**: The directive-based syntax is clear and unambiguous for the LLM, leading to higher-quality, more consistent results.

### The MEL Directive Syntax

MEL generates a prompt using a simple `Key: Value` format. This structure is highly readable for both humans and machines.

The core directives are:
- `Persona`: Defines the character, expertise, and voice of the AI assistant.
- `Task`: Specifies the primary action or goal for the LLM to perform.
- `Query`: Your original, natural-language request.
- `Purpose`: The "why" behind your request, giving the LLM crucial context.
- `Innovate`: Instructs the LLM on the desired level of creativity and novelty.
- `Style`: Defines the aesthetic, tone, and formatting of the response.
- `Output`: Specifies the final structure and format (e.g., Markdown, JSON, code).
- `Polish`: A final instruction to refine the output to a high standard.
- `Constraint`: An optional, specific rule or limitation that refines the `Purpose`.

## Example Prompt

```text
Persona: a world-class Specialist
Task: Execute the following instructions for
Query:
  """
  Build a beautiful todo app in React with dark mode and drag & drop
  """
Purpose: to create a durable and valuable resource
Innovate: by introducing a surprising and clever element
Style: with an elegant, persuasive, and narrative flow
Output: as clean, commented, production-ready code
Polish: until it feels inevitable and delightful
```

## Table of contents


| File | Purpose |
| --- | --- |
| PURPOSE.md | Why MEL exists — the problem it solves |
| VISION.md | Longer-term aspirations and philosophy |
| EXAMPLES.md | Concrete prompts + what makes them effective |



## Usage

1.  Go to the **MEL Prompt Generator**.
2.  Enter your query in the text box.
3.  Move the six sliders to define the characteristics of your desired output.
4.  Copy the auto-generated prompt from the output box.
5.  Paste it into your LLM of choice.

## Contributing
This project is actively evolving. Welcoming issues and pull requests that:
- Propose stronger or more effective slider options.
- Share beautiful or surprising LLM outputs produced with MEL.
- Suggest improvements to the UI/UX or the core syntax.
- Fix typos or improve clarity in the documentation.
