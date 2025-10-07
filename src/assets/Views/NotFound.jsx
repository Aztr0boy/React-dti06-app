import React from 'react'
import { TbAdjustmentsCancel } from "react-icons/tb";

export default function NotFound() {
  return (
    <>
    <div className='mt-30'>
      <h1 className='text-3xl text-center font-bold text-red-600'>
        <TbAdjustmentsCancel  className='mx-auto' text-4xl/>
            ไม่พบหน้าที่ต้องการ
        <br/> ไปลองมาใหม่นะ
        <br/> ลองตรวจสอบ URL 
      </h1>
    </div>
    </>
  )
}
