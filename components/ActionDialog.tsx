import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import DialogControls from "./DialogControls";
import { makeShowDialog, useDialog } from "../lib";

export default function ActionDialog({ initialPassword }) {
    const { closeDialog } = useDialog();
    const [password, setPassword] = useState(initialPassword);

    function onAccept() {
        alert(password);
        closeDialog();
    }

    return (
        <DialogControls onAccept={onAccept}>
            <div>Dialog with action</div>
            <Box display="flex" gap={1}>
                <TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Box>
        </DialogControls>
    );
}

ActionDialog.show = makeShowDialog(ActionDialog);
