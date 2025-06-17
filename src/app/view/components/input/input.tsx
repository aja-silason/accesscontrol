import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Styles } from "./style"
import SearchIconSvg from "../svg/searchIconSvg"
import { Colors } from "@/app/view/styles/color"
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import RNPickerSelect from 'react-native-picker-select';

type inputType = {
    place: string,
    inputType?: string,
    value: string,
    onChangeText?: () => void,
    secureText?: boolean
}

const InputContainer = ({children, ...rest}: any) => {
    return (
        <View style={Styles.container} {...rest}>
            {children}
        </View>
    )
}
 
const Field = ({children}: any) => {
    return (
        <View>
            <Text style={Styles.childText}>{children}</Text>
        </View>
    )
}

const Input = ({place, inputType, secureText, value, onChangeText}: any) => {
    return (
        <TextInput textContentType="emailAddress" style={Styles.input} placeholder={place} secureTextEntry={secureText}  value={value} onChangeText={(value) => onChangeText(value)}/>
    )
}

InputContainer.Field = Field;
InputContainer.Input = Input; 

export  {InputContainer}





const SelectContainer = ({children, ...rest}: any) => {
    return (
        <View style={Styles.container} {...rest}>
            {children}
        </View>
    )
}
 
const FieldSelect = ({children}: any) => {
    return (
        <View>
            <Text style={Styles.childText}>{children}</Text>
        </View>
    )
}

const Select = (data: any) => {
    const [value, setValue] = useState(data[0]?.value);

    // if(!value) return null;

    return (
        <RNPickerSelect
        onValueChange={(value: any) => setValue(value)}
        items={data}
        value={value}
        placeholder={{ label: 'Selecione a Distribuidora', value: null }}
      />
    )
}

SelectContainer.Field = FieldSelect;
SelectContainer.Select = Select; 

export {SelectContainer}





type SearchProp = {
    placeholder?: string
}

export const SearchInput = ({placeholder = ""}: SearchProp) => {
    return (
        <View style={Styles.searchView}>
            <SearchIconSvg/>
            <TextInput style={Styles.searchInput} placeholder={`Pesquisar ${placeholder}`}/> 
        </View>
    )
}


export const OneDigiteInput = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        focus: () => {
        textInputRef.current?.focus();
        },
    }));
    
    const textInputRef = useRef<TextInput>(null);

    return (
        <View>
            <TextInput style={Styles.oneDigiteInput} maxLength={1} textContentType="creditCardNumber" keyboardType="name-phone-pad" ref={textInputRef} {...props}/>
        </View>
    )
});

type propsTextarea = {
    title: string,
    place: string,
    onChangeText: any 
    value: string
}

export const  Textarea = ({title, place, onChangeText, value}: propsTextarea) => {
    return(
        <View>
            <Text style={Styles.childText}>{title}</Text>
            <ScrollView style={Styles.textaarea}>
                <TextInput
                multiline
                value={value}
                onChangeText={onChangeText}
                style={Styles.area} placeholder={place}
                />
            </ScrollView>
        </View>
    )
}