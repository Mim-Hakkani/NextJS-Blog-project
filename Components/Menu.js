import Link from "next/link";


const Menu = () => {
    return (
        <ul>
           <Link href='/'><a>Home</a></Link> 
           <Link href='/about'><a>About</a></Link> 
           <Link href='/Contact'><a>Contact</a></Link> 
           
        </ul>
    );
};

export default Menu;