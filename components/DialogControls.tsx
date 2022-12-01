import React from "react";
import { Box, Button } from "@mui/material";
import { useDialog } from "../lib";

export default function DialogControls({ children, suppressEnter, onAccept, onClose }) {
    const { closeDialog } = useDialog();

    function onKeyDown(event) {
        if (!suppressEnter && event.key === "Enter") {
            onAccept?.();
        }
    }

    return (
        <Box m={2} display="flex" flexDirection="column" gap={1}>
            <Box onKeyDown={onKeyDown} display="flex" flexDirection="column" gap={1}>
                {children}
            </Box>
            <Box display="flex" gap={1} justifyContent="flex-end" mt={1}>
                {onAccept && (
                    <Button variant="contained" onClick={onAccept}>
                        Accept
                    </Button>
                )}
                <Button
                    variant="contained"
                    onClick={() => {
                        onClose?.();
                        closeDialog();
                    }}
                >
                    Cancel
                </Button>
            </Box>
        </Box>
    );
}
