import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Root page index</h1>
      <br/>
      <Image
        src={require('./../public/kucing-lucu.jpg')}
        alt='kucing'
        width={'1300'}
        height={'1300'}
        />
      
      {/* <image
        loader={() => 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/19040430/Mengenal-Faktor-yang-Mempengaruhi-Pertumbuhan-Kucing.jpg'}
        src='kucing'
        alt='kucing'
        width={'300'}
        height={'300'}
        /> */}

      <Image
        src={'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/19040430/Mengenal-Faktor-yang-Mempengaruhi-Pertumbuhan-Kucing.jpg'}
        alt='kucing'
        width={'300'}
        height={'300'}
        />

    </div>
  )
}
