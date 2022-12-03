import './social.css'

export function IconsSocial({children, url}){
    return(
        <a className="social" href={url} rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    )
}