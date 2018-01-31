
import Icon from '../images/d5.jpeg';


/*
* async/await : https://babeljs.cn/docs/plugins/syntax-async-functions/
*
* await相当于promise中的then，所以返回值需要是promise类型
* 并且async需要返回promise，使得可以链式调用then
* */

/*export default async () => {
    const image = new Image();
    image.src = Icon;
    let images = [image, image];

    let res = await Promise.all(images);
    console.log('res', res);
};*/

function timeout(index) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log('t'+index, 'timeout');
            resolve('done');
        }, 5000)
    })
}
// 并发
export async function asyncAll() {
    let arr = [];
    [{}, {}].map((item, i) => {
        arr.push(timeout(i));
    })

    let res = await Promise.all(arr);
    console.log('asyncAll', res);
    return res;
};

// 单个
export const asyncSingle = async () => {
    let res = await timeout(0);
    console.log('asyncSingle', res);
    return res;
};
