import React, { useRef } from 'react';
import {Text, 
        StyleSheet, 
        View, 
        Image,
} from 'react-native';
import StyledButton from '@/components/common/TLPButton';
import Colors from '@/constants/Colors';
import { TLPBottomButtonNav } from '@/components/common/TLPBottomButtonNav';

type ZunZunDialogProps = {
  text: string,
  buttonText?: string,
  onButtonClick?: () => void
}

export default function ZunZunDialog({ text, buttonText, onButtonClick } : ZunZunDialogProps) {
    const buttonRef = useRef<any>(null);
  
    return (
       <View style={[styles.zunzunContainer]}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('@/assets/images/zunzun.png')} />
          </View>
  
         <View style={styles.dialogueContainer}>
          <View style={[styles.dialogueTextWrapper]}>
              <Text style={styles.dialogueText}>
                  {text}
                </Text> 
            </View>
         </View>
      
          <TLPBottomButtonNav>
            <StyledButton
            title={buttonText ? buttonText : 'Continue'}
            titleSize={16}
            height={48}
            accessibilityLabel={'Button'}
            onPress={onButtonClick}
            icon={false}
            buttonText={styles.buttonText}
            otherProps={{...styles.buttonNav, ref: buttonRef}} 
            zIndex={1}
            position={'relative'}
            />
          </TLPBottomButtonNav>
        
      </View>
    );
}

const styles = StyleSheet.create({
    zunzunContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems:'center',
      padding: 8,
      position: 'relative',
      backgroundColor: Colors.background
    },
    imageContainer: {
      display: 'flex',
      position: 'relative',
      padding: 64,
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
    },
    image: {
        width: 128,
        height: 128,
    },
    dialogueContainer: {
      paddingTop: 96,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start'

    },
    dialogueTextWrapper: {
      display: 'flex',
      width: 352,
      paddingHorizontal: 16,
      paddingVertical: 24,
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 16,
      borderRadius: 8,
      backgroundColor: Colors.surface
    },
    dialogueText: {
      fontFamily: 'Inter',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 28,
    },  
    buttonNav: {
      display: 'flex',
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      alignSelf: 'stretch',
      borderRadius: 8,
    },
    buttonText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 1,
    },
    buttonWrapper: {
      display: 'flex',
      width: 'auto',
      paddingVertical: 48,
      paddingHorizontal: 32,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16,
    },
    text: {
      color: Colors.text.onSurface,
      fontFamily: "Inter",
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: "600",
    }
});