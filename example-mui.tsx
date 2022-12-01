import React, { useState } from "react";
import { Dialogs, showDialog } from "./lib";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider, Button, Box, TextField } from "@mui/material";
import ActionDialog from "./components/ActionDialog";
import NestedDialog from "./components/NestedDialog";
import showDialogFunction from "./components/OnlyExportShowFunction";

// App
const theme = createTheme();

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Dialogs />
                <Box display="flex" gap={1}>
                    <Button variant="contained" onClick={() => showDialog(ActionDialog, { initialPassword: "abc" })}>
                        with action
                    </Button>
                    <Button variant="contained" onClick={() => ActionDialog.show({ initialPassword: "abc" })}>
                        makeShowDialog
                    </Button>
                    <Button variant="contained" onClick={() => showDialog(NestedDialog, { name: "xD" })}>
                        Nested
                    </Button>
                    <Button variant="contained" onClick={() => showDialogFunction({ name: "xD" })}>
                        exported function
                    </Button>
                </Box>
            </ThemeProvider>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);
