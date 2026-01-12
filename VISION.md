# VISION – Where MEL wants to go

MEL v1.0 is deliberately minimal — just a handful of conventions born from real conversations.

1. Use MEL-style thinking (or our expressions) during prototyping and when crafting initial signatures/instructions inside DSPy.
2. Once the task stabilizes → port the core logic into DSPy modules + write a proper metric → let optimizers (MIPROv2, GEPA 2025) polish it beyond what manual phrasing can achieve.
3. Keep MEL-style aesthetic/role modifiers inside DSPy signatures for tasks where output style matters (reports, UI copy, creative agents).

The longer-term vision contains several (optional) evolutionary directions:

## Possible future layers (post v1.0)

1. **Named building blocks**  
   A small standard library of especially powerful expressions  
   ```text
   *mel.role.polymath*
   *mel.enhancer.hidden-symmetry*
   *mel.polish.crystalline*

2. **Quantitative hints (very optional)**
    *metric:novelty=8/10*
    *metric:readability=9.5/10*

3. **Output shaping vocabulary**
Dedicated expressions for controlling format more precisely
    *shape:two-column-comparison-table*
    *shape:step-by-step-with-emoji-bullets*

4. **Composition & reuse**
Ability to reference other MEL snippets
    *include:mel.preset.coding-poet*

5. **MEL → structured output compilers**
Tiny scripts that turn MEL into:
- DSPy signatures + instructions
- OpenAI JSON schema
- Claude XML tags
- Gemini function calling stubs

6. **Community expression gallery**
A growing collection of field-specific MEL patterns
(legal drafting, fiction writing, systems design, math proofs, UI critique, …)

## Core philosophy that will not change

- MEL should remain readable as plain English even to non-technical people
- The number of magic symbols should stay extremely low (*, {} and possibly ())
- It should never feel like yet another programming language
- Aesthetic pleasure and surprise should be first-class goals — not afterthoughts

## MEL is not trying to become DSPy, Guidance, LMQL or Jsonformer.
It wants to be the beautiful, lightweight, human layer that lives above all of them — and sometimes makes them unnecessary.

Created January 2026 · Michał