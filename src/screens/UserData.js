import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Card } from '@rneui/themed';
import Courses from "../api/Courseapi";


const UserData = ({navigation}) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);
  const [savedCount, setSavedCount] = useState(7);
  const [completedCount, setCompletedCount] = useState(10);
  const [verifiedCount, setVerifiedCount] = useState(4);
  const [approvedCount, setApprovedCount] = useState(15);

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.mediumheader}>Instructor : {item.Instructorname}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <Text style={styles.mediumheader}>Enrollment : {item.Enrollmentstatus}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("CourseDetails", {
                  courseId: item.id,
                })
              }>
              <Text style={styles.buttonText}> course Details </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContain}>
    <View style={styles.container}>

            <View style={styles.cardContainer}>
                <Card elevation={7} containerStyle={{ borderRadius: 10, backgroundColor: 'lightblue' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Course')}>
                        <View style={styles.card} >
                            <Text style={styles.NormalText}>Completed Courses</Text>
                            <Text style={styles.countText}>{savedCount}</Text>
                        </View>
                    </TouchableOpacity>

                </Card>
                <Card elevation={7} containerStyle={{ borderRadius: 10, backgroundColor: 'lightblue' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Course')}>
                        <View style={styles.card} >
                            <Text style={styles.NormalText}>Incomplete Courses</Text>
                            <Text style={styles.countText}>{completedCount}</Text>
                        </View>
                    </TouchableOpacity>
                </Card>

            </View>
            <View style={styles.cardContainer}>
                <Card elevation={7} containerStyle={{ borderRadius: 10, backgroundColor: 'lightblue' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Course')}>
                        <View style={styles.card} >
                            <Text style={styles.NormalText}>Course Inprogress</Text>
                            <Text style={styles.countText}>{verifiedCount}</Text>
                        </View>
                    </TouchableOpacity>
                </Card>

                <Card elevation={7} containerStyle={{ borderRadius: 10, backgroundColor: 'lightblue' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Course')}>
                        <View style={styles.card} >
                            <Text style={styles.NormalText}>Favourites</Text>
                            <Text style={styles.countText}>{approvedCount}</Text>
                        </View>
                    </TouchableOpacity>
                </Card>
            </View>
        </View>
      <Text style={styles.mainHeader}>Enrolled Courses</Text>

      <FlatList
      style={{marginBottom: 450}}
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
      
    />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContain:{
    flex: 1,
  },
  graphStyle: {
    marginTop: 300,
    borderRadius: 20,
  },
  mainContainer: {
   
    paddingVertical: 10,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "JosefinSans_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
  },
  container: {
   // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
},
card: {
    width: 130,
    height: 130,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginHorizontal: 5,
},
countText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 40,
    fontWeight: 'bold',
    color: "#1B75BB",
    fontFamily: 'zwodrei',
},
graphStyle: {
    borderRadius: 20,
},
NormalText: {
    color: "#05726b",
    fontFamily: 'zwodrei',
},
cardImage: {
  width: 250,
  height: 250,
  aspectRatio: 1,
  padding:10,
  marginStart:55,
},

mediumheader: {
  fontSize: 18,
  color: "#344055",
  paddingBottom: 15,
  textAlign: "center",
  fontFamily: "Nunito_600SemiBold",
},
courseContainer: {
  width:400,
  padding: 2,
  backgroundColor: "rgba(255, 255, 255, 0.90)",
  textAlign: "center",
  borderRadius: 5,
  shadowColor: "grey",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  elevation: 8,
  marginVertical: 30,
},
mainHeader: {
  fontSize: 22,
  color: "#344055",
  textTransform: "uppercase",
  // fontWeight: 500,
  paddingBottom: 15,
  textAlign: "center",
  fontFamily: "Nunito_600SemiBold",
},
description: {
  textAlign: "left",
  fontFamily: "JosefinSans_400Regular",
  paddingBottom: 15,
  lineHeight: 20,
  fontSize: 16,
  color: "#7d7d7d",
},
buttonContainer: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
},
buttonStyle: {
  backgroundColor: "#809fff",
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},
buttonText: {
  fontSize: 20,
  color: "#eee",
  fontFamily: "JosefinSans_500Medium",
  textTransform: "capitalize",
},
}
);

export default UserData;