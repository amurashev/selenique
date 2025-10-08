import { redirect } from 'next/navigation'

const BEHANCE = "https://www.behance.net/andreimurashev"

export default async function Entrance() {
   redirect(BEHANCE) 
}
