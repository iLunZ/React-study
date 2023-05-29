import Link from "next/link"
export default function Footer() {
    return (
        <footer>
            <div className="g_footer">
                <p>
                    一切解释权归作者所有
                    <button><Link href='/about'>关于</Link></button>
                </p>
            </div>
        </footer>
    )
}