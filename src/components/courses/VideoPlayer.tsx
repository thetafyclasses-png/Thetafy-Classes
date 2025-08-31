'use client'

interface VideoPlayerProps {
  videoId: string
  autoplay?: boolean
  showRelated?: boolean
}

const VideoPlayer = ({ videoId, autoplay = false, showRelated = false }: VideoPlayerProps) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?${new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    rel: showRelated ? '1' : '0',
    modestbranding: '1',
    fs: '1',
    cc_load_policy: '1',
    iv_load_policy: '3',
    autohide: '1'
  }).toString()}`

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="video-responsive">
        <iframe
          src={embedUrl}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default VideoPlayer

