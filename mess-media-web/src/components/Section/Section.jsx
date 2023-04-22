import React from 'react'

import { Advantages } from '../../constants/data'


import  styles  from './Section.module.css'
import { FaCheckCircle  } from 'react-icons/fa';

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
                            <FaCheckCircle  className="text-primary outline-none"  size={64} />
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