import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import DetailScreen from "./src/screens/DetailScreen";
import {NoteProvider} from "./src/context/NoteContext";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NoteProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main" component={MainScreen}/>
                    <Stack.Screen name="Detail" component={DetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NoteProvider>
    );
}
