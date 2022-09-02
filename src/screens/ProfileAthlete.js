import React from "react";
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/Entypo'
import Chat from 'react-native-vector-icons/Ionicons'
const ProfileAthlete = () => {
    const DATA =[
        {
            id:'1',
            image:require('../../assets/images/Image1.png')
        },
        {
            id:'2',
            image:require('../../assets/images/Image2.png')
        },
        {
            id:'3',
            image:require('../../assets/images/image4.png')
        },
        {
            id:'4',
            image:require('../../assets/images/image5.png')
        },
    ];
    const renderItem = ({item, index})=>(
        <View >
            <Image source={item.image} resizeMode='contain' 
            style={{width:'40%'}}
            />
        </View>
    );
    return (
        <View>
            <View style={{paddingLeft:10,flexDirection:'row',height:80,paddingTop:40,backgroundColor:'#7EAA7C'}}>
                <Icon name="menu" size={20} t color='#fff'/>
                <View style={{paddingLeft:130}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Athlete</Text>
                </View>
            </View>
            <View style={{marginTop:18}}>
                <View style={{paddingHorizontal:30,flexDirection:'row'}}>
                <Image source={require('../../assets/images/athlete1.png')} 
                resizeMode='contain' style={{}}/>
                <View style={{flexDirection:'column',paddingLeft:10}}>
                    <Text style={{fontWeight:'bold',letterSpacing:1,color:'#000',
                    opacity:0.7,fontSize:30,paddingTop:15}}>
                    {`Matthieu\nLaroche`}
                    </Text>
                    <View style={{flexDirection:'row',marginTop:18}}>
                   <Image source={require('../../assets/logo/flag.png')}/>
                    <View style={{backgroundColor:'#F4EF85',height:25,width:60,
                    marginLeft:25,
                    alignItems:'center',justifyContent:'center',borderRadius:8}}>
                        <Text style={{fontWeight:'bold',fontSize:12}}>PRO</Text>
                    </View>
                   </View>
                    <View style={{flexDirection:'row',marginTop:18}}>
                        <View style={{
                            backgroundColor:'#D8D8D8',
                            height:25,
                            borderRadius:10,
                            justifyContent:'center',
                            alignItems:'center',
                            marginRight:25,
                            width:70}}>
                            <Text style={{fontWeight:'bold',letterSpacing:0.7}}>Age : 21</Text>
                            </View>
                            <View style={{
                            backgroundColor:'#D8D8D8',
                            height:25,
                            borderRadius:10,
                            justifyContent:'center',
                            alignItems:'center',
                            width:50}}>
                            <Text style={{fontWeight:'bold',letterSpacing:0.7}}>MF</Text>
                            </View>
                    </View> 
                    <View style={{marginTop:16}}>
                        <Text style={{fontSize:15,fontWeight:'bold',letterSpacing:0.7}}>Paris-Saint-Germain</Text>
                    </View>
                    <View style={{backgroundColor:'#7EAA7C',height:40,width:100,
                    borderRadius:10,justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:15}}>
                        <Text style={{color:'#fff',fontSize:18}}>Start</Text>
                        </View>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontWeight:'600',fontSize:15}}>Followers</Text>
                        <Text style={{fontWeight:'600',fontSize:15}}>2 M</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontWeight:'600',fontSize:15}}>Following</Text>
                        <Text style={{fontWeight:'600',fontSize:15}}>1.506</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontWeight:'600',fontSize:15}}>Likes</Text>
                        <Text style={{fontWeight:'600',fontSize:15}}>115K</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',
                alignItems:'baseline',
                paddingHorizontal:20,
                justifyContent:'space-between',marginTop:20}}>
                    <Text style={{letterSpacing:1,fontSize:17,opacity:0.8}}>Highlight</Text>
                    <View style={{height:40,backgroundColor:'#7EAA7C',width:100,
                    alignItems:'center',justifyContent:'center',borderRadius:20}}>
                        <Text style={{color:'#fff',fontSize:15}}>Follow</Text>
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/images/image3.png')}
                    resizeMode='contain' 
                    style={{width:'90%',borderRadius:10}}/>
                </View>
                <View style={{marginTop:15,marginBottom:100,paddingHorizontal:20}}>
                    <Text style={{letterSpacing:0.6,fontSize:17,opacity:0.8}}>Last posts</Text>
                    
                    <FlatList
                    data={DATA}
                    horizontal={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    // numColumns={2}
                    />
                </View>
            </View>
        </View>
    )
}

export default ProfileAthlete;