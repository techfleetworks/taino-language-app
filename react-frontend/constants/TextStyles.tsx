export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export default {
    heading1: {
        color: 'black',
        fontSize: 32,
        fontFamily: 'Arial',
        fontWeight: '700' as FontWeight,
        wordWrap: 'break-word'
    },
    heading2: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: '700' as FontWeight,
        wordWrap: 'break-word'
    },
    button1: {
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: '600' as FontWeight,
        wordWrap: 'break-word'
    },
    button2: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: '600' as FontWeight,
        wordWrap: 'break-word'
    },
    body: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: '400' as FontWeight,
        lineHeight: 28,
        wordWrap: 'break-word'
    },
    caption: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: '400' as FontWeight,
        wordWrap: 'break-word'
    },   
    button2Underlined: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: '600' as FontWeight,
        textDecoration: 'underline',
        wordWrap: 'break-word'
    }
}