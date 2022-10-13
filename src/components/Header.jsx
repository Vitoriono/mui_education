import { ShoppingBasket } from "@mui/icons-material";
import { IconButton, AppBar, Toolbar, Typography } from "@mui/material";
 


function Header({handleCart}) {
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
          My Shop
        </Typography>
        <IconButton
            color="inherit"
            onClick={handleCart}
        >
          <ShoppingBasket/>
        </IconButton>
      </Toolbar>
    </AppBar>  
  )
}

export default Header