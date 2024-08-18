import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://lh3.googleusercontent.com/ogw/AF2bZyhCf5sf6tyZb2qtg2bN52BH36Vk1vO5k0ig8iLVAhzsB-c=s32-c-mo"
                    alt="avatar"
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hoangtnh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Hoàng Trần Ngọc Huy</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
