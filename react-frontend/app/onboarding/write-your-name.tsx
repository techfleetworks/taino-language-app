import React from "react";
import NameInput from "@/components/auth/NameInput";
import PageContainer from "@/components/common/PageContainer";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { TLPBottomButtonNav as BottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import  { TLPButton as StyledButton } from '@/components/common/TLPButtonV2'
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native";

export default function WriteYourName() {

    const { control, watch, handleSubmit } = useForm({
        defaultValues: {
            name: ""
        }
    })

    const onSubmit = () => {
        console.log("name")
        //validate that name field is not empty
        if (watch('name').trim() === "") {
            // Handle validation error (e.g., show a message)
            return;
        }

        //if success, pass name to create-account route
        // router.setParams({ name: watch('name') })
        router.push(`/onboarding/create-account?name=${encodeURIComponent(watch('name'))}`);
    }

    return (
        <PageContainer>
            <NameInput 
                control={control}
            />
            {/* //TODO: update this so that it's using the TLPBottomButtonNav and StyledButton components */}
            <BottomButtonNav>
                <StyledButton 
                    disabled={watch('name').trim() === ''}
                    title={'Continue'}
                    onPress={handleSubmit(onSubmit)}
                    />
            </BottomButtonNav>
        </PageContainer>
    )
}