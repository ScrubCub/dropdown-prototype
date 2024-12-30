import { appendAllChildren, headerExists } from "./utils";
import icon from "./icons/menu-down.svg";

const stylesheet = document.styleSheets[0];

const setRules = function setCSSRules(menuClassName) {
    let selector = `.${menuClassName} > ul`;
    // This grabs the CSS rule object with class menuClassName header
    if (!headerExists(stylesheet, selector)) {
        stylesheet.insertRule(`${selector} {
            width: stretch;
            margin: 0; 
            padding: 0;
            max-height: 0;
            overflow: hidden;
            }`);
        stylesheet.insertRule(`${selector}.visible {
            max-height: max-content;
            }`);
    }
}

const style = function setChoicesStyle(menuClassName) {
    let selector = `.${menuClassName} > ul > li`;
    if(!headerExists(stylesheet, selector)) {
        stylesheet.insertRule(`${selector} {
            list-style-type: none;
            border: 1px solid black;
            background-color: grey;
            }`);

        stylesheet.insertRule(`${selector}:hover {
            background-color: blue;
            cursor: pointer;
            }`);
    }
}

const menuButtonStyle = function menuButtonStyle(menuClassName) {
    let selector = `.${menuClassName} > div:first-child`;
    if(!headerExists(stylesheet, selector)) {
        stylesheet.insertRule(`${selector} {
            display: flex;
            border: 1px solid black;
            background-color: grey;
            }`);
        stylesheet.insertRule(`${selector}:hover {
            background-color: blue;
            cursor: pointer;
            }`);
    }

    if(!headerExists(stylesheet, `${selector} > p`)) {
        stylesheet.insertRule(`${selector} > p {
            padding: 3px;
            margin: 0;
            }`)
    }
}

const adjustIcon = function adjustIconSize() {
    let selector = '.dropdown_icon';
    if (!headerExists(stylesheet, selector)) {
        stylesheet.insertRule(`${selector} {
            height: 2rem;
            aspect-ratio: 1;
            }`);
    }
}

const dropdown = function createDropdown(menuTitle, menuClassName, ...choices) {
    const menuButton = document.createElement('div');
    const dropdownDiv = document.createElement('div');
    const dropdownChoicesContainer = document.createElement('ul');
    const downIcon = document.createElement('img');
    const menuTitleElement = document.createElement('p');
    const dropdownChoices = [...choices.map((choice) => {
        let choiceItem = document.createElement('li');
        choiceItem.textContent = choice;
        return choiceItem;
    })];

    downIcon.src = icon;
    downIcon.className = 'dropdown_icon';
    adjustIcon();
    menuTitleElement.textContent = menuTitle;
    menuButton.appendChild(menuTitleElement);
    menuButton.appendChild(downIcon);
    dropdownDiv.className = menuClassName;
    dropdownDiv.style.maxWidth = 'max-content';
    appendAllChildren(dropdownChoicesContainer, ...dropdownChoices);
    appendAllChildren(dropdownDiv, menuButton, dropdownChoicesContainer);
    setRules(menuClassName);
    style(menuClassName);
    menuButtonStyle(menuClassName);

    menuButton.addEventListener('click', () => {
        dropdownChoicesContainer.classList.toggle('visible');
    });
    return dropdownDiv;
};

export default dropdown;