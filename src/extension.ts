import * as vscode from 'vscode';

function flattenText(text: string): string {
	// Remove line breaks and extra spaces
	return text.replace(/\s+/g, ' ').trim();
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Flatten Text is now active!');

	let disposable = vscode.commands.registerCommand('flattentoclipboard.flatten', () => {
		const editor = vscode.window.activeTextEditor;
		let selection = editor?.selection;

		// If nothing is selected, use the entire document
		if (selection === undefined || selection.isEmpty) {
			selection = new vscode.Selection(
				new vscode.Position(0, 0),
				new vscode.Position(editor?.document.lineCount || 0, 0)
			);
		}

		const selectedText = editor?.document.getText(selection);
		if (selectedText !== undefined) {
			// Flatten the selected text
			const flattenedText = flattenText(selectedText);

			// Copy the flattened text to the clipboard
			vscode.env.clipboard.writeText(flattenedText).then(() => {
				vscode.window.showInformationMessage('Flattened text copied to clipboard!');
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
