import { StyleSheet, Text, View } from "react-native";

export function UserHelp({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        • للبحث عن دواء معين يمكنك الضغط على الزر -انتقل إلى البحث-
      </Text>
      <Text style={styles.text}>
        • بعد انتقالك لصفحة البحث اضغط على صندوق البحث وادخل اسم الدواء المطلوب
      </Text>
      <Text style={styles.text}>
        • عند ايجاد الدواء المناسب و الضغط عليه ستظهر معلومات عن هذا الدواء
        وترتيب الصيدليات الموجود فيها هذا الدواء من الأقرب إلى الأبعد
      </Text>
      <Text style={styles.text}>• يمكنك البحث عن معدات التأهيل</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    paddingTop: 15,
  },
  text: {
    textAlign: "right",
    fontSize: 25,
    marginTop: 18,
    marginHorizontal: 14,
  },
});
