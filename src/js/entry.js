import _ from 'lodash';
import Icon from '../images/d5.jpeg';
import {asyncAll, asyncSingle} from './another.js'

let myComponent = () => {
    var el = document.createElement('div');

    asyncAll().then((res)=> {
        console.log('res', res);
    });

    let img = createImage(Icon);
    img
        .then((res) => {
            document.querySelector("body").appendChild(res);
            console.log('444--------------', res);
        })
        .catch((err) => {
            console.log('error', err);
        })


    console.log('222--------------');
    el.innerHTML = _.join(['Hello', 'webpack'], ' ');

/*    if (process.env.NODE_ENV != 'production') {
        console.log('env', 'test');
    }*/

    return el;
}

let createImage = (Icon) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = Icon;

        image.onload = () => {
            resolve(image);
            console.log('333--------------');
        };

        image.onerror = () => {
            reject('create image error');
        }
        console.log('111--------------');
    });
}

document.querySelector("body").appendChild(myComponent());