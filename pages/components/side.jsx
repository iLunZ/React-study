// 侧边菜单
import Link from "next/link";

const menuList = [
    {
        id: 0,
        name: '首页',
        url: '/'
    }, {
        id: 1,
        name: '关于',
        url: '/about'
    },
]
export default function Side() {
    const menu = menuList.map(item => {
        return <li key={item.id}><Link href={item.url}>{item.name}</Link></li>
    })
    return (
        <>
            <div>
                <ul>
                    {menu}
                </ul>
            </div>
        </>
    )
}