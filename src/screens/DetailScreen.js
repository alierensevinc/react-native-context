import React, {useContext, useState} from "react";
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {noteActions, NoteContext, NoteDispatchContext} from "../context/NoteContext";

const DetailScreen = ({route, navigation}) => {
    const [id, setId] = useState(route.params.item.id);
    const [note, setNote] = useState(route.params.item.text);

    const dispatch = useContext(NoteDispatchContext);

    const updateNote = () => {
        dispatch(noteActions.updateNote({id: id, text: note}));
        setNote("");
        navigation.goBack();
    }

    return (
        <View style={styles.view}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={note} onChangeText={(input) => setNote(input)}/>
                <TouchableOpacity onPress={updateNote}>
                    <Text style={styles.label}>Add Note</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'gray',
        color: 'white'
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        color: 'white'
    },
    label: {
        fontSize: 20,
        marginTop: 10,
        color: 'white'
    },
    input: {
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white'
    },
    listContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 40,
        marginRight: 40,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    listItemText: {
        fontSize: 16,
        color: 'white'
    },
    icon: {
        fontSize: 18,
        color: 'white'
    }
});

export default DetailScreen;