'use client'
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaRegClock, FaMapMarkedAlt } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import Link from 'next/link';
import Tab from './tab';
import Table from './table';

const Support = () => {
    const [activeTab, setActiveTab] = useState('opened');

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto max-w-7xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Support Center</h1>
                <p className="text-lg mb-6">
                    Welcome to Trip Beyond&apos;s Support Center. We&apos;re here to assist you with any questions or concerns you might have about your travel plans.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Contact Info Section */}
                    <div className="bg-white p-2 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">Phone: <a href="tel:+8801322882297" className="text-blue-600">+8801322882297</a></p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">Email: <a href="mailto:info@tripbeyond.com" className="text-blue-600">info@tripbeyond.com</a></p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaRegClock className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">24/7 Customer Service</p>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkedAlt className="text-blue-500 mr-3" size={24} />
                            <p className="text-lg">Address: 123 Adventure Lane, Wanderlust City, ST 45678</p>
                        </div>
                    </div>

                    {/* Live Chat Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
                        <p className="text-lg mb-4">
                            Have questions or need immediate assistance? Our live chat support is available 24/7 to help you with any inquiries or issues.
                        </p>
                        <Link href="/live-chat">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
                                <IoChatbubbleEllipsesOutline className="mr-2" size={20} />
                                Start Live Chat
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Tabs and Tables */}
                <div className="bg-white rounded-lg mb-6 mt-5">
                    <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                    {activeTab === 'opened' && <Table type="opened" />}
                    {activeTab === 'ongoing' && <Table type="ongoing" />}
                    {activeTab === 'closed' && <Table type="closed" />}
                </div>
            </div>
        </div>
    );
};

export default Support;
