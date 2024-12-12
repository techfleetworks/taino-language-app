"use client"
import React, { useRef } from 'react';
import StyledButton from './TLPButton.web';
import Colors from './Colors';
import { TLPBottomButtonNav } from './TLPBottomButtonNav.web';
import Image from 'next/image';
import { TextareaField } from 'payload';

export interface CustomStyles extends React.CSSProperties {
  imageContainer?: React.CSSProperties; // Add custom properties as needed
}

interface ZunZunDialogProps {
    text: string | TextareaField;
    button: ZunZunDialogButtonProps
    onChange: () => void
}

interface ZunZunDialogButtonProps {
    title: string;
    style?: any;
    position: 'relative' | 'absolute' | 'static' | undefined;
    accessibilityLabel: string | 'Button';
    onClick: () => void,
}

export default function ZunZunDialog({ text, button } : ZunZunDialogProps) {

    const buttonRef = useRef<any>(null);
  
    return (
       <div style={styles.container}>
          <div style={styles.imageContainer}>
            <Image style={styles.image} alt="zunzun" src={require('./humming_bird.png')} />
          </div>
  
          <div style={styles.introTextWrapper}>
            <div style={styles.introText}>
              
                {/* {typeof Text === 'string' ? text ? <textarea></textarea>} */}
              </div> 
          </div>
      
          <TLPBottomButtonNav>
            <StyledButton
            title={button.title}
            titleSize={16}
            height={'48'}
            accessibilityLabel={button.accessibilityLabel}
            onPress={button.onClick}
            icon={false}
            buttonText={styles.buttonText}
            otherProps={{...styles.buttonNav, ref: buttonRef}} 
            zIndex={1}
            position={button.position}
            />
          </TLPBottomButtonNav>
      </div>
    );
}

const styles: { [key: string]: CustomStyles } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '8px',
    },
    progressWrapper: {
      position: 'absolute',
      top: 0,
    },
    imageContainer: {
      position: 'relative',
      paddingTop: '192px',
      paddingBottom: '144px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
    },
    image: {
        width: '133.598px',
        height: '128px',
    },
    introTextWrapper: {
      display: 'flex',
      width: '352px',
      paddingTop: '24px',
      paddingBottom: '24px',
      paddingLeft: '16px',
      paddingRight: '16px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '16px',
      borderRadius: '8px',
      backgroundColor: Colors.surface
    },
    introText: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '28px',
    },  
    buttonNav: {
      display: 'flex',
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      alignSelf: 'stretch',
      borderRadius: '8px',
    },
    buttonText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '1',
    },
    buttonWrapper: {
      display: 'flex',
      width: 'auto',
      paddingTop: '48px',
      paddingBottom: '48px',
      paddingLeft: '32px',
      paddingRight: '32px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '16px',
    },
    text: {
      color: Colors.text.onSurface,
      fontFamily: "Inter",
      fontSize: '24px',
      fontStyle: "normal",
      fontWeight: "600",
    }
}