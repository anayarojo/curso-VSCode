# Curso de VSCode

Un pequeño repositorio donde aprenderemos un par de trucos para trabajar rápidamente con Visual Studio Code.

También hay un par de extensiones bastante útiles que les pueden servir.

## Keyboard Shortcuts

### PDF Files

* [Linux](./shortcuts/keyboard-shortcuts-linux.pdf)

* [Mac OS](./shortcuts/keyboard-shortcuts-macos.pdf)

* [Windows](./shortcuts/keyboard-shortcuts-windows.pdf)

#### Windows Configuration
```
[
    {
        "key": "shift+alt+up",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+down",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+numpad_divide",
        "command": "editor.action.commentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+a",
        "command": "editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "f12",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+shift+l",
        "command": "editor.action.selectHighlights",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+shift+k",
        "command": "editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+z",
        "command": "redo",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+b",
        "command": "workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "ctrl+k z",
        "command": "workbench.action.toggleZenMode"
    },
    {
        "key": "ctrl+oem_1",
        "command": "terminal.toggle"
    },
    {
        "key": "ctrl+shift+p",
        "command": "workbench.action.showCommands"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.closeWindow",
        "when": "!editorIsOpen && !multipleEditorGroups"
    },
    {
        "key": "ctrl+shift+w",
        "command": "workbench.action.closeWindow"
    },
    {
        "key": "ctrl+shift+t",
        "command": "workbench.action.reopenClosedEditor"
    },
    {
        "key": "ctrl+tab",
        "command": "workbench.action.openNextRecentlyUsedEditorInGroup"
    },
    
]
```

## Extensiones

* [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

* [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

* [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

* [Liveserver](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

* [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

* [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

* [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

* [TODO Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)