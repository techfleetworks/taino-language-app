import React from 'react';

type buttonprops = {
  title: string;
  titleColor?: string; 
  titleSize: number; 
  backgroundColor?: string; 
  width?: string;
  height?: string;
  zIndex?: number;
  accessibilityLabel: string; 
  position?: 'relative' | 'absolute' | 'static';
  disabled?: boolean;
  onPress: () => void; // Changed to a simpler function type
  buttonText: any;
  icon?: any; // Adjust icon type as needed
  otherProps?: any; // Adjust type as needed
};

export default function StyledButton(buttonProps: buttonprops): JSX.Element {
  const {
    title,
    titleColor,
    titleSize,
    backgroundColor,
    width,
    height,
    zIndex,
    disabled,
    accessibilityLabel,
    position,
    onPress,
    icon,
    buttonText,
    otherProps
  } = buttonProps;

  return (
    <div
      onClick={onPress}
      style={{
        width: width,
        height: height,
        zIndex: zIndex,
        position: position,
        backgroundColor: backgroundColor,
        opacity: disabled ? 0.5 : 1, // Handle disabled state
        cursor: disabled ? 'not-allowed' : 'pointer', // Change cursor based on disabled state
        display: 'flex', // Use flexbox for layout
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
        border: 'none', // Remove default border
        borderRadius: '4px', // Add border radius for rounded corners
        padding: '10px', // Add padding for better touch area
        ...otherProps // Spread other props
      }}
      aria-label={accessibilityLabel}
    >
      {/* Replace with a web icon component */}
      {icon && <span className="icon-class">{icon}</span>} {/* Adjust icon rendering */}
      <span style={{ color: titleColor, fontSize: titleSize }}>
        {title}
      </span>
    </div>
  );
}

// Default props can remain the same, but adjust types if necessary
StyledButton.defaultProps = {
  title: 'Button',
  titleColor: '#000', // Adjust to a web color
  titleSize: 14,
  backgroundColor: '#007bff', // Adjust to a web color
  width: '320px',
  height: 'auto', // Set height to auto for flexibility
  accessibilityLabel: 'button',
  position: 'relative',
  zIndex: 1,
  disabled: false,
};
