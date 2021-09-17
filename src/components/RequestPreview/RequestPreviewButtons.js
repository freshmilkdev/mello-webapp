import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import styles from "./RequestPreview.module.css";
import {Button} from "../Shared/Button/Button";

export const RequestPreviewButtons = ({disabled, onSubmit, onCancel}) => (
    <div>
        <h4 className={'mb-3 textCenter'}>Are you ready to send your request?</h4>
        <div className={clsx('flexCenter', styles.buttons)}>
            <Button onClick={onCancel} label={'Cancel'} color={"secondary"} fullWidth={false} small/>
            <Button disabled={disabled} onClick={onSubmit} label={'Send'} fullWidth={false} small/>
        </div>
    </div>
);

RequestPreviewButtons.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};