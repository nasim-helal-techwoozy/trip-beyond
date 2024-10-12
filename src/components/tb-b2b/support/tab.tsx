import React from 'react';

interface TabProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tab: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="mb-4 flex border-b border-gray-300">
            <button
                className={`py-2 px-4 text-sm font-semibold ${activeTab === 'opened' ? 'border-b-2 border-blue-500' : 'text-gray-600'} cursor-pointer`}
                onClick={() => setActiveTab('opened')}
            >
                Opened
            </button>
            <button
                className={`py-2 px-4 text-sm font-semibold ${activeTab === 'ongoing' ? 'border-b-2 border-blue-500' : 'text-gray-600'} cursor-pointer`}
                onClick={() => setActiveTab('ongoing')}
            >
                Ongoing
            </button>
            <button
                className={`py-2 px-4 text-sm font-semibold ${activeTab === 'closed' ? 'border-b-2 border-blue-500' : 'text-gray-600'} cursor-pointer`}
                onClick={() => setActiveTab('closed')}
            >
                Closed
            </button>
        </div>
    );
};

export default Tab;
