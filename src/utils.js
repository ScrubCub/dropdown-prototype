export function appendAllChildren(parent, ...children) {
    children.forEach((child) => parent.appendChild(child));
}

export function headerExists(stylesheet, selector) {
    if ([...stylesheet.cssRules].find((header) => header.selectorText === selector) !== undefined) {
        return true;
    }
    return false;
}