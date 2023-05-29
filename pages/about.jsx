import Link from 'next/link';
import Layout from './components/layout';
export default function About() {
    return (
        <Layout title='欢迎来到关于我的页面'>
            <div>
                <h3>简介</h3>
                <p>
                    这是一个简介页面，春天复苏，再别康桥，一切美丽。
                </p>
                <p>
                    在田野里，在草地上，一切尽情歌唱。
                </p>
            </div>
        </Layout>
    )
}