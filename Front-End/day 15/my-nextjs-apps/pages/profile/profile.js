import Link from 'next/link';
export default function Profile(){
    return(
        <div>
            <h1>Profile Page</h1>
            <Link href="/home">go to home</Link>
        </div>
    )
}