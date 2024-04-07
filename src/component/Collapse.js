import { useState } from "react";

function Collapse({title, content, divClassName, titleClassName, contentDivClassName}) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    function toggleCollapse() {
        setIsCollapsed(!isCollapsed)
    }

    return(
        <div className={divClassName}>
            <button onClick={toggleCollapse} className={titleClassName}>{title}</button>
                {!isCollapsed && 
                    <div className={contentDivClassName}>
                        {content} 
                    </div>
                }
        </div>
    )
}

export default Collapse;