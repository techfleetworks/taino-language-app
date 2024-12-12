"use client"
import React from 'react';
import { ClientFieldProps } from 'payload';
import ZunZunDialog from './ZunZunDialog.web';

const ActivityField: React.FC<ClientFieldProps> = ({ field, value, onChange }) => {
    // Initialize state from the existing value or create a new object
    const [activityData, setActivityData] = React.useState(value || {
        type: '',
        details: {}
    });

    // Handle type selection
    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value as '' | 'zunzun_dialog' | 'correct_image';
        
        // Update the entire activity data when type changes
        const updatedData = {
            type: newType,
            details: {} // Reset details when type changes
        };
        
        setActivityData(updatedData);
        onChange(updatedData);
    };

    // Handle specific activity details
    const handleActivityDetailsChange = (details: any) => {
        const updatedData = {
            ...activityData,
            details
        };
        
        setActivityData(updatedData);
        onChange(updatedData);
    };

    // Render activity-specific input components
    const renderActivityByType = () => {
        switch (activityData.type) {
            case 'zunzun_dialog':
                return (
                    <ZunZunDialog 
                        text={activityData.details?.text || ""} 
                        button={{ 
                            title: activityData.details?.buttonTitle || "Button", 
                            accessibilityLabel: activityData.details?.buttonAccessibility || "Button", 
                            onClick: () => { /* Your click handler logic here */ },
                            position: 'relative' 
                        }}
                        onChange={(dialogDetails : any) => handleActivityDetailsChange(dialogDetails)}
                    />
                );
            case 'correct_image':
                return (
                    <div>
                        {/* Add correct image specific inputs */}
                        <input 
                            type="text" 
                            placeholder="Image URL"
                            value={activityData.details?.imageUrl || ''}
                            onChange={(e) => handleActivityDetailsChange({ 
                                ...activityData.details, 
                                imageUrl: e.target.value 
                            })}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <label>Activity</label>
            <select 
                value={activityData.type} 
                onChange={handleTypeChange}
            >
                <option value="">Select an activity type</option>
                <option value="zunzun_dialog">Zunzun Dialog</option>
                <option value="correct_image">Correct Image</option>
            </select>
            {activityData.type !== '' && renderActivityByType()}
        </div>
    );
};

export default ActivityField;