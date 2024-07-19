import { GoLightBulb } from "react-icons/go";
import { GoBell } from "react-icons/go";
import { HiOutlinePencil } from "react-icons/hi2";
import { MdOutlineArchive } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import './index.css'
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="menuContainer" >
            <Link to={'/notes'} >
                <div className="container" >
                    <GoLightBulb className="icons" />
                    <p className="labels" >Notes</p>
                </div>
            </Link>
            <div className="container">
                <GoBell className="icons" />
                <p className="labels" >Reminders</p>
            </div>
            <div className="container">
                <HiOutlinePencil className="icons" />
                <p className="labels" >Edit labels</p>
            </div>
            <div className="container">
                <MdOutlineArchive className="icons" />
                <p className="labels" >Archive</p>
            </div>
            <div className="container">
                <BsTrash className="icons" />
                <p className="labels" >Bin</p>
            </div>
        </div>
    )
}

export default Menu