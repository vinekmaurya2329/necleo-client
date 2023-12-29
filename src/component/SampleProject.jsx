import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;
function SampleProject() {
    const [fakeData,setFakeData] = useState([]);
    useEffect(()=>{
        async function fetchData(){ 
          const  loremData = await axios.get('https://picsum.photos/v2/list?page=1&limit=9')
            setFakeData(loremData)
            console.log(fakeData,'lopremdata');
            
        }
      fetchData()
      },[]) 
  return (
    <>
        <h1>Sample Projects</h1><hr />

    <div className='sample-main'>
        <div className="loremdata">
  { fakeData.data && fakeData.data.map((item)=>{
     return   <div className="cards">
      <Card
     style={{ width: 300 ,marginBottom:'15px'}}
     cover={
       <img
         alt="img"
         src= {item.download_url}
       />
     }
    //  actions={[
    //    <SettingOutlined key="setting" />,
    //    <EditOutlined key="edit" />,
    //    <EllipsisOutlined key="ellipsis" />,
    //  ]}
   >
   
    
     <Meta
       avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_TZ3ySAgSnwIdA-dxSRG6NBr0oNLC4fq8rU0zQTZag&s" />}
       title={item.author}
       description="This is the description"
     />
   </Card>
     </div>
    })}
    
  </div>

    </div>
    </>
  )
}

export default SampleProject