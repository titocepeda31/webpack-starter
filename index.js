import {saludar} from './src/js/componentes';
import "./src/app.css";
import "./src/app.scss";
import "./src/img/js-logo.png";
import webpack from './src/assets/webpack.png'
const yo = "Alejandro Cepeda Cepeda";

saludar(yo);

const img = document.createElement('img');
img.src = webpack;
document.body.append(img);