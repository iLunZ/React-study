import { useState, useRef, useEffect } from 'react';
import Layout from './components/layout';

export default function TestRef() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState(''); // 搜索结果
  let timeoutID = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      setIsSending(false);
      seachInfo(text);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  function seachInfo(value) {
    setTimeout(() => {
        setResult(`${value} process successfully`);
    }, 1000);
  }
  function handleInputchanged(e) {
    console.log(e.target.value);
    setText(e.target.value)
  }

  return (
    <Layout title='测试useRef'>
      <input
        disabled={isSending}
        value={text}
        onChange={handleInputchanged}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
      {result &&
        <p>搜索结果是{result}</p>
      }
    </Layout>
  );
}