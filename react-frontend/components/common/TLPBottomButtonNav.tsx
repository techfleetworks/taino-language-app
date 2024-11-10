import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

type TLPBottomButtonNavProps = {
    style?: { [key: string]: any }
    children: React.ReactNode;
}

export const TLPBottomButtonNav : React.FC<TLPBottomButtonNavProps> = ({ style, children } : TLPBottomButtonNavProps) => {
    return (
        <SafeAreaView>
          <View style={[styles.buttonWrapper, style]}>
              {children}
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
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
        paddingVertical: 48,
        paddingHorizontal: 32,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
      },
})

