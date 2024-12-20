import React from 'react'
import ButtonSvg from "../assets/svg/ButtonSvg";
function Button({className,href,onClick,children,px,white }) { 
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px||"px-7"} ${className||""} ${white ? "text-n-8": "text-n-5"}`
    const spanClasses = `relative z-10 `
 const renderButton = () => (  
    <button className={classes} onClick={onClick}>
        <span className={spanClasses}>
            {children}
        </span>
        {ButtonSvg(white)}
    </button>
    
 )

 const renderlink = () => (  
    <a href={href} className={classes}>
        <span className={spanClasses}>
            {children}
        </span>
        {ButtonSvg(white)}
    </a>
    
 )


    
    
    

 return href ? renderlink() : renderButton()
}

export default Button