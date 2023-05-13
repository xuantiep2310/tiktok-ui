import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

function Sidebar() {
    const cx = classNames.bind(styles);

    return <aside className={cx('wrapper')}>Sidebar</aside>;
}

export default Sidebar;
