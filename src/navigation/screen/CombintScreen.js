import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, Easing, Animated, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

var { width } = Dimensions.get('window');

class CombineScreen extends Component {

    constructor(props) {
        super(props);
        this.fadeInOpacity = new Animated.Value(0);
        this.state = {};
        this.state.move = new Animated.Value(0);
        this.state.moveBoxRed = new Animated.Value(0);
        this.state.moveBoxBlue = new Animated.Value(0);

        this.state.scale = this.state.move.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 2, 1],
        });
    }

    opacity() {
        this.fadeInOpacity.setValue(0);
        Animated.timing(
            this.fadeInOpacity,
            {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear
            }    
        ).start();
    }

    sequence() {
        this.state.moveBoxRed.setValue(0);
        this.state.moveBoxBlue.setValue(0);
        this.fadeInOpacity.setValue(0);
        
        Animated.sequence([
            Animated.timing(
                this.state.moveBoxRed,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.fadeInOpacity,
                {
                    toValue: 1,
                    duration: 2500,
                    easing: Easing.linear
                }    
            ),    
            Animated.timing(
                this.state.moveBoxBlue,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                }
            )
        ]).start();
    }

    parallel() {
        this.fadeInOpacity.setValue(0);
        this.state.moveBoxRed.setValue(0);
        this.state.moveBoxBlue.setValue(0);
        Animated.parallel([
            Animated.timing(
                this.state.moveBoxRed,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.fadeInOpacity,
                {
                    toValue: 1,
                    duration: 2500,
                    easing: Easing.linear
                }    
            ),    
            Animated.timing(
                this.state.moveBoxBlue,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                }
            )
        ]).start();
    }

    onPressParallel(){
        this.parallel();
    }

    onPressSequence(){
        this.sequence();
    }

    onPressOpacity(){
        this.opacity();
    }

    render() {        
        const opacity = this.fadeInOpacity.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });

        const moveBoxRed = this.state.moveBoxRed.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, width - 50, 0]
        })

        const moveBoxBlue = this.state.moveBoxBlue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, -width + 50, 0]
        })

        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={this.onPressOpacity.bind(this)}
                            style={[
                                styles.button,
                                {marginLeft: 10,}
                            ]}
                            >
                        <Text style={styles.textTitle}>Fade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.onPressSequence.bind(this)}
                            style={[
                                styles.button,
                                {marginLeft: 10,}
                            ]}
                            >
                        <Text style={styles.textTitle}>Sequence</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.onPressParallel.bind(this)}
                            style={[
                                styles.button,
                                {marginLeft: 10,}
                            ]}
                            >
                        <Text style={styles.textTitle}>Parallel</Text>
                    </TouchableOpacity>

                </View>

                <Animated.View style={[
                        {
                            opacity
                        },
                    ]}>
                    <Text style={ styles.textTitle }
                        >Wellcome to Animation !</Text>
                </Animated.View>

                <Animated.View style={{
                    transform:[{translateX:moveBoxRed}],
                    height:50,
                    width:50,
                    zIndex: 100,
                    alignSelf: 'flex-start',
                    marginBottom: 20,
                    backgroundColor:'red'}}
                />

                <Animated.View style={{
                    transform:[{translateX:moveBoxBlue}],
                    height:50,
                    width:50,
                    zIndex: 100,
                    alignSelf: 'flex-end',
                    backgroundColor:'blue'}}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },   
    buttonContainer: {
        flexDirection: "row",
        marginBottom: 70,
    },
    button: {
        backgroundColor: 'powderblue',
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textTitle: {
        fontSize: 15,
        marginBottom: 10,
        color: 'black',
    }
});

export default CombineScreen;