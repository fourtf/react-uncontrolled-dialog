import React from "react";
import { Button, Box } from "@mui/material";
import DialogControls from "./DialogControls";
import { showDialog } from "../lib";

export default function NestedDialog({ name }) {
    return (
        <DialogControls>
            <div>{name}</div>
            <Box display="flex" gap={1}>
                <Button variant="contained" onClick={() => showDialog(Nestee, {})}>
                    Show nested
                </Button>
            </Box>
        </DialogControls>
    );
}

function Nestee() {
    return (
        <DialogControls>
            <div>Nested</div>
        </DialogControls>
    );
}
