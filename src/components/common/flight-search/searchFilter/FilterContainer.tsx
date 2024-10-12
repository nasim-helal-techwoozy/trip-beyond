import React from 'react'


interface PropsTypes {
    titleLeft: string;
    titleRight?: string;
    children: React.ReactNode;
}

const FilterContainer: React.FC<PropsTypes> = ({ titleLeft, titleRight, children }) => {
    return (
        <div>
            <div className="flex flex-row justify-between text-sm bg-secondary-500 py-1 px-2 rounded-sm">
                <p className="font-normal text-white">{titleLeft}</p>
                {titleRight && <p className="font-normal text-white">{titleRight}</p>
                }

            </div>
            {children}
        </div>
    )
}

export default FilterContainer
