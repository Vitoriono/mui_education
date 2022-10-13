import { Snackbar, Alert } from "@mui/material";

function Snack({isOpen, handleClose = Function.prototype}) {
  return (
      <Snackbar
          open={isOpen}
          onClose={handleClose}
          autoHideDuration={3000}
      >
          <Alert
              severity="success"
          >Товар доданий до кошика!</Alert>
      </Snackbar>
  )
}

export default Snack;