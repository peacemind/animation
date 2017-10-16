import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, Image, Animated, StyleSheet,
    Easing, TouchableOpacity

    } from 'react-native';

class AnimationScreen extends Component {

    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0);
        this.scaleValue = new Animated.Value(0);
        this.opacityValue = new Animated.Value(0);
        this.wheelValue = new Animated.Value(0.5);
    }

    spin(){
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4500,
                easing: Easing.linear
            }
        ).start();
    }

    scale() {
        this.scaleValue.setValue(0);
        Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.easeOutBack
            }
        ).start();
    }

    opacity() {
        this.opacityValue.setValue(0);
        Animated.timing(
            this.opacityValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start();
    }

    wheel() {
        this.wheelValue.setValue(0);
        Animated.spring(
            this.wheelValue,
            {
                toValue: 1,
                friction: 0.7,
                tension: 0.4
            }
        ).start();
    }

    onPressSpring() {
        this.wheel();
    }

    onPressScale() {
        this.scale();
    }

    onPressRotate() {
        this.spin();
    }

    onPressOpacity(){
        this.opacity();
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        const nearFar = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 2, 1]
        });

        const opacity = this.opacityValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });

        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={this.onPressScale.bind(this)}
                        style={[styles.button]}
                        >
                        <Text style={styles.textTitle}>Scale</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity 
                        onPress={this.onPressRotate.bind(this)}
                        style={[
                            styles.button,
                            {marginLeft: 10,}
                        ]}
                        >
                        <Text style={styles.textTitle}>Rotate</Text>
                    </TouchableOpacity>
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
                        onPress={this.onPressSpring.bind(this)}
                        style={[
                            styles.button,
                            {marginLeft: 10,}
                        ]}
                        >
                        <Text style={styles.textTitle}>Spring</Text>
                    </TouchableOpacity>

                </View>

                  <Animated.Image 
                      style={[
                        styles.spinner,
                        {opacity},
                        {
                            transform: [
                                {rotate: spin},
                                {scale: nearFar},
                                {scale: this.wheelValue}
                            ]
                        }
                      ]}
                      source={require("../../images/dharmaWheel291-296.png")}
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
        flexDirection: "row"
    },
    spinner: {
        marginTop: 100,
        alignSelf: 'center',
        width: 150,
        height: 150
    },
    button: {
        backgroundColor: 'powderblue',
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textTitle: {
        fontSize: 15,
        marginBottom: 10,
    }
});

export default AnimationScreen;