import Link from "next/link";


const Menu = () => {
    return (
        <div style={{display:'flex',padding:'5px 20px'}}> 
        <h1>Blog</h1>

        <ul>
           <Link href='/'><a>Home</a></Link> 
           <Link href='/about'><a>About</a></Link> 
           <Link href='/Contact'><a>Contact</a></Link> 
           
        </ul>
        
        </div>

    );
};

export default Menu;