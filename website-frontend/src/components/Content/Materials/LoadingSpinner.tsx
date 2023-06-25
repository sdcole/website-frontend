import '../../../App.css';
import loadingImage from '../../../images/loadingSpinner.png';
const LoadingSpinner = () => {
    return (
        <div className="direction">
            <div className="spinner-container">
                <div className="loading-spinner">
                
                    <img src={loadingImage} width="100" height="100"></img>
                </div>
            </div>
        </div>
    );
}
export default LoadingSpinner;