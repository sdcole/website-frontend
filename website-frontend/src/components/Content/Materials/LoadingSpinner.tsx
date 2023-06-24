import '../../../App.css';
import loadingImage from '../../../images/loadingSpinner.png';
const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
                <img src={loadingImage} ></img>
            </div>
        </div>
    );
}
export default LoadingSpinner;