import React from 'react';
import HeaderMenuListItem from './HeaderMenuListItem';

const HeaderMenuList: React.FC = (props) => {
    return (
        <ul>
            <HeaderMenuListItem />
            <HeaderMenuListItem />
            <HeaderMenuListItem />
        </ul>
    )
}

export default HeaderMenuList;