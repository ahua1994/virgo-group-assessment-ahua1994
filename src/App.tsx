import { Button, ConfigProvider, Form, Switch, Typography } from 'antd'
import {FC,useState} from 'react'
import "./App.css"

const App:FC = () => {
  const [editable,setEditable] = useState(true)
  // const purple = "#6B47ED"
  // const border = "#D4CCF7"
  return (
    <ConfigProvider theme={{components:{Switch:{colorPrimary:"#6B47ED"}},token:{colorPrimary:"#6B47ED",colorTextBase:"#343434"}}}>
      <Form className='form bg-white w-[409px] h-[528px] px-8 flex flex-col justify-around'>
        <div className='flex justify-between'>
          <Typography className='text-base font-medium'>Editable</Typography><Switch checked={editable} onClick={()=>setEditable(!editable)} style={{backgroundColor:editable?"#6B47ED":"white" }}/>
          </div>
          <h1>{String(editable)}</h1>
          <Typography className='text-[18px] font-bold'>Are you proficient in ReactJS development?</Typography>
          <Typography className='text-[18px] font-bold'>Which tools do you use?</Typography>
          <Typography className='text-base'>Please select all that apply.</Typography>
          <Button shape='round' size='large' className='text-[18px] w-[200px] h-[60px] text-white bg-[#6B47ED] align-self-center'>Process</Button>
          </Form>
          </ConfigProvider>
  )
}

export default App