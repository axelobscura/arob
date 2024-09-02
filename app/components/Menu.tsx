"use client"
import Link from "next/link";
import { useParams } from 'next/navigation'

export default function Menu(){
    const params = useParams();
    console.log(params);
    return (
        <div className="menu">
            <ul className="flex">
                <li>
                    <Link href="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link href="/quienes-somos">
                        QUIÉNES SOMOS
                    </Link>
                </li>
                <li>
                    <Link href="/galeria">
                        GALERÍA
                    </Link>
                </li>
                <li>
                    <Link href="/contacto">
                        CONTACTO
                    </Link>
                </li>
            </ul>
        </div>
    )
}