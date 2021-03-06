import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

import { FloatingAction } from "react-native-floating-action";

const colors = {
  themeColor: "#FDF5F4",
  white: "#fff",
  pink: "#EE6457",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#D8D6D7",
};

const tasks = [
  {
    task: "Clock in",
    icon: "hiking",
    theme: "#FDF5F4",
    stamp: "Today, 7 AM",
  },

  {
    task: "Team Meeting",
    icon: "account-tie",
    theme: "#37003C",
    stamp: "Today, 10 AM",
  },

  {
    task: "Move Equipment",
    icon: "weight",
    theme: "#008b8b",
    stamp: "Today, 2.30 PM",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: color.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems:"center",
        justifyContent: "space-between"
      }}
    >
      <View>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ backgroundColor: color.themeColor, flexDirection: "row" }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 16 }}>{task}</Text>
        <Text style={{ color: colors.greyish }}>{stamp}</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="pencil"
              size={30}
              style={{ color: colors.pink }}
            />

                <MaterialCommunityIcons
              name="trash-can"
              size={30}
              style={{ color: colors.pink }}
            />
            </View>
    </View>
  );
};

const actions = [
  {
    text: "Add Task",
    icon: require("../assets/logo.png"),
    name: "bt_accessibility",
    position: 2,
  },
  {
    text: "Send Message",
    icon: require("../assets/logo.png"),
    name: "bt_language",
    position: 1,
  },
  {
    text: "Create Reminder",
    icon: require("../assets/logo.png"),
    name: "bt_room",
    position: 3,
  },
];

const TasksScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Entypo name="text" size={30} style={{ color: colors.pink }} />
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.pink }}
            />
            <AntDesign name="user" size={30} style={{ color: colors.pink }} />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ color: color.white, fontSize: 30 }}>{"Hello"}</Text>

          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: colors.white }}
            />
          </View>
        </View>

        <View
          style={{
            padding: 20,
            flexDirection: "row",
            backgroundColor: colors.white,
            justifyContent: "space-between",
            alignItems: "center",
            borderTopLeftRadius: 20,
          }}
        >
          <Text style={{ fontSize: 24 }}>Tasks</Text>
          <MaterialCommunityIcons
            name="plus"
            size={30}
            style={{
              color: colors.pink,
              borderRadius: 20,
              marginHorizontal: 8,
            }}
          />
        </View>

        <ScrollView>
          {tasks.map((task) => (
            <Task
              task={task.task}
              icon={task.icon}
              theme={task.theme}
              stamp={task.stamp}
            />
          ))}
        </ScrollView>
      </View>

      <View style={{padding: 50}}>
        <FloatingAction
          actions={actions}
          onPressItem={(name) => {
            console.log(`selected button: ${name}`);
          }}
        />
      </View>
    </View>
  );}

export default TasksScreen;
