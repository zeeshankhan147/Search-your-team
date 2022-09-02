import React from "react";
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
const ProfileFan = () => {
    const DATA =[
        {
            id:'1',
            image:require('../../assets/images/Image1.png')
        },
        {
            id:'2',
            image:require('../../assets/images/Image2.png')
        },
        // {
        //     id:'3',
        //     image:require('../../assets/images/image4.png')
        // },
        // {
        //     id:'4',
        //     image:require('../../assets/images/image5.png')
        // },
    ];
    const renderItem = ({item, index})=>(
        <View >
            <Image source={item.image} resizeMode='contain' 
            style={{width:180,height:100}}
            />
        </View>
    );
    return (
        <View>
            <View style={{paddingLeft:10,flexDirection:'row',height:80,paddingTop:40,backgroundColor:'#7EAA7C'}}>
                <Icon name="menu" size={20} t color='#fff'/>
                <View style={{paddingLeft:130}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Fan</Text>
                </View>
            </View>
            <View style={{marginTop:15}}>
                <View style={{paddingHorizontal:20}}>
                <Image source={require('../../assets/images/athlete1.png')} 
                resizeMode='contain' style={{alignSelf:'center',height:200,width:200}}/>
                <View style={{flexDirection:'column',paddingLeft:10}}>
                    <Text style={{letterSpacing:1,color:'#000',opacity:0.7,fontSize:18,paddingTop:15,alignSelf:'center'}}>Chrismand229</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingHorizontal:30}}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontWeight:'600',fontSize:15}}>Followers</Text>
                        <Text style={{fontWeight:'600',fontSize:15}}>1,293</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontWeight:'600',fontSize:15}}>Following</Text>
                        <Text style={{fontWeight:'600',fontSize:15}}>1,506</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                        <Text style={{fontWeight:'600',fontSize:15}}>Likes</Text>
                        <Text style={{fontWeight:'600',fontSize:15}}>6K</Text>
                    </View>
                </View>
                <View style={{marginTop:15,marginBottom:100,paddingHorizontal:20}}>
                    <Text style={{letterSpacing:0.6,fontSize:17,opacity:0.8,marginBottom:20}}>Last posts</Text>
                    
                    {/* <ScrollView horizontal={true} > 
                       {DATA.map((item,index)=>{
                           return    <View >
                           <Image source={item.image} resizeMode='contain' 
                           style={{width:200,height:100}}
                           />
                       </View>
                       })} 
                    </ScrollView> */}
                    <FlatList
                    data={DATA}
                    // style={{flex:1,backgroundColor:"red"}}
                    // horizontal={false}
                    ItemSeparatorComponent={()=><View style={{height:20}} />}
                    renderItem={renderItem}
                    key={'#'}
                    keyExtractor={item => "#" + item.id}                    // keyExtractor={item => item.in}
                    numColumns={2}
                    />
                </View>
            </View>
        </View>
    )
}

export default ProfileFan;