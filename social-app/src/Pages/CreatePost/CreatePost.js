import React from "react";
import ContentLayout from "../../Components/Layout/ContentLayout";
import LeftSidebarLayout from "../../Components/Layout/LeftSidebarLayout";
import MainLayout from "../../Components/Layout/MainLayout";
import RightSidebarLayout from "../../Components/Layout/RightSidebarLayout";
import Ckeditor from "./Ckeditor"
import request from "../../Api/request"
import axios from 'axios'

export default function CreatePost() {

  const [image, setImage] = React.useState();
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview)
    }
  }, [image])

  const handleChangeFile = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setImage(file)
    e.target.value = null
  }

  const renderImage = () => {
    if (image) {
      return (
        <div className='text-center mt-2'>
          {image && <img src={image.preview} alt='anh' width='80%' />}
        </div>
      )
    }
  }

  const handleBlur = (data) => {
    setText(data)
  }

  const handleClickCreatepost = async () => {
    if (text === '') {
      alert('Nội dung không được để trống')
    } else {
      try {
        let bodyFormData = new FormData();
        bodyFormData.append('file', image);

        const res = await request({
          url: '/upload',
          method: 'POST',
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })

        const data = {
          content: text,
          images: res.data
        }

        const post = await request({
          url: '/posts/create',
          method: 'POST',
          data: data,
        })

        alert("Tạo bài viết thành công")
        console.log(post)
        setText('')
        setImage('')
      } catch (err) {
        alert("Tạo bài viết thất bại")
      }
    }
  }

  return (
    <MainLayout>
      <ContentLayout>
        <div className='text-center my-2'>
          <h4>Create new post</h4>
        </div>
        <div className='flex-grow-1 overflow-auto'>
          <div>
            <input type='file' className='form-control' onChange={handleChangeFile} />
          </div>
          {renderImage()}
          <Ckeditor handleBlur={handleBlur} text={text} />
          <button className='btn btn-primary mt-2' onClick={handleClickCreatepost}>Create</button>
        </div>
      </ContentLayout>
      <RightSidebarLayout>
        <div>
          chu ngoc thai
        </div>
      </RightSidebarLayout>
    </MainLayout>
  )
}