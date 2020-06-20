import React, { useState } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

import SwipeCard from "./SwipeCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Swipe = (props) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  let position = new Animated.ValueXY();

  const getCardStyle = () => {
    const tempPosition = position;
    const rotate = tempPosition.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });
    return {
      ...tempPosition.getLayout(),
      transform: [{ rotate }],
    };
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
    }).start();
  };

  const onSwipeComplete = (direction) => {
    //const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = props.data[currentCardIndex];
    console.log(item)
    direction === "right" ? props.onSwipeRight(item) : props.onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    setCurrentCardIndex((index) => index + 1);
  };

  const swipe = (direction) => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(onSwipeComplete(direction));
  };

  const panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      if (gestureState.dx > SWIPE_THRESHOLD) {
        swipe("right");
      } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        swipe("left");
      } else {
        resetPosition();
      }
    },
  });

  return props.data
    .map((item, index) => {
      if (index < currentCardIndex) {
        return null;
      }
      if (index === currentCardIndex) {
        //console.log('here');
        return (
          <Animated.View
            key={index}
            style={[styles.main, getCardStyle()]}
            {...panResponder.panHandlers}
          >
            <SwipeCard
              gender={item.gender}
              age={item.age}
              imageUrl={item.images[0]}
              location={item.location}
              onLeftButtonPress={swipe.bind(this, 'left')}
              onRightButtonPress={swipe.bind(this, 'right')}
            />
          </Animated.View>
        );
      } else {
        let nextStyles = null;
        if (index === currentCardIndex + 1) {
          nextStyles = {
            top: 20,
            width: "80%",
            opacity: 0.5,
          };
        }
        return (
          <Animated.View style={{ ...styles.main, ...nextStyles }} key={index}>
            <SwipeCard
              gender={item.gender}
              age={item.age}
              location={item.location}
              image={item.images[0]}
            />
          </Animated.View>
        );
      }
    })
    .reverse();
};

export default Swipe;

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    width: "95%",
    height: "95%",
    // borderColor: "green",
    // borderWidth: 3,
    borderRadius: 30,
    elevation: 0,
    marginHorizontal: 18,
    overflow: "hidden",
    backgroundColor: "white",
  },
});
