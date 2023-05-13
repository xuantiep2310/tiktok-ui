import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsPreview from './AccountsPreview';

const cx = classNames.bind(styles);

function AccountItem({ isShowSuggest = false }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountsPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            {isShowSuggest ? (
                <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                    <div className={cx('account-item')}>
                        <img className={cx('avatar')} src={images.avatar} alt="" />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>quocnguyenphu</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>Quốc Nguyễn Phú</p>
                        </div>
                    </div>
                </Tippy>
            ) : (
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={images.avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AccountItem;
