import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <section id="footer">
            <span style={{ fontWeight: 700, fontSize: 28 }}>Contact Us</span>
            <div className="footbox">

                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <Link href={"mailto:opensourceprogrammingclub.vitc@gmail.com"} className="cred"><Mail />opensourceprogrammingclub.vitc@gmail.com</Link>
                    <Link href="https://www.instagram.com/ospc_vitc?igsh=MXR3dzdwanEwYWR0eA==" className="cred"><Instagram />ospc_vitc</Link>
                </div>
            </div>

        </section>
    );
}
