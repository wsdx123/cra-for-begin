import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from "./Loading.module.css";

const Loading = () => {
    const antIcon = <LoadingOutlined spin />;
    return (
        <div className={styles.spin}>
            <Spin indicator={antIcon} />
        </div>
    );
}

export default Loading;