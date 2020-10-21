import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image'

const Body = (props) => {
    const description =
        'Podcast donde hablo de cómo montar un podcast desde cero y sobre cómo la tecnología está influyendo en el mundo digital en el que vivimos.'

    return (
        <div style={{ margin: '10%' }}>
            <Image
                url={
                    (props.content && props.content.avatar) ||
                    'https://cdn-images-1.listennotes.com/podcasts/rsostenido-el-podcast-rsostenido-2_P6Q9o87hp-MOd2_N51EGx.1400x1400.jpg'
                }
            />
            <h5 style={{ margin: '10%' }}>
                {(props.content && props.content.email) || description}
            </h5>
        </div>
    )
}

export default Body
