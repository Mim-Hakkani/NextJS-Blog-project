import Cover from "./Cover";
import Menu from "./Menu";

const Layout = ( { children }) => {
    return (
        <>  
           <Menu />
           <Cover />
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;