import { useState } from 'react';

export const Accordion = ({ date, children }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={"accordion " + (isExpanded ? "expanded" : "closed")}>
            <div className="accordion-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="accordion-title">
                    {date}
                </div>
                <div className="accordion-expanded">
                    {isExpanded ? '-' : '+'}
                </div>
            </div>
            {
                isExpanded
                    ?
                    <div className="accordion-body">
                        {children}
                    </div>
                    :
                    <></>
            }
        </div>
    )
}