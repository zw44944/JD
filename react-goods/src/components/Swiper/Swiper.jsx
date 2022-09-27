import React from 'react'
import { Carousel, Image } from 'antd';

export default function Swiper(props) {
    return (
        <>
            <Carousel autoplay>
                {
                    props.list.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <Image
                                    width={'100%'}
                                    height={'4rem'}
                                    src={item.imgUrl}
                                />
                            </div>
                        )
                    })
                }

            </Carousel>
        </>
    )
}
