
import { Link } from 'react-router-dom'
import Button from "../reusable/Button"

const Header = () => {
  return (
<div className='flex p-[50px] justify-between bg-amber-500 h-[70px] text-[#40196D] font-[15px] items-center'>
  <main className='flex gap-3.5'>
    <Link to="/"><img src="" alt="kuda logo" /></Link>
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
