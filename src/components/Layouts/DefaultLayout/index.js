import Header from '../components/Header';
import SideBar from './SideBar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
