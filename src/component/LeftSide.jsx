import React, { useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import  '../../src/App.css';
import { TbApps } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Button, Modal } from 'antd';
import axios from 'axios'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;


// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );


const Sidebar = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const [title,setTitle] = useState(' ');
  const [discription,setDiscription] = useState(' ');
  const [image,setImage] = useState(' ');
  const [allproject,setAllproject]= useState([])
// updated function State
const [uptitle,setUptitle] =useState('')
const [updiscription,setUpdiscription] = useState('')
const [upimage,setUpimage] =useState(' ')
const [updateid,setUpdateid]= useState('')
const [deleteId,setDeleteId]= useState('')
const [viewId,setViewId]=  useState('')
  const formdata = new FormData()
  formdata.append('image',image)
  formdata.append('title',title)
  formdata.append('discription',discription)
  const data = formdata;
    const formdata2 = new FormData()
    formdata2.append('image',upimage)
    formdata2.append('title',uptitle)
    formdata2.append('discription',updiscription)
    const data2 = formdata2;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleOk2 = ()=>{
    setIsModalOpen2(false);
  }
  const handleOk4 = ()=>{
    setIsModalOpen4(false);
  }
  const handleOk3 =async ()=>{
    setIsModalOpen3(false)
    const url = `https://necleo.onrender.com/delete/`+deleteId
    await axios.delete(url)
    window.location.reload()
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCance2= () => {
    setIsModalOpen2(false);
  };
  const handleCance3= () => {
    setIsModalOpen3(false);
  };const handleCance4= () => {
    setIsModalOpen4(false);
  };
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      label: <a href="">Profile</a>,
      key: '0',
    },
    {
      label: <a href="">logout</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'more about',
      key: '3',
    },
  ];
//   create project functions  - - ---  
async function submitHandle(e){
 
 try {
  const result =  await axios.post('https://necleo.onrender.com/createpost',data)
 console.log(result,'result')
 setIsModalOpen(false)
 } catch (error) {
      console.log(error, ' error');
      setIsModalOpen(false)
 }
}
// finding all projects 
useEffect(()=>{
   async function fetchData(){
    const projects = await axios.get('https://necleo.onrender.com/allproject')
    setAllproject(projects.data.projects)
    console.log(projects.data.projects,'projects');

   }
   fetchData()
})
  //  update card function 
  async function updateCard(){
    console.log('updatecard');
    const url = `https://necleo.onrender.com/update/` + updateid
   const updated =  await axios.put(url,data2)
          window.location.reload()
  }
  // control 
   function controlupdate(updateId){
    setIsModalOpen2(true)
    setUpdateid(updateId)
  }
  // delete function
   async function deleteCard(deleteId){
    setIsModalOpen3(true)
    setDeleteId(deleteId)
    
  }
  // view control function 
  function viewCont(viewid){
    setIsModalOpen4(true)
    setViewId(viewid)
  }
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
     
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => { 
          console.log(collapsed, type);
        }}
        className='sidebar'
      ><div className='sidebar-container'>
        <div className="uper">
        <img src="http://localhost:3000/N-logo.png" className='logo' alt="img" /> <hr className='line' />
        {/* <h1 className="demo-logo-vertical">hello</h1><hr /> */}
        <h4 style={{color:'#FA782F'}}><i class="ri-database-2-fill"></i><a href="/" style={{color:'#FA782F'}}> My Projects</a></h4>
        <h4 style={{color:'#C4C4C4'}}><i class="ri-apps-fill"></i><a href="/sampleproject" style={{color:'#C4C4C4'}}> Sample Projects</a></h4> <hr />
        <h4 style={{color:'#C4C4C4'}}><TbApps /> <a href="/apps" style={{color:'#C4C4C4'}}>Apps</a></h4>
        <h4 style={{color:'#C4C4C4'}}><i class="ri-play-circle-fill"></i><a href="/intro" style={{color:'#C4C4C4'}}> Intro to Necleo</a></h4>
        <div className="demo-logo-vertical" />
        </div>
        <div className="lower">
          <h4 style={{color:'#C4C4C4'}}><i class="ri-question-fill"></i> <a href="/helppage" style={{color:'#C4C4C4'}}>Help & Support</a></h4>
          <h4 style={{color:'#C4C4C4'}}> <i class="ri-feedback-fill"></i> <a href="/feedback" style={{color:'#C4C4C4'}}>feedback</a></h4>
          <h4 style={{color:'#000000'}}><TbLayoutSidebarLeftCollapseFilled  /> <a href="/collapse" style={{color:'#000000'}}>Collapse</a></h4>
        </div>
        </div>
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={""} /> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            backgroundColor:'white'
          }}
        >
            <div className='header'>
              <p className='header-title'><span className='span1'>Free Trail</span> |<span className='span2'> 2 days left</span>  </p>
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='profile-img' alt="img" />
                <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
       
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
               
            </div>
        </Header>
        <Content
          style={{
            margin: '10px 10px 0',
          
          }}
          
        >
          <div
            style={{
              padding: 1,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              backgroundColor:'#f8f8f8'
            }}
          >
            <div className="content-container">
             <div className='create-project' >
              <div className='inside-create'onClick={showModal} >
              <i class="ri-image-add-line" ></i>
              </div>
              
       
      <Modal title="Create Card" open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}  footer={null}>
        <form onSubmit={submitHandle}>

        <input type="file" name='image'  onChange={(e)=>setImage(e.target.files[0])} />
       <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)} />
       <input type="text" placeholder='discription' onChange={(e)=>setDiscription(e.target.value)} />
       <button type='submit'> Submit</button>
       
        </form>
      </Modal>
              <h6>Create a new  Projecr <br /> or try a <span style={{color:'orange'}}>sample project</span></h6>
             </div>
             
  
            </div>

  <div className='projects'>
    {allproject && allproject.map((item)=>{
  return  <div className="card"><Card
  style={{
    width: 300,
    
  }}
  cover={
    <img
      alt="example"
      src={`https://necleo.onrender.com/images/uploads/${item.image}`}
    />
  }
  
  actions={[
    <button className='view-btn' onClick={()=>viewCont(item._id)}><i class="ri-eye-fill"></i></button>,
    <button onClick={()=>controlupdate(item._id)} className='edit-btn'><i class="ri-pencil-fill"></i></button>,
    // <EditOutlined key="edit" />,
    <button onClick={()=>deleteCard(item._id)} className='delete-btn'><i class="ri-delete-bin-2-fill"></i> </button>,
  ]}
>
  <Meta
    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
    title={item.title}
    description={item.discription}
  />
</Card></div>

    })}
    {/* delete modal */}
    <Modal title="Delete Card" open={isModalOpen3} onOk={handleOk3}  onCancel={handleCance3} >
       <h5> are you sure want to delete this card ? </h5>
      </Modal>
      {/* view model  */}
      <Modal title="view details" open={isModalOpen4} onOk={handleOk4}  onCancel={handleCance4} >
      
       {allproject && allproject.map((item)=>{
         if(viewId == item._id){
            return  <div className="view">
            <img src={`https://necleo.onrender.com/images/uploads/`+ item.image} alt="img" className='view-image' />
            <h3>{item.title}</h3>
            <p>{item.discription}</p>
          </div>
         }
          
      })}
        
      </Modal>
      
  </div>
  {/*  update modal */}

  <Modal title="update card" open={isModalOpen2} onOk={handleOk2}  onCancel={handleCance2}  footer={null}>
        <form onSubmit={updateCard}>

        <input type="file" name='image'  onChange={(e)=>setUpimage(e.target.files[0])} />
       <input type="text" placeholder='title' onChange={(e)=>setUptitle(e.target.value)} />
       <input type="text" placeholder='discription' onChange={(e)=>setUpdiscription(e.target.value)} />
       <button type='submit'> Submit</button>
        </form>
      </Modal>
 {/* end  */}
          </div>
          
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        > 
          {/* Ant Design ©2023 Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;