
import { Link } from 'react-router-dom'
import Button from "../reusable/Button"

const Header = () => {
  return (
<div className='flex p-[50px] justify-between bg-[#e6ddddc4] h-[70px] text-[#5d15b0] font-[15px] items-center'>
  <main className='flex gap-3.5 items-center'>
    <Link to="/"><img src="../../../public/download.png" alt="kuda logo"  className='w-[100px]'/></Link>
    <Link to="personal">Personal</Link>
    <Link to="business">Business</Link>
    <Link to="company">Company</Link>
    <Link to="help">Help</Link>
    </main>

    <main className=' flex gap-2.5'>
      <Button btn ="Sign up"/>
      <Button btn ="Join kuda"/>
    </main>

</div>




  
  )
}

export default Header
