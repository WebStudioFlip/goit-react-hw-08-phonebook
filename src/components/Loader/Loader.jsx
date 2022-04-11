import { TailSpin } from 'react-loader-spinner';
import styles from './loader.module.css';
const Loader = () => {
  return (
    <div className={styles.div}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
