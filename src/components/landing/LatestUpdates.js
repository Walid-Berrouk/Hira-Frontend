import React from 'react'

// Assets
import PlayIcon from "../../assets/icons/play-icon.png"
import Logo from '../../assets/imgs/logo.png'
import youtubeVideo from '../../assets/imgs/youtube-video.png'

export default function LatestUpdates() {
  return (
    <div className='text-white flex flex-col justify-center pt-32 px-20'>
        <h1 className='md:text-5xl text-3xl text-left capitalize mt-20 mx-24'>What's <span className='font-bold'>New with Hira ?</span></h1>
        <div className='flex mt-24 items-center justify-center gap-x-16'>
            <div>
                <img src={youtubeVideo} alt="Video-Youtube" className='h-60'/>
            </div>
            <div className='w-2/5'>
                <h3 className='font-bold md:text-5xl text-3xl'>Discover Your <br />Future Workspace</h3>
                <p className='md:text-xl text-md text-left mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus tempora repellat quasi eaque eligendi exercitationem itaque numquam libero sapiente, iusto, velit atque autem nihil voluptatum tempore, sint maxime eveniet adipisci. Fugit obcaecati incidunt voluptatem voluptates quos molestiae doloribus vitae laborum, recusandae error. Cumque praesentium ipsam facere dolores quos. Officia.</p>
            </div>

        </div>
        <div className='flex mt-24 items-center justify-center gap-x-16'>
            <div>
                <h3 className='font-bold md:text-5xl text-3xl'>Benefit <br />from Others <br /> Experience</h3>
            </div>
            <div className='w-3/5'>
                <p className='md:text-xl text-md text-left mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus tempora repellat quasi eaque eligendi exercitationem itaque numquam libero sapiente, iusto, velit atque autem nihil voluptatum tempore, sint maxime eveniet adipisci. Fugit obcaecati incidunt voluptatem voluptates quos molestiae doloribus vitae laborum, recusandae error. Cumque praesentium ipsam facere dolores quos. Officia.</p>
            </div>

        </div>
    </div>
  )
}
