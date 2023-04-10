import React from 'react'
import { Advantages } from '../../constants/data'
import  styles  from './Section.module.css'


const Section = () => {
  return (
    <div>
        <section className={styles.section}>
            <div className={styles.container_box}>
                <div className={styles.heading}>
                    <h1 className={styles.heading_text}>Why Choose Us?</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                {
                    Advantages.map(data => (
                    <div className="xl:w-3/4 md:w-1/2 p-4 py-10" key={data.id}>
                        <div className="flex flex-r">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_769_15)">
                                <path d="M256 512C323.895 512 389.01 485.029 437.019 437.019C485.029 389.01 512 323.895 512 256C512 188.105 485.029 122.99 437.019 74.9807C389.01 26.9714 323.895 0 256 0C188.105 0 122.99 26.9714 74.9807 74.9807C26.9714 122.99 0 188.105 0 256C0 323.895 26.9714 389.01 74.9807 437.019C122.99 485.029 188.105 512 256 512ZM369 209L241 337C231.6 346.4 216.4 346.4 207.1 337L143.1 273C133.7 263.6 133.7 248.4 143.1 239.1C152.5 229.8 167.7 229.7 177 239.1L224 286.1L335 175C344.4 165.6 359.6 165.6 368.9 175C378.2 184.4 378.3 199.6 368.9 208.9L369 209Z" fill="#F5484A"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_769_15">
                                <rect width="512" height="512" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                        <div className="flex flex-col">
                        <h2 className="text-lg text-white font-bold mb-2 pl-10">{data.heading}</h2>
                        <p className="leading-relaxed text-base pl-10">{data.body}</p>
                        </div>
                    </div>
                    </div>
                    ))
                }
                </div>
                </div>
        </section>
    </div>
  )
}

export default Section