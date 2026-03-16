import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('mel.open', () => {
        // Pointing to the docs directory allows the extension to use the web-app UI without duplicating it
        const docsPath = path.join(context.extensionPath, '..', 'docs');
        
        const panel = vscode.window.createWebviewPanel(
            'melPromptGenerator',
            'MEL Prompt Generator',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: [vscode.Uri.file(docsPath)]
            }
        );

        const htmlFile = path.join(docsPath, 'index.html');
        let htmlContent = '';
        try {
            htmlContent = fs.readFileSync(htmlFile, 'utf8');
        } catch (e) {
            vscode.window.showErrorMessage(`Failed to load UI: ${e}`);
            return;
        }

        panel.webview.html = htmlContent;

        // Message handling from the WebView to the extension environment
        panel.webview.onDidReceiveMessage(
            async (message) => {
                switch (message.command) {
                    case 'pushToGemini':
                        // 1. Write the generated prompt to the system clipboard
                        await vscode.env.clipboard.writeText(message.text);
                        
                        try {
                            // 2. Try to natively open the standard unified Chat view and pre-fill the query
                            await vscode.commands.executeCommand('workbench.action.chat.open', { query: message.text });
                        } catch (err) {
                            // 3. Fallback: Simply notify the user they can paste it manually if the chat window command is overridden
                            vscode.window.showInformationMessage('MEL prompt copied! Paste it into the Gemini Code Assist chat.');
                        }
                        break;
                    case 'error':
                        vscode.window.showErrorMessage(message.text);
                        break;
                    case 'info':
                        vscode.window.showInformationMessage(message.text);
                        break;
                    case 'openUrl':
                        vscode.env.openExternal(vscode.Uri.parse(message.url));
                        break;
                }
            },
            undefined,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}