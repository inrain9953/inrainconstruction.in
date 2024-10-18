import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PopUp = () => {
  return (
    <div>
        <div className='fixed bottom-16 md:bottom-20 right-7 md:right-10 text-xl z-50'>
            <a href='tel:+919910220794' className='bg-sky-500 p-5 rounded-full'>
                <CallIcon className='cursor-pointer' fontSize='medium' />
            </a>
        </div>
        <div className='fixed bottom-16 md:bottom-20 left-7 md:left-10 text-xl z-50'>
            <a href='https://wa.me/919910220794' className='bg-green-500 p-5 rounded-full'>
                <WhatsAppIcon className='cursor-pointer' fontSize='medium' />
            </a>
        </div>
    </div>
  )
}

export default PopUp