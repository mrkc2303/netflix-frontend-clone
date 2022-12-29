import React from 'react'

function Card({mainText, captionText, reverse, image, video, videoLink, videoClass}) {
  return (
    <div className='card'>
            {(reverse === 'false' ? (
                <div className='cardContainer'>
                    <div className='textContainer'>
                        <h1>{mainText}</h1>
                        <h2>{captionText}</h2>
                    </div>
                    <div className='imageContainer'>
                        <img src={image} alt="Card"/>
                        {(video === 'true' ? (
                            <div className={videoClass}>
                                <video class="our-story-card-video" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                                    <source src={videoLink} type="video/mp4" />
                                </video>
                            </div>
                        ):(
                            <></>
                        ))}
                    </div>
                </div>
            ): (
                <div className='cardContainer'>
                    <div className='imageContainer'>
                        <img src={image} alt="Card"/>
                        {(video === 'true' ? (
                            <div className={videoClass}>
                                <video class="our-story-card-video" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                                    <source src={videoLink} type="video/mp4" />
                                </video>
                            </div>
                        ):(
                            <></>
                        ))}
                    </div>
                    <div className='textContainer reverse'>
                        <h1>{mainText}</h1>
                        <h2>{captionText}</h2>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default Card