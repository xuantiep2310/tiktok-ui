import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'laos',
                    title: 'Tiếng Lào',
                },
                {
                    type: 'language',
                    code: 'india',
                    title: 'Tiếng Ấn Độ',
                },
                {
                    type: 'language',
                    code: 'gr',
                    title: 'Tiếng Đức',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Tiếng Trung Quốc',
                },
                {
                    type: 'language',
                    code: 'thai',
                    title: 'Tiếng Thái Lan',
                },
                {
                    type: 'language',
                    code: 'brazil',
                    title: 'Tiếng Brazil',
                },
                {
                    type: 'language',
                    code: 'russia',
                    title: 'Tiếng Nga',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Tiếng Nhật',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: 'Tiếng Hàn',
                },
                {
                    type: 'language',
                    code: 'indo',
                    title: 'Tiếng Indo',
                },
                {
                    type: 'language',
                    code: 'philipin',
                    title: 'Tiếng Philipin',
                },
                {
                    type: 'language',
                    code: 'timoleste',
                    title: 'Tiếng Đông Timo',
                },
                {
                    type: 'language',
                    code: 'brunei',
                    title: 'Tiếng Brunei',
                },
                {
                    type: 'language',
                    code: 'saudi',
                    title: 'Tiếng Ả Rập',
                },
                {
                    type: 'language',
                    code: 'argentina',
                    title: 'Tiếng Argentina',
                },
                {
                    type: 'language',
                    code: 'cuba',
                    title: 'Tiếng CuBa',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortscuts',
    },
];

function Header() {
    const currentUer = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                alert('Change Laguage Success!!!');
                break;
            case 'switch-theme':
                // Handle change theme
                alert('Change Theme Success!!!');
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark Mode',
            switches: true,
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUer ? (
                        <>
                            <Tippy delay={[0, 70]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 70]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 70]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUer ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUer ? (
                            <Image className={cx('user-avatar')} src={images.avatar} alt="Nguyen Van A" />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
