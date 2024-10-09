import React from 'react'
import { IconSearchEngine } from '@/interfaces/icons';
import { nanoid } from 'nanoid'

interface CardData {
    title: string;
    time: string;
    icon?: React.ReactNode;
}

const Elements: CardData[] = [
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day /> },
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day /> },
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day /> },
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day /> }
]


const FilterCard = () => {
    return (
        <div className="flex justify-center items-center px-2 py-5">
            <div className="grid grid-cols-2 gap-2">
                {Elements.map(card => (
                    <div key={nanoid()} className="flex flex-row bg-[#EFEFEF] p-2 text-black rounded-lg shadow-md">
                        {/* Text Column */}
                        <div className="text-left text-[8px]">
                            <span>{card.title}</span>
                            <span><br /> {card.time}</span>
                        </div>
                        {card.icon && (
                            <div className="ml-1 mt-1">
                                {card.icon}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterCard
