import React from "react";
import DialogControls from "./DialogControls";
import {makeShowDialog} from '../lib';

function OnlyExportShowFunctionDialog({ name }) {
    return (
        <DialogControls >
            <div>{name}</div>
        </DialogControls>
    );
}

export default makeShowDialog(OnlyExportShowFunctionDialog);