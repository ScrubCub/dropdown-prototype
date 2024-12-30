import "./stylesheet.css";
import dropdown from "./dropdown";

const choices = ['Air', 'Water', 'Earth', 'Fire'];
const body = document.querySelector('body');
const menu = dropdown('Choose an option', 'example_menu', ...choices);
body.appendChild(menu);