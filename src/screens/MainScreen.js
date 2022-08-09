import React, {useState} from "react";
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {noteActions, useNoteContext} from "../context/NoteContext";
import {Feather} from "@expo/vector-icons";

const MainScreen = ({navigation}) => {
    const [note, setNote] = useState('');
    const [state, dispatch] = useNoteContext();

    const addNote = () => {
        dispatch(noteActions.saveNote({id: note, text: note}));
        setNote("");
    }

    const deleteNote = (item) => {
        dispatch(noteActions.deleteNote(item))
    }

    return (
        <View style={styles.view}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={note} onChangeText={(input) => setNote(input)}/>
                <TouchableOpacity onPress={addNote}>
                    <Text style={styles.label}>Add Note</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <FlatList data={state} keyExtractor={note => note.id} renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.push('Detail', {item})
                        }}>
                            <View style={styles.listItem}>
                                <Text style={styles.listItemText}>{item.text}</Text>
                                <TouchableOpacity onPress={() => deleteNote(item)}>
                                    <Feather style={styles.icon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}/>
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
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
        color: 'white'
    },
    label: {
        fontSize: 20,
        paddingLeft: 10,
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

export default MainScreen;