import { useState } from "react";
import arrowCollapse from "../images/arrow_back_ios-24px 2.png"

function Collapse({title, content, divClassName, titleClassName, contentDivClassName}) {
    const [isCollapsed, setIsCollapsed] = useState(true)
    function toggleCollapse() {
        setIsCollapsed(!isCollapsed)
    }

    return(
        <div className={divClassName}>
            <button onClick={toggleCollapse} className={titleClassName}>
                {title}
                <img src={arrowCollapse} className={`arrow__collapse ${isCollapsed ? "" : "arrow__collapse__up"}`}></img>
            </button>
                {!isCollapsed && 
                    <div className={contentDivClassName}>
                        {content} 
                    </div>
                }
        </div>
    )
}

export default Collapse;