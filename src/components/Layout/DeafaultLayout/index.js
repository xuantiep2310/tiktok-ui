import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DeafaultLayout.module.scss';

function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
