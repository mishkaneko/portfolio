import loadingGif from '../../@assets//animations/loading.gif';
import './loading.css';

function Loading(prop) {
  return (
    <div className={prop.loadingClass}>
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
}

export default Loading;
