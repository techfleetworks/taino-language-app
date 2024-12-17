import NameInput from "@/components/auth/NameInput";
import PageContainer from "@/components/common/PageContainer";

export default function WriteYourName() {
    return (
        <PageContainer>
            <NameInput 
                value={''}
            placeholderTextColor={''}
            onChangeText={() => {}}
            />
        </PageContainer>
    )
}