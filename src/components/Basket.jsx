import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Basket = (props) => {

  const {
      cartOpen, 
      closeCart = Function.prototype, 
      order = [], 
      removeFromOrder
} = props;

  return (
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={closeCart}
    >
      <List sx={{width:"400px"}}>
          <ListItem>
              <ListItemIcon>
                  <ShoppingBasket/>
              </ListItemIcon>
              <ListItemText primary="Кошик"/>
          </ListItem>
          <Divider/>
        
          {!order.length ? (
              <ListItem>Кошик порожній!</ListItem>
          ) : (
              <>
           { order.map((item) =>(
              <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/>
           ))}
           <Divider/>
           <ListItem>
              <Typography sx={{fontWeight: 700}}>
              Загальна вартість:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                гривень.
              </Typography>
           </ListItem>
           </>
          )}

      </List>
    </Drawer>
  )
}

export default Basket