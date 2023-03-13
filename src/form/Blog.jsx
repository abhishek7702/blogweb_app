import { useState,useEffect} from 'react'
import { v4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUser } from 'react-icons/fa'

function Blog() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    content: '',
    seo_description: '',
    image:''
  })
 
 const { name, title, content, seo_description,image } = formData

 const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
    const onSubmit = (e) => {
     e.preventDefault()
     if(name && title && content && seo_description && image)
     {
        localStorage.setItem(v4(),JSON.stringify(formData))
        toast.success("Wohooo.. Your data is saved to local storage!", {
            theme: "colored"})

            setFormData({name: '',
            title: '',
            content: '',
            seo_description: '',
            image:''
        })
     }else
      {
       alert(" please provide your fields correctly")
       return 
      }

 }
 const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []);
 


return(
    <>
     <div>
     <ToastContainer />
    </div>


      <section className='heading'>
        <h1>
          <FaUser /> BLOG CREATOR
        </h1>
        <p>Create a Blog</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              value={title}
              placeholder='Enter your title'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='content'
              name='content'
              value={content}
              placeholder='type your content'
              onChange={onChange}
            />
          </div>
          
           
           <div className="form-group">
           <textarea 
              rows="10" cols="70"
              type='text'
              className='form-control'
              id='image'
              name='seo_description'
              value={seo_description}
              placeholder='Enter you description'
              onChange={onChange} 
            >
           </textarea>
           </div>

           <div className='form-group'>
            <input
              type='file'
              className='form-control'
              id='image'
              name='image'
              value={image}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
      
    </>
  )
}

export default Blog