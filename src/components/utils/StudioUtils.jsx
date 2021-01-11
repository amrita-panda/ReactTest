import React from "react";


export const ACTION_BUTTON = {
    PRIMARY: 'btn-primary', SECONDARY: 'btn-secondary', SUCCESS: 'btn-success',
    INFO: 'btn-info', WARNING: 'btn-warning', DANGER: 'btn-danger',
    LIGHT: 'btn-light', DARK: 'dark'
}

export function actionButton(title, btnAction, btnStyle, iconStyle, titleAsText, disabled, btnType) {

    if (titleAsText) {
        return <button onClick={(e) => { btnAction() }} disabled={!!disabled}
            className={(btnType ? ('btn-sm btn-round ' + btnType + ' br-5x ') : 'btn p-0 ') + btnStyle} >
            {iconStyle && <i className={iconStyle + (iconStyle.includes('icon-trash') ? ' text-danger' : (btnType ? '' : ' studio-primary'))} />}
            <span className={(iconStyle ? 'ml-1' : '') + (btnType ? (title.length < 6 ? ' pl-3 pr-3' : '') : '')}>{title}</span>
        </button>
    } else if (title) {
        return <button onClick={(e) => { btnAction() }} disabled={!!disabled} className={'btn p-0 ' + btnStyle}>
                {iconStyle && <i className={iconStyle + (iconStyle.includes('icon-trash') ? ' text-danger' : ' studio-primary')} />}
            </button>
    } else {
        return <button onClick={(e) => { btnAction() }} disabled={!!disabled} className={'btn p-0 ' + btnStyle}>
            {iconStyle && <i className={iconStyle + (iconStyle.includes('icon-trash') ? ' text-danger' : ' studio-primary')} />}
        </button>
    }
}

/*
    style = {
        container: 'Style, Margin, Position, etc.,',
        label: 'Style, Margin, Position, etc.,',
        input: 'Style, Margin, Position, etc.,',
        min, max, step, size, maxLength,
        disabled: false, readOnly: false required: false,
        pattern, placeholder, autoFocus,
        rows: 3, cols,
        checkboxLabelBefore: true/false,
        switchHeight: 28,
        switchWidth: 28,
        switchTextOn: 'YES',
        switchTextOff: 'NO'
        selectMultiple: true/false,
        selectSearchable: true/false,
        selectCreatable: true/false
    }
    inputField('checkbox', 'name', 'label', false, onChange.bind(this), )
    inputField('checkbox', 'name', 'label', 'value', onChange.bind(this), )
*/


export function generateUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
    return uuid;
}

export function generateObjectId() {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
}














