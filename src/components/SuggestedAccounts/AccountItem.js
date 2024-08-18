import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const handlePreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={handlePreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://lh3.googleusercontent.com/ogw/AF2bZyhCf5sf6tyZb2qtg2bN52BH36Vk1vO5k0ig8iLVAhzsB-c=s32-c-mo"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hoangtnh</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Hoàng Trần Ngọc Huy</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
