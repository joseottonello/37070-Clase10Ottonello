import Item from "../item/Item";
import "../../assets/scss/itemList/itemList.scss";

const ItemList = ({props}) => {
    return (
        <div className="containerList">
            {props.map((shoes) => (
                <Item key={shoes.id} props={shoes} />
            ))}
        </div>
    )
}

export default ItemList