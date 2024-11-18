import { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import VocabularyOverviewComponent from '@/components/VocabularyOverviewComponent';


const VocabularyOverview = () => {
    const lessonId = '482F80CA-D720-41C8-945D-93A6CD90F487'; 

    return (   
            <VocabularyOverviewComponent lessonId={lessonId} />
    );
}

export default VocabularyOverview;

