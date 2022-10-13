import { ShoppingBasket } from "@mui/icons-material";
import { IconButton, AppBar, Toolbar, Typography, Badge } from "@mui/material";
   


function Header({handleCart, orderLen}) {
  return (
    <AppBar 
     position="static"
    >
      <Toolbar>
        <Typography
            variant="h6"
            component="span"
            sx={{flexGrow: 1}}
        >
          Книжкова крамниця
        </Typography>
        <IconButton
            color="inherit"
            onClick={handleCart}
        >
          <Badge
              color="secondary"
              badgeContent={orderLen}
          />
          <ShoppingBasket/>
        </IconButton>
      </Toolbar>
    </AppBar>  
  )
}

export default Header