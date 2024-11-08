import NameInput from '@/components/NameInput';
import Colors from '@/constants/Colors';
import { useState } from 'react';

export default function NameInputScreen() {
    const [name, setName] = useState('');
    return <NameInput 
        value={name}
        placeholderTextColor={Colors.onBackground.mediumEmphasis}
        onChangeText={setName}
        keyboardType="default"
    />
}