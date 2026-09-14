import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SwipeableList } from "../components";
import { Colors } from "../constants";
export function UserHome({ navigation, route }) {
  const screenWidth = Dimensions.get("window").width;

  function Title({ text }) {
    return (
      <>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 10,
          }}
        />

        <Text style={styles.title}>{text}</Text>
      </>
    );
  }

  function GoalItem({ text, children }) {
    return (
      <View style={styles.goalItem}>
        {children}
        <Text style={styles.goalText}>{text}</Text>
      </View>
    );
  }

  function SocialItem({ text, children }) {
    return (
      <View style={styles.socialItem}>
        {children}
        <Text style={styles.socialText}>{text}</Text>
      </View>
    );
  }

  return (
    <View>
      <SwipeableList />
      <TouchableOpacity
        style={[
          styles.floatingButtonUser,
          {
            width: 160,
            marginTop: screenWidth / 2.75,
            marginRight: (screenWidth - 160) / 2,
            marginLeft: (screenWidth - 160) / 2,
          },
        ]}
        onPress={() => navigation.navigate("البحث")}
      >
        <Text style={{ fontSize: 20, color: "white" }}>انتقل إلى البحث</Text>
      </TouchableOpacity>

      <Title text={"اهداف دوائي:"} />

      <View style={styles.goals}>
        <GoalItem text="توفيرالوقت والجهد">
          <Entypo name="back-in-time" size={42} color="black" />
        </GoalItem>
        <GoalItem text="تسهيل البحث عن الدواء">
          <MaterialCommunityIcons
            name="database-search"
            size={42}
            color="black"
          />
        </GoalItem>
        <GoalItem text="تسهيل التواصل بين المريض و الصيدلية">
          <MaterialIcons
            name="connect-without-contact"
            size={42}
            color="black"
          />
        </GoalItem>
      </View>

      <Title text={"تواصل معنا:"} />
      <View style={styles.social}>
        <View style={styles.socialLeft}>
          <SocialItem text={"e_coders3"}>
            <AntDesign name="instagram" size={42} color="#f96981" />
          </SocialItem>

          <SocialItem text={"056 818 9539"}>
            <FontAwesome name="whatsapp" size={42} color="#05a805" />
          </SocialItem>
        </View>

        <View style={styles.socialRight}>
          <SocialItem text={"e_coders3"}>
            <FontAwesome5 name="facebook" size={42} color="#1d5ed6" />
          </SocialItem>
          <SocialItem text={"e3.coders@gmail.com"}>
            <MaterialCommunityIcons name="gmail" size={42} color="red" />
          </SocialItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButtonUser: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryUser100,
    padding: 12,
    height: 55,
    borderRadius: 14,
    color: "white",
  },
  title: {
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryUser50,
    width: "100%",
  },

  social: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  socialLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "50%",
  },
  socialRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "50%",
  },
  socialItem: {
    marginLeft: 10,
    marginTop: 24,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  socialText: {
    fontSize: 14,
    marginLeft: 8,
  },

  goals: {
    display: "flex",
    width: "100%",
    marginTop: 24,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  goalItem: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  goalText: {
    fontSize: 14,
    marginLeft: 8,
  },
});
