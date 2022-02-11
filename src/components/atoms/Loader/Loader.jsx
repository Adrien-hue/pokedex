import logo from '../../../logo.svg';
import "./Loader.sass"

const Loader = () => {
    return <div className="loader">
        <img src={logo} alt="loader" width="150px" height="150px" />
    </div>
}

export default Loader;