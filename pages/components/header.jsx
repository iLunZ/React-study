
export default function Header({title, pic}) {
    title = title || 'welcome to my blog';
    pic = pic || 'https://i.imgur.com/MK3eW3As.jpg';
    return (
        <header className="g_header">
            <div className="g_header_container">
                <img src={pic} alt='blog'></img>
                <h2 style={{display: 'inline-block'}}>{title}</h2>
            </div>
        </header>
    )
}