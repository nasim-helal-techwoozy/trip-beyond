import { cn } from 'keep-react/utils';
import React from 'react'

interface PropsTypes {
    children: React.ReactNode;
    className?: string;
}
const CardContainer: React.FC<PropsTypes> = ({ children, className }) => {
    return (
        <div className={cn("bg-white p-4 shadow-lg rounded-lg", className)}>
            {children}
        </div>
    )
}

export default CardContainer
