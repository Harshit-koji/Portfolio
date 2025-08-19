

export const QualificationContent = ({text, icon, color})=>{



    return <a  className={`${color} d-flex gap-3 fs-4 cursor-pointer nav-link`}>
        <p>{icon}</p>
        <p>{text}</p>
    </a>
}