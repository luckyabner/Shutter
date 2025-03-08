import Link from 'next/link'
import React from 'react'

export default function SiteLogo() {
  return (
    <Link href='/'>
      <div
        className={
          'flex h-16 items-center gap-2 font-bold text-4xl'
        }
      >
        <div className='flex-shrink-0 tracking-wide'>CamLife</div>
      </div>
    </Link>
  )
}
