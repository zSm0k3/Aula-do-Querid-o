import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styles.textTitle}>Danilete</Text>
            <Text>25/07/2024</Text>
            <Text>Segundo Semestre</Text>
        </View>
    );
}