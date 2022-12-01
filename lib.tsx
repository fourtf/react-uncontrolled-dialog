import React from "react";
import { useState } from "react";
import * as Mui from "@mui/material";

interface Dialog<P> {
    Component: React.ComponentClass<P> | React.FunctionComponent<P>;
    props: P;
}
interface DialogWithKey<P> extends Dialog<P> {
    key: number;
}
interface DialogHostProps<P> extends Dialog<P> {
    onClose: () => void;
}

let pushDialogFn: (value: Dialog<any>) => void | undefined;
let popDialogFn: () => void | undefined;
let currentId = 0;

export const DialogContext = React.createContext({
    closeDialog: () => {},
});

function Dialog({ Component, props }: DialogHostProps<any>) {
    const [open, setOpen] = useState(true);
    const closeDialog = () => setOpen(false);

    return (
        <Mui.Dialog open={open}>
            <DialogContext.Provider value={{ closeDialog }}>
                <Component {...props} onClose={closeDialog} />
            </DialogContext.Provider>
        </Mui.Dialog>
    );
}

export function Dialogs({}) {
    const [dialogs, setDialogs] = useState<DialogWithKey<any>[]>([]);

    pushDialogFn = (value: Dialog<any>) => {
        setDialogs([...dialogs, { ...value, key: ++currentId }]);
    };

    popDialogFn = () => {
        setDialogs(dialogs.slice(0, -1));
    };

    return (
        <div className="dialogs">
            {dialogs.map(({ key, ...other }) => (
                <Dialog key={key} onClose={popDialogFn} {...other} />
            ))}
        </div>
    );
}

export function showDialog<P>(Component: Dialog<P>["Component"], props: Omit<P, "close">) {
    if (pushDialogFn) {
        // props onClose, open

        pushDialogFn({ Component, props });
    } else {
        console.error("<Dialogs> not mounted");
    }
}

export function makeShowDialog(Component: Dialog<any>["Component"]) {
    return (props: Omit<any, "close">) => showDialog(Component, props);
}

export function useDialog() {
    return React.useContext(DialogContext);
}
