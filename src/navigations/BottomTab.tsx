import React from 'react';
import IconButton from '../components/IconButton';
import {
    ConnectionLogo,
    HomeLogo,
    LiveLogo,
    MoreLogo,
    StationLogo,
} from '../assets/icon/nav';

const BottomTab: React.FC = () => {
    return (
        <div>
            <IconButton src={HomeLogo} />
            <IconButton src={LiveLogo} />
            <IconButton src={StationLogo} />
            <IconButton src={ConnectionLogo} />
            <IconButton src={MoreLogo} />
        </div>
    );
};

export default BottomTab;
