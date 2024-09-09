import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/52a607a81d6f9929341dd0708ef48679.jpeg?lk3s=a5d48078&nonce=21214&refresh_token=6dadab592a289241cb5d15fb04fea72e&x-expires=1726070400&x-signature=y7IwSUTpqZzZhrRJZ6QzTruKPuk%3D&shp=a5d48078&shcp=81f88b70"
                alt="ten tai khoan "
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Phúc Thành</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> npt_0116</span>
            </div>
        </div>
    );
}

export default AccountItem;
