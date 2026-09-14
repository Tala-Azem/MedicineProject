import { Dimensions, Image, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

export function SwipeableList() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        showPagination
      >
        <View style={[styles.child, { width: screenWidth }]}>
          <Image
            source={require("../assets/swipe1.jpg")}
            style={[styles.swipe, { height: screenWidth * 0.6 }]}
          />
        </View>
        <View style={[styles.child, { width: screenWidth }]}>
          <Image
            source={require("../assets/swipe4.jpg")}
            style={[styles.swipe, { height: screenWidth * 0.6 }]}
          />
        </View>
        <View style={[styles.child, { width: screenWidth }]}>
          <Image
            source={require("../assets/swipe2.jpg")}
            style={[styles.swipe, { height: screenWidth * 0.6 }]}
          />
        </View>
        <View style={[styles.child, { width: screenWidth }]}>
          <Image
            source={require("../assets/swipe3.webp")}
            style={[styles.swipe, { height: screenWidth * 0.6 }]}
          />
        </View>
      </SwiperFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  child: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  swipe: {
    width: "100%",
  },
});
