import React from 'react';
import Drawer from '@mui/material/Drawer';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Props{
    children:React.ReactNode
    setOpen:(value:boolean) => void
    open:boolean
    element:React.ReactNode
    anchor?:Anchor
}

export function DrawerComponent({children,open,setOpen,element,anchor}:Props) {
  return (
    <div>
      {element}
      <Drawer anchor={anchor?anchor:"right"} open={open} onClose={()=>setOpen(false)}>
        {children}
      </Drawer>
    </div>
  );
}

export function DialogComponent({children,open,setOpen,element}:Props) {
  return (
    <React.Fragment>
      {element}
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
      >
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
