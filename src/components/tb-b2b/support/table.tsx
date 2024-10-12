'use client';
import { KeepTable } from '@/components/keep-react/KeepTable';
import React, { useState } from "react";

// Define the interface for the table data structure
interface BookingDataInterface {
    sl: string;
    date: string;
    booking_id: string;
    message: string;
    support_type: string;
    pnr: string;
    ticket_number: string;
    action: string;
}

interface TableProps {
    type: 'opened' | 'ongoing' | 'closed';
}

const Table: React.FC<TableProps> = ({ type }) => {
    // State for sorting and searching
    const [sortField, setSortField] = useState<keyof BookingDataInterface>('date'); // 'keyof' ensures only valid keys
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof BookingDataInterface>('message'); // 'keyof' ensures valid search field

    // Mock data for different types
    const data: { [key: string]: BookingDataInterface[] } = {
        opened: [
            { "sl": "1", "date": "21-08-2024 08:18", "booking_id": "TB638598033713836999", "message": "Issue with booking", "support_type": "Ticket", "pnr": "PNR12345", "ticket_number": "TCKT98765", "action": "View" },
            { "sl": "2", "date": "22-08-2024 09:30", "booking_id": "TB638598033713837000", "message": "Need assistance", "support_type": "Request", "pnr": "PNR12346", "ticket_number": "TCKT98766", "action": "View" }
        ],
        ongoing: [
            { "sl": "1", "date": "27-03-2024 15:36", "booking_id": "TCL638471159694473183", "message": "Dear Concern... Greetings from Trip Beyond!!! Ple...", "support_type": "Issue", "pnr": "PNR54321", "ticket_number": "TCKT56789", "action": "Update" },
            { "sl": "2", "date": "28-03-2024 12:10", "booking_id": "TCL638471159694473184", "message": "Waiting for confirmation", "support_type": "Follow-up", "pnr": "PNR54322", "ticket_number": "TCKT56790", "action": "Update" }
        ],
        closed: [
            { "sl": "1", "date": "08-07-2024 10:21", "booking_id": "TCL638558679553839420", "message": "Please mail at reservation@travelchamp.com", "support_type": "Resolved", "pnr": "PNR67890", "ticket_number": "TCKT12345", "action": "View" },
            { "sl": "2", "date": "09-07-2024 11:00", "booking_id": "TCL638558679553839421", "message": "Issue resolved successfully", "support_type": "Closed", "pnr": "PNR67891", "ticket_number": "TCKT12346", "action": "View" }
        ]
    };

    // Get fields based on the type of table
    const getFields = () => {
        return [
            'SL',
            'Support Type',
            'Message',
            'Date',
            'Booking ID',
            'PNR',
            'Ticket Number',
            'Action',
        ];
    };

    const fields = getFields();

    // Filtered and sorted data based on the search and sort state
    const filteredData = data[type]
        .filter((item) => item[searchField]?.toLowerCase().includes(searchQuery.toLowerCase())) // Search by valid field
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

    return (
        <div className="mx-5">
            <KeepTable
                tableTitle={`${type.charAt(0).toUpperCase() + type.slice(1)} Bookings`} // Dynamic title
                headerItems={fields}  // Field labels
                data={filteredData}  // Processed data
            />
        </div>
    );
};

export default Table;
