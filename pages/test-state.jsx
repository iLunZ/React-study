import Layout from './components/layout';
import { useState, useEffect, useRef } from 'react';
export default function TestState() {
    const [name, setName] = useState('hahaha');
    const [result, setResult] = useState(''); // 搜索结果
    const [count, setCount] = useState(0); // 有效点击的次数
    let timeflag = useRef(null);
    let throttlePre = useRef(0); // 节流函数执行的上一次开始时间戳
    useEffect(() => {
        console.log('组件渲染了且监听到了name的变化');

        return () => {
            alert('即将清理react');
            timeflag.current = null;
        }
    }, []);
    // 防抖
    function debounce(fn, wait) {
        console.log('防抖函数debounce本身执行');
        return function(...args) {
            if(timeflag.current) {
                console.log('发现之前有timeout');
                clearTimeout(timeflag.current);
            }
            timeflag.current = setTimeout(() => {
                console.log('settimeout函数执行了');
                fn(...args);
                fn.apply(this, args); // 注意this指向的问题
                timeflag.current = null;
            }, wait);
        }
    }
    function throttle(fn, delay) {
        return function(...args) {
            let now = +new Date();
            if((now - throttlePre.current) >= delay){
                // 超过延时时间则可以执行
                throttlePre.current = now;
                fn.apply(this, args);
            }
        }
    }
    const handleInput = debounce((v) => { // 每次re-render都会触发一次
        setResult(`${v}---> 已经查到了`);
    }, 1000);

    const handleClick = throttle(() => {
        setCount(count+1);
    }, 500)

    const handleInputChange = (e) => {
        const value = e.target.value;
        console.log('handleInputChange执行了', value);
        setName(e.target.value);
        setResult(''); // 清空之前的搜搜结果
        handleInput(value);
    }
    return (
        <Layout title='测试Hooks使用'>
            <div>
                <h3>Hooks应用防抖和节流</h3>
                <p>
                    请输入：<input value={name} onChange={handleInputChange} />
                </p>
                <p>
                    输入的搜索关键词：{name}
                </p>
                {
                    result && <p>搜索结果是：{result}</p>
                }
                <div>
                    <p>频繁触发至少间隔0.5秒才会是有效点击</p>
                    <button onClick={handleClick}>点击计数{count}</button>
                </div>
            </div>
        </Layout>
    )
}