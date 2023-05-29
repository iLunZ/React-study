import Link from "next/link"
export default function Footer() {
    return (
        <footer>
            <div style={{position: 'fixed', bottom: '0px', left: '10px', backgroundColor: 'gray', height: '40px', lineHeight: '40px', width: '100%'}}>
                <button><Link href='/about'>关于</Link></button>
            </div>
        </footer>
    )
}