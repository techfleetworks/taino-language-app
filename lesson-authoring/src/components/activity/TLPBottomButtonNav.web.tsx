"use dom"
import React from "react";

type TLPBottomButtonNavProps = {
    style?: { [key: string]: any }
    children?: React.ReactNode;
}

export const TLPBottomButtonNav = ({ children } : TLPBottomButtonNavProps) => {
    return (
        <div style={{...styles.buttonWrapper, flexDirection: styles.buttonWrapper.flexDirection as React.CSSProperties['flexDirection']}}>
            {children}
        </div>
    )
}

const styles = {
    buttonNav: {
        display: 'flex',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        alignSelf: 'stretch',
        borderRadius: 8,
      },
      buttonWrapper: {
        display: 'flex',
        width: 'auto',
        padding: '48px 32px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16
      }
}

