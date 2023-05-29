import Link from 'next/link';
import Head from 'next/head';
import Layout from './components/layout';
function Header({ title }) {
  return <h1>{title ? title : 'Welcome'}</h1>;
}

export default function HomePage() {

    return (
        <Layout title='我的博客-首页'>
            <Head>
                <title>iLun的博客网站</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name='个人网站' content='这是一个content'></meta>
            </Head>
            <div>
                <Header title="Welcome to My Blog. 🚀" />
                <p>欢迎光临，这是一个简单的博客网站</p>
                
                <button><Link href='/about'>跳去about</Link></button>
            </div>
        </Layout>
    );
}