import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode,
    backgroundColor: string,
}


export default function Header({ children, backgroundColor }:HeaderProps){
    const styles = {
        header:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 24px',
            backgroundColor: backgroundColor,
            height: '96px'
        }   
    }

    return(
        <header style={styles.header}>
            {children}
        </header>
    )
}