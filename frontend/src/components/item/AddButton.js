import {Link} from "react-router-dom";
import {ReactComponent as AddIcon } from "../../assets/add.svg";

const AddButton = () => {
    return (
        <div className='floating-button'>
            <Link to='/note/new'><AddIcon/></Link>
        </div>
    );
}
export default AddButton;