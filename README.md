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

## VS Code Extension

MEL includes a VS Code extension that brings the prompt generator directly into your editor and integrates natively with Gemini Code Assist. 

To install and run the plugin locally:

1. Open the extension folder (the directory containing the extension's `package.json`) in VS Code.
2. Open the integrated terminal and run `npm install` to install the required dependencies.
3. Press `F5` on your keyboard. This will compile the extension and open a new VS Code "Extension Development Host" window.
4. In the new window, press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the Command Palette.
5. Type **"MEL: Open Prompt Generator"** and hit enter to launch the UI.

## LLM Wiki / Obsidian / Gemini Code Assist

The `mel` obsidian vault and its contents are the result of combining `karpathy` llm-wiki gist as a promprt to Gemini Pro 3.1 Preview , resulting in something like this after some prompts:

<img width="1601" height="914" alt="image" src="https://github.com/user-attachments/assets/5d6f7d5e-3a88-41d6-9db0-eab30ec426df" />

In this case, Karpathy's prompt https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f followed by:

```
You are now my LLM Wiki agent. Implement this exact idea file as my complete second brain. Guide me step-by-step: create the GEMINI.md schema file with full rules, set up index.md and log.md, define folder conventions, and show me the first ingest example. From now on, every interaction follows the schema. Instead of using the 'raw' folder to get started, use the 'docs' folder to injest new data.
```
(adapted from https://www.youtube.com/watch?v=sboNwYmH3AY )

```
I want you to be extremely thorough and follow the ethos and passion from injest the PURPOSE.md , VISION.md and EXAMPLES.md files. Also internalise what is happening in docs/index files.
From these sources, add content to the wiki. This content will contain the result of research on how purpose and vision of MEL will coalesce into an industry-defining tool, allowing developers to supercharge their prompts with MEL to make them more effective.
```

```
To continue with the ethos of MEL, based on your current understanding of the best methods for querying LLMs, query the wiki:
- Synthesize a wiki page outlining the ideal roadmap for MEL.
Lint the wiki to make sure all of our new concepts and entities are properly linked and that there are no orphaned pages.
- Synthesize a brief pitch I can use to explain to my team how MEL differs from DSPy and LangChain.
```

```
Query the wiki: What are the primary directives of MEL and how do they work together? Generate the response as a markdown table.
```





## Contributing
This project is actively evolving. Welcoming issues and pull requests that:
- Propose stronger or more effective slider options.
- Share beautiful or surprising LLM outputs produced with MEL.
- Suggest improvements to the UI/UX or the core syntax.
- Fix typos or improve clarity in the documentation.
