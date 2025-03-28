import React from 'react';
import { Link } from 'react-router';

interface NavigationProps {
    activeTab: 'home' | 'budget' | 'charts';
    setActiveTab: (tab: 'home' | 'budget' | 'charts') => void;
}

const Navigation: React.FC<NavigationProps> = ({activeTab, setActiveTab}) => {
    return (
        <>
        <nav className='fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white flex items-center p-4 gap-4'>
            <Link
                to = '/'
                className = {activeTab === 'home' ? 'active' : ''}
                onClick = {() => setActiveTab('home')}>
                Home
            </Link>
            <Link
                to = "/budget"
                className = {activeTab === 'budget' ? 'active' : ''}
                onClick = {() => setActiveTab('budget')}>
                Budget
            </Link>
            <Link
                to = "/charts"
                className = {activeTab === 'charts' ? 'active' : ''}
                onClick = {() => setActiveTab('charts')}>
                Charts
            </Link>
        </nav>
        </>
    );
};

export default Navigation;