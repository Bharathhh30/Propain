import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//creating drawer for custom content
function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    {
      id : 42,
      title : 'Item 42',
    },
    {
      id : 43,
      title : 'Item 43',
    },
    {
      id : 44,
      title : 'Item 44',
    },
  ]

  return (
    <DrawerContentScrollView {...props}>
      <View 
        style = {{alignItems:'center',padding : 16 , borderWidth: 2,borderColor:'red' , margin:10}}
      >
        <Image 
          source={require('@/assets/images/react-logo.png')}
          style = {{width:100,height:100,borderRadius : 50 ,borderWidth: 2, borderColor:"black"}}
        />
      </View>
      <DrawerItemList {...props} /> {/* this is list of drawer screens and what
        ever we want to render above the drawer list we write it above and for below we 
        write it on below
      */}
      <View>
        <Text style= {{fontSize:16 , fontWeight : 'bold'}}>
          Items
        </Text>
      </View>

      {menuItems.map((item)=>{
        //having tint color to indicate which page is active rn
        const isActive = pathname === `/${item.id}`
        return (
          <DrawerItem 
            focused = {isActive}
            activeTintColor="yellow"  //tint will apply color to text 
            activeBackgroundColor="pink"
            key={item.id}
            label={item.title}
            onPress={()=> router.push(`/${item.id}`)}
          />
        )
      })}

      <View 
        style = {{alignItems:'center',padding : 16 , borderWidth: 2,borderColor:'red' , margin:10}}
      >
        <Image 
          source={require('@/assets/images/react-logo.png')}
          style = {{width:100,height:100,borderRadius : 50 ,borderWidth: 2, borderColor:"black"}}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* drawer customisation using screenOptions */}
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveBackgroundColor: "lightblue",
          drawerHideStatusBarOnOpen: false,
          drawerStyle: {
            width: 320, // Change drawer width
            backgroundColor: 'red', // Change drawer background color
            borderWidth : 2,
            borderRightColor : 'blue',
            borderBottomRightRadius : 0, //default the radius is curved which didnot seem nice
            borderTopRightRadius : 0
          },

        }}
      >
        {/* manually adding screens to drawer  */}
        {/* Drawer screen customisation using options */}
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "my home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} />
            ),
          }}
        />
        {/* we wrote options for home , but it got applied for news as well haha */}
        <Drawer.Screen name="news" />
        {/* to not display drawer item  */}
        <Drawer.Screen 
          name="[id]"
          options={{
            drawerItemStyle : {
              display : "none",
            }
          }}
        />
      </Drawer>
      ;
    </GestureHandlerRootView>
  );
}
