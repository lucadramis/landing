
import React, { Component } from 'react';
import './App.css';
import image from './components/lighthouse.jpg';
import News from './news.js';
import News1 from './news1.js';
import News2 from './news2.js';
import News3 from './news3.js';
import './style.css';

class page extends Component {
    render() {
        return (
            
<div class="title">
<div><img class="image" src={image}></img></div>
Pagina demo 18 febbraio 2018

<News></News>
<News1></News1>
<News2></News2>
<News3></News3>

</div>
        )}}
export default page;