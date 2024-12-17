'use client'
import React from 'react';
import type { TextFieldClientComponent } from 'payload';
import { useField } from '@payloadcms/ui'
import ZunZunDialog from './ZunZunDialog.web';

export const ActivityFieldComponent: TextFieldClientComponent = ({ path }) => {

    const [ type, setType ] = React.useState<'' | 'zunzun_dialog' | 'correct_image'>('');
    const { value, setValue } = useField<any>({ path })

    const handleOnChangeActivityType = (e : any) => {
        setType(e.target.value)
    }

    const renderActivityByType = () => {
        if (type === 'zunzun_dialog') {
            return (
                <ZunZunDialog 
                    text={
                        <>
                            <input
                            onChange={e => setValue(String(e.target.value))}
                            value={value} />
                        </>
                    }
                    button={{ 
                        title: "Button", 
                        accessibilityLabel: "Button", 
                        onClick: () => { /* Your click handler logic here */ },
                        position: 'relative' 
                    }} 
                />
            );
        } else if(type === 'correct_image') {
            return (<></>)
        }
    }

    return (
        <div>
            <label>Activity</label>
            <select onChange={e => handleOnChangeActivityType(e)}>
                <option value="">Select an activity type</option>
                <option value="zunzun_dialog">Zunzun Dialog</option>
                <option value="correct_image">Correct Image</option>
            </select>
            {type !== '' && renderActivityByType()}
        </div>
    );
};

export default ActivityFieldComponent;