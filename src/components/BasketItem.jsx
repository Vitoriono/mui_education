import { IconButton, ListItem } from "@mui/material";
import {Close} from "@material-ui/icons";

const BasketItem = ({removefromOrderove, id, name, price, quantity}) => {
    return (
        <ListItem>
            {name} {price}руб x{quantity}
            <IconButton
                className='btn btn-primary'
                onClick={() => props.removefromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;