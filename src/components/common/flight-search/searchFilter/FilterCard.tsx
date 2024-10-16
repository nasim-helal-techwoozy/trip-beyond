import React from 'react'
import { IconSearchEngine } from '@/interfaces/icons';
import { nanoid } from 'nanoid'

interface CardData {
    title: string;
    time: string;
    icon?: React.ReactNode;
}

const Elements: CardData[] = [
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day className='text-primary-main'/> },
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day className='text-secondary-main'/> },
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day className='text-primary-main'/> },
    { title: "Early Morning", time: "06AM-8AM", icon: <IconSearchEngine.Day className='text-primary-main'/> }
]


const FilterCard = () => {
    return (
        <div className="flex justify-center items-center px-2 py-5">
            <div className="grid grid-cols-2 gap-2">
                {Elements.map(card => (
                    <div key={nanoid()} className="flex flex-row bg-gray-200 p-2 text-black rounded-lg shadow-lg">
                        {/* Text Column */}
                        <div className="text-left text-[10px]">
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
