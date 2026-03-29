# MEL Prompt Generator

This extension provides a Webview UI to generate MEL prompts and send them directly to Gemini Code Assist.

## Features

- Interactive Prompt Generation UI.
- Direct integration with Gemini Code Assist via the VS Code chat view.

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS).
2. Search for and execute the **Open MEL Prompt Generator** command.
3. Create your prompt within the Webview and push it!

## Publish to marketplace
Run the following steps in your terminal from the project ./docs/ directory to publish it to the Marketplace:

- Install dependencies:
```bash
npm install
```
- Install the VS Code Extension CLI globally:
```bash
npm install -g @vscode/vsce
```
- Verify the build process works:
```bash
npm run compile
```
- Login & Publish:
If you haven't yet, you'll need to create a publisher profile on the VS Code Marketplace and generate a Personal Access Token (PAT) from Azure DevOps.
```bash
bash
vsce login your-publisher-name
vsce publish
```
Alternatively, you can just package it locally for sharing with colleagues by running vsce package which outputs a .vsix file.